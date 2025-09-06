import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { removeFavourite } from "@/lib/favourites";

const FavouritesComp = () => {
    const router = useRouter();
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favouriteStocks")) || [];
        setFavourites(favs);
    }, []);

    function handleRemove(symbol) {
        removeFavourite(symbol);
        setFavourites(prev => prev.filter(s => s.symbol !== symbol));
    };

    function handleStockClick(symbol) {
        router.push(`/stock/${symbol}`);
    }


    return (
        <>
            {favourites.length === 0 ? (
                <div className="flex flex-col items-center bg-slate-900 justify-center min-h-[60vh] py-30 text-center px-4">

                    <h2 className="text-2xl font-bold mb-2 text-gray-200">No favourites yet!</h2>
                    <p className="text-gray-400 mb-4">
                        Start adding your favorite stocks to quickly access them later.
                    </p>
                    <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        Explore Stocks
                    </Link>
                </div>) : (
                <div className=" bg-slate-900 min-h-screen mx-auto p-8">
                    <h1 className="text-3xl font-bold mb-6 text-white">Your Favourite Stocks</h1>
                    <div className="grid md:grid-cols-2 gap-4">
                        {favourites.map(stock => (
                            <div key={stock.symbol} className="p-4 bg-slate-800 rounded shadow flex justify-between items-center">
                                <div onClick={() => handleStockClick(stock.symbol)} className="cursor-pointer">
                                    <p className="font-medium text-white">{stock.company}</p>
                                    <p className="text-blue-400 text-sm">{stock.symbol}</p>
                                </div>
                                <button
                                    onClick={() => handleRemove(stock.symbol)}
                                    className="bg-red-500 px-3 py-1 rounded text-white"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </>
    );
};

export default FavouritesComp;
