import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { fetchStock } from "@/lib/fetchStock";

const Hero = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {

        if (!search) return;
        setLoading(true);
        console.log("loadig ", loading);
        let timeoutId = setTimeout(async () => {

            console.log("data frm search api ", loading);
            try {
                const data = await fetchStock(search);
                console.log("data from api fnc ", data);

                setSuggestions(data);
            } catch {
                setSuggestions([]);
            } finally {
                setLoading(false);
            }

        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [search])

    const staticSuggestions = [
        { company: "Tata Consultancy Services Ltd.", symbol: "TCS", type: "stock" },
        { company: "Reliance Industries Ltd.", symbol: "RELIANCE", type: "stock" },
        { company: "Infosys Ltd.", symbol: "INFOSYS", type: "stock" },
        { company: "HDFC Bank Ltd.", symbol: "HDFC BANK", type: "stock" }
    ];
    const dropdownData = search ? suggestions : staticSuggestions;

    const handleClick = (symbol) => {
        router.push(`/stock/${symbol}`);
    };

    return (
        <section className="h-[75vh] py-20">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Track Stocks, Market Trends, and Research Reports
                </h1>
                <p className=" text-lg mb-8">
                    Get real-time stock data and insights instantly
                </p>

                <div className="relative w-full sm:w-96 mx-auto">
                    <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search stock by name or symbol"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 500)}
                        className="pl-10 pr-4 py-3 rounded w-full text-gray-300 placeholder:text-gray-600 border-[0.5px]"
                    />
                    {isFocused && (
                        <div className="absolute top-full left-0 right-0  border mt-1 rounded shadow-lg z-10">
                            {loading ? (
                                <div className="px-4 py-2 text-gray-400">Loading</div>
                            ) : search && suggestions.length == 0 ? (
                                <div className="px-4 py-2 text-gray-400">No results found</div>
                            ) : (
                                dropdownData.map((item) => (
                                    <div
                                        onClick={() => handleClick(item.symbol)}
                                        key={item.symbol}
                                        className="px-4 py-1 bg-slate-900  hover:bg-gray-600 text-white cursor-pointer text-left"
                                    >
                                        <p className="font-medium">{item.company}</p>
                                        <p className="text-blue-500 text-sm">{item.symbol}</p>
                                    </div>
                                ))

                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
