import Head from "next/head";
import Favourites from "@/components/fav/Favourites";

const FavouritesPage = () => {
    return (
        <>
            <Head>
                <title>Your Favourite Stocks | Stock Tracker</title>
                <meta name="description" content="View and manage your favourite stocks. Quickly access your preferred stocks with real-time data and insights." />
                <meta name="keywords" content="favourite stocks, stock watchlist, stock tracker, stock market" />
            </Head>
            <Favourites />
        </>
    );
};

export default FavouritesPage;
