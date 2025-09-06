import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white p-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-2">StockTicker</h3>
          <p>Track stocks, market trends, and research reports.</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <Link href="#">About</Link><br />
          <Link href="#">Careers</Link><br />
          <Link href="#">Contact</Link>
        </div>

        <div>
          <h3 className="font-bold mb-2">Resources</h3>
          <Link href="#">Blog</Link><br />
          <Link href="#">Help Center</Link><br />
          <Link href="#">Tools</Link>
        </div>

        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <Link href="#">Privacy Policy</Link><br />
          <Link href="#">Terms of Service</Link><br />
          <Link href="#">Cookies</Link>
        </div>
      </div>

      <div className="text-center text-sm mt-6">&copy; 2025 StockTicker. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
