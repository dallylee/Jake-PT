"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Programmes", href: "#programmes" },
    { label: "Results", href: "#results" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Schedule", href: "#schedule" },
    { label: "FAQ", href: "#faq" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                "backdrop-blur-xl border-b border-white/10",
                isScrolled ? "bg-black/70 shadow-[0_10px_60px_-30px_rgba(0,0,0,0.8)] py-3" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg md:text-xl font-black tracking-tight text-white uppercase flex items-center gap-3"
                >
                    <span className="h-9 w-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/40">
                        JT
                    </span>
                    Jake Turner PT
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button asChild size="sm" className="shadow-lg shadow-orange-500/30">
                        <Link href="#apply">Apply for coaching</Link>
                    </Button>
                </nav>

                <button
                    className="md:hidden p-2 text-white rounded-lg border border-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b0c14]/95 border-b border-white/10 shadow-2xl p-4 flex flex-col gap-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-base font-semibold text-white/80 py-2 rounded-lg hover:bg-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button asChild className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Link href="#apply">Apply for coaching</Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
