import { useState } from "react";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
    const links = [
        { name: "Stock Picks", href: "#" },
        { name: "Research Report", href: "#" },
        { name: "Market", href: "#" },
        { name: "Tools", href: "#" },
        { name: "Portal AI", href: "#" },
        { name: "View Pricing", href: "#" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white py-2 px-4 relative shadow-xl">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/">StockTicker</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>☰</button>
                </div>
                <div className="hidden md:flex items-center md:gap-6">
                    {links.map(link => <Link key={link.name} href={link.href}>{link.name}</Link>)}
                    <Link href="/favourites" className="flex items-center gap-1  rounded">
                        <AiOutlineHeart size={24} />

                    </Link>
                    <Link href="#" className="bg-blue-500 px-3 py-1 rounded">Login</Link>
                </div>
            </div>

            <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900 py-4 flex flex-col items-center gap-2 rounded shadow-lg z-50 ${isOpen ? "flex" : "hidden"
                }`}>
                {links.map(link => <Link key={link.name} href={link.href}>{link.name}</Link>)}
                <Link href="/favourites" className="bg-blue-500 px-3 py-1 rounded">Fav</Link>
                <Link href="/login" className="bg-blue-500 px-3 py-1 rounded text-center">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;