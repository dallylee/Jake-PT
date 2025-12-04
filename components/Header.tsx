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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-charcoal">
                    Jake Turner PT
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-dark-grey hover:text-electric-blue transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button asChild size="sm">
                        <Link href="#apply">Apply for coaching</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-dark-grey"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-base font-medium text-dark-grey py-2 border-b border-gray-50 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button asChild className="w-full mt-2">
                        <Link href="#apply" onClick={() => setIsMobileMenuOpen(false)}>
                            Apply for coaching
                        </Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
