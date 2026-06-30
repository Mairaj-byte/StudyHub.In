import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import ContactPage from "../pages/ContactPage";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        // Add your search routing or filter logic here
    };

    return (
        <>
            {/* Injecting CSS Animation for the Left-to-Right Moving Marquee */}
            <style>{`
                @keyframes marqueeRight {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-marquee-right {
                    animation: marqueeRight 20s linear infinite;
                }
            `}</style>

            {/* Outer Floating Shell */}
            <div className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
                <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto transition-all duration-300">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* Adjusted height from h-16/h-20 to h-20/h-24 to comfortably adapt to the larger logo */}
                        <div className="flex justify-between h-20 sm:h-24 items-center">

                            {/* Brand Logo Wrapper */}
                            <div className="flex items-center group cursor-pointer">
                                <img
                                    src="https://edu.novanectar.co.in/assets/nav-logo-BrPcRVjp.png"
                                    alt="NovaNectar"
                                    className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Desktop Dynamic Links */}
                            <div className="hidden md:flex items-center gap-10 font-semibold text-slate-600 text-sm tracking-wide uppercase">
                                <a href="#features" className="relative py-2 transition-colors hover:text-slate-900 group">
                                    Curriculum
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                                </a>
                                <a href="#roadmap" className="relative py-2 transition-colors hover:text-slate-900 group">
                                    Learning Path
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                                </a>
                                <a href="#instructor" className="relative py-2 transition-colors hover:text-slate-900 group">
                                    Instructor
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                                </a>
                                <a href="#pricing" className="relative py-2 transition-colors hover:text-slate-900 group">
                                    Pricing
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                                </a>

                                {/* Added Contact Us Link */}
                               {/* Added Contact Us Link */}
<Link
  to="/connect"
  className="relative py-2 transition-colors hover:text-slate-900 group"
>
  Contact Us
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full" />
</Link>
                                
                            </div>

                            {/* Action Button Segment */}
                            <div className="hidden md:flex items-center">
                                <a
                                    href="#pricing"
                                    className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-indigo-600 hover:shadow-indigo-200 duration-300"
                                >
                                    <span>Enroll Now</span>
                                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>

                            {/* Modern Minimalistic Mobile Trigger */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-slate-800 p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-100 transition-colors duration-200"
                                    aria-label="Toggle menu"
                                >
                                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Moving Discount Ticker Bar (Left to Right) - Reduced gap using mt-1 */}
                    <div className="max-w-7xl mx-auto mt-1 overflow-hidden bg-indigo-600 text-white py-2 px-4 rounded-b-xl shadow-sm pointer-events-auto">
                        <div className="whitespace-nowrap animate-marquee-right text-xs sm:text-sm font-bold tracking-wider uppercase">
                            ⚡ Limited Time Offer: Get up to 50% off on all certification programs! Use code: NEON50 ⚡
                        </div>
                    </div>
                </nav>
            </div>

            {/* Immersive Mobile Overlay Menu */}
            <div
                className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-md transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className={`absolute top-36 left-4 right-4 bg-white border border-slate-100 rounded-3xl p-6 shadow-2xl transition-all duration-300 origin-top transform ${
                        isMenuOpen ? "translate-y-0 scale-100 opacity-100" : "-translate-y-4 scale-95 opacity-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col space-y-2">
                        {/* Search Bar Block for Mobile View */}
                        <div className="mb-4 px-1">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Search</p>
                            <form onSubmit={handleSearchSubmit} className="relative w-full">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search courses, tracks..."
                                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-200"
                                />
                                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            </form>
                        </div>

                        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-1">Navigation</p>
                        {[
                            { label: "Curriculum", href: "#features" },
                            { label: "Learning Path", href: "#roadmap" },
                            { label: "Instructor", href: "#instructor" },
                            { label: "Pricing", href: "#pricing" },
                            { label: "Contact Us", href: "/connect" }
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-between p-3 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:text-indigo-600 transition-all duration-200"
                            >
                                <span>{link.label}</span>
                                <ArrowUpRight size={16} className="opacity-0 transition-all -translate-x-2 group-hover:opacity-100 text-indigo-600" />
                            </a>
                        ))}

                        <div className="pt-4 mt-2 border-t border-slate-100">
                            <a
                                href="#pricing"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 rounded-xl font-bold transition-transform active:scale-[0.98] shadow-lg shadow-indigo-100"
                            >
                                <span>Enroll Now</span>
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;