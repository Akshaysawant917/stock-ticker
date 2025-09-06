import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { fetchStock } from "@/lib/fetchStock";
import Image from "next/image";

const Hero = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {

        if (!search) return;
        setLoading(true);
        // console.log("loadig ", loading);
        let timeoutId = setTimeout(async () => {

            // console.log("data frm search api ", loading);
            try {
                const data = await fetchStock(search);
                // console.log("data from api fnc ", data);
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
        { company: "Infosys Ltd.", symbol: "INFY", type: "stock" },
        { company: "HDFC Bank Ltd.", symbol: "HDFCBANK", type: "stock" }
    ];
    const dropdownData = search ? suggestions : staticSuggestions;

    const handleClick = (symbol) => {
        router.push(`/stock/${symbol}`);
    };

    return (
        <section className="h-[50vh] sm:h-[60vh]  lg:h-[85vh] py-8 sm:py-12 md:py-20 relative">
            <Image
                src="/bg-blue.jpg"
                alt="Stock background"
                layout="fill"
                objectFit="cover"
                priority
                className="z-0 absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/70 z-10"></div>

            <div className="relative z-20 max-w-4xl mx-auto text-center px-4 h-full flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Track Stocks, Market Trends, and Research Reports
                </h1>
                <p className=" text-lg mb-8 text-white">
                    Get real-time stock data and insights instantly
                </p>

                <div className="relative w-full sm:w-96 mx-auto">
                   <FiSearch className="absolute text-white top-1/2 left-3 -translate-y-1/2 z-10 drop-shadow-sm" />
                    <input
                        type="text"
                        placeholder="Search stock by name or symbol"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 500)}
                        className="pl-10 pr-4 py-3 border-1 backdrop-blur-md text-white  rounded-md w-full  placeholder:text-gray-300 order-[0.5px]"
                    />
                    {isFocused && (
                        <div className="absolute bg-slate-900 top-full left-0 right-0  border mt-1 rounded shadow-lg z-10">
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
