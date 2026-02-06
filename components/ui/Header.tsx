"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Journey", href: "/journey" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/80 border-b border-black/5 shadow-sm transition-all duration-300">
            <Link href="/" className="flex items-center gap-3 z-50">
                <div className="relative w-12 h-12 md:w-14 md:h-14">
                    <Image
                        src="/logo.png"
                        alt="Sthapatya Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <span className="text-2xl md:text-3xl font-bold tracking-wide text-black font-[family-name:var(--font-rozha)] drop-shadow-sm">
                    स्थापत्य
                </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`text-sm font-medium transition-colors ${pathname === item.href
                            ? "text-[var(--color-brand-red)] font-bold"
                            : "text-gray-600 hover:text-[var(--color-brand-red)]"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    className="px-5 py-2 text-sm font-medium text-white bg-[var(--color-brand-red)] rounded-full hover:bg-black transition-colors shadow-md"
                >
                    Get in Touch
                </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden z-50 text-black"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-white/95 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-bold text-black hover:text-[var(--color-brand-red)]"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
