import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const staticSuggestions = [
        "RELIANCE",
        "TCS",
        "INFOSYS",
        "HDFC BANK",
        "ICICI BANK"
    ];

    return (
        <section className="h-[83vh] py-20">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Track Stocks, Market Trends, and Research Reports
                </h1>
                <p className="text-white text-lg mb-8">
                    Get real-time stock data and insights instantly
                </p>

                <div className="relative w-full sm:w-96 mx-auto">
                    <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-white" />
                    <input
                        type="text"
                        placeholder="Search stock by name or symbol"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="pl-10 pr-4 py-3 rounded w-full text-gray-300 placeholder:text-gray-600 border-1"
                    />
                    {isFocused && (
                        <div className="absolute top-full left-0 right-0  border mt-1 rounded shadow-lg z-10">
                            {staticSuggestions.map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-2 hover:bg-gray-600 text-white cursor-pointer text-left"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>  
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
