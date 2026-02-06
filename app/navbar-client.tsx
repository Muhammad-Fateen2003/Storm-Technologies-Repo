"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import NavLinks from "./nav-links";

type Item = {
    name: string;
    url: string;
    children?: { name: string; url: string }[];
};

export default function NavbarClient({ items }: { items: Item[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Auto-close menu on navigation
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Handle scroll lock and scroll event
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
                    ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
                    : "bg-white border-b border-slate-50"
                    }`}
            >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center h-20 md:h-24">
                        {/* Logo */}
                        <a href="/" className="flex items-center space-x-3 md:space-x-4 group relative z-50">
                            <div className="w-10 h-10 md:w-13 md:h-13 relative flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
                                <img
                                    src="/logo.png"
                                    alt="Storm Technologies Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="border-l border-slate-100 md:border-slate-50 pl-3 md:pl-4 py-1">
                                <div className="text-lg md:text-2xl font-bold text-[#1a365d] tracking-tight leading-none mb-0.5 md:mb-1">
                                    Storm Technologies
                                </div>
                                <div className="text-[8px] md:text-[10px] text-[#0d9488] font-bold uppercase tracking-[0.2em]">
                                    Medical Billing Excellence
                                </div>
                            </div>
                        </a>

                        {/* Desktop Nav - Middle */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <NavLinks items={items} variant="desktop" />
                        </div>

                        {/* Desktop Actions - Right */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 relative z-20">
                            <div className="h-8 w-px bg-slate-100 hidden lg:block" />

                            <a
                                href="tel:832-236-3930"
                                className="flex flex-col items-end group"
                            >
                                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 group-hover:text-[#1a365d] transition-colors">Call Support</span>
                                <span className="text-[#1a365d] font-bold text-base lg:text-lg group-hover:text-[#0d9488] transition-colors">832-236-3930</span>
                            </a>

                            <a
                                href="/contact#contact-form"
                                className="bg-[#1a365d] text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-xl font-bold shadow-lg shadow-blue-900/10 hover:bg-[#2c5282] transition-all duration-300 text-xs lg:text-sm"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Mobile/Tablet Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative z-50 p-2 text-[#1a365d] hover:bg-slate-50 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Expansion */}
                <div
                    className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-500 ease-in-out origin-top z-40 ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
                        }`}
                    style={{ height: 'calc(100vh - 80px)' }}
                >
                    <div className="h-full overflow-y-auto px-6 py-8 pb-32">
                        <div className="flex flex-col">
                            <NavLinks items={items} variant="mobile" />
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-50 space-y-6">
                            <div className="grid grid-cols-1 gap-4">
                                <a href="tel:832-236-3930" className="flex items-center space-x-4 p-3 rounded-xl bg-slate-50/50">
                                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#0d9488]">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Call Support</div>
                                        <div className="text-[#1a365d] font-bold text-base">832-236-3930</div>
                                    </div>
                                </a>

                                <a href="mailto:stormtech2008@gmail.com" className="flex items-center space-x-4 p-3 rounded-xl bg-slate-50/50">
                                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#0d9488]">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Email Us</div>
                                        <div className="text-[#1a365d] font-bold text-base">stormtech2008@gmail.com</div>
                                    </div>
                                </a>
                            </div>

                            <a
                                href="/contact#contact-form"
                                onClick={() => setIsOpen(false)}
                                className="block w-full bg-[#1a365d] text-white p-4 rounded-xl font-bold text-center shadow-lg shadow-blue-900/10 active:scale-[0.98] transition-all text-sm"
                            >
                                Request a Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
