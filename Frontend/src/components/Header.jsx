import { Link } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle"; // ✅ existing component use
import { useLanguage } from "../context/LanguageContext";
import { navbarText } from "../lang/navbarText";

export default function Header() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative overflow-hidden top-0 z-50">
      {/* 3D Animated Blobs Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-green-600 rounded-full blur-[140px] animate-float1 opacity-40"></div>
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-yellow-500 rounded-full blur-[180px] animate-float2 opacity-40"></div>
        <div className="absolute left-1/3 top-1/2 w-[500px] h-[500px] bg-green-400 rounded-full blur-[150px] animate-float3 opacity-40"></div>
      </div>

      {/* Glassmorphism Navbar */}
      <div className="relative bg-white/20 backdrop-blur-md border border-white/10 shadow-lg rounded-b-xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Leaf size={28} className="text-yellow-400" />
            <span className="text-2xl font-bold tracking-wide text-green-900">
              AgroTech AI
            </span>
          </Link>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-green-900">
            {["weather", "MarketRates", "news", "GovtScheme", "Contact"].map((item) => (
              <Link key={item} to={`/${item}`} className="relative hover:text-yellow-400 transition">
                {navbarText[item][language]}
              </Link>
            ))}


            {/* 🌐 Language Toggle (Desktop) */}
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white/20 backdrop-blur-md border-t border-white/10 px-6 pb-6 space-y-4 font-bold text-green-900">
            {["weather", "MarketRates", "News", "GovtScheme", "Contact"].map((item) => (
              <Link key={item} to={`/${item}`} className="block hover:text-yellow-400 transition">
                {navbarText[item][language]}
              </Link>
            ))}
            {/* 🌐 Language Toggle (Mobile) */}
            <div className="pt-4">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
