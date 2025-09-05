import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const links = [
        { name: "Stock Picks", href: "/stock-picks" },
        { name: "Research Report", href: "/research-report" },
        { name: "Market", href: "/market" },
        { name: "Tools", href: "/tools" },
        { name: "Portal AI", href: "/portal-ai" },
        { name: "View Pricing", href: "/pricing" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-4 relative">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/">StockTicker</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>☰</button>
                </div>
                <div className="hidden md:flex items-center md:gap-4">
                    {links.map(link => <Link key={link.href} href={link.href}>{link.name}</Link>)}

                    <Link href="/login" className="bg-blue-500 px-3 py-1 rounded">Login</Link>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? "flex" : "hidden"} flex-col w-full mt-2 py-4 items-center gap-2 rounded`}>
                {links.map(link => <Link key={link.href} href={link.href}>{link.name}</Link>)}

                <Link href="/login" className="bg-blue-500 px-3 py-1 rounded text-center">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;