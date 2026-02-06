"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen px-6 text-center">
            <div className="max-w-4xl space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-black"
                >
                    Leading Municipal <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-red)] to-black">
                        Excellence
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium"
                >
                    Transforming urban governance through advanced GIS surveys,
                    property tax management, and digital innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#services"
                        className="group relative px-8 py-3 rounded-full bg-[var(--color-brand-red)] text-white font-semibold hover:bg-black transition-colors duration-300 overflow-hidden shadow-lg shadow-red-500/20"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Services <ArrowRight size={18} />
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 transition-colors text-black font-medium"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <span className="text-xs tracking-widest text-black/40 uppercase font-semibold">Scroll</span>
            </motion.div>
        </section>
    );
}
