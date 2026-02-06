"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const majorClients = [
    "Akola Municipal Corporation",
    "Panvel Municipal Corporation",
    "Pimpri Municipal Corporation",
    "Thane Municipal Corporation",
    "Amravati Municipal Corporation",
    "Jalgaon Municipal Corporation",
];

const councils = [
    "Malkapur", "Akluj", "Washim", "Parbhani", "Chakan", "Jalgaon",
    "Vadgaon", "Dhule", "Sinnar", "Chalisgaon", "Baramati", "Daryapur",
    "Amravati", "Jalna"
];

export default function Clients() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Success Stories */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase">
                        Our Success Stories
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-lexend)]">
                        Delivering Measurable Impact
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Across Maharashtra's largest municipal corporations
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {majorClients.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[var(--color-brand-red)] transition-all duration-300 group"
                        >
                            <div className="h-12 w-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {/* Placeholder Icon */}
                                <div className="w-6 h-6 border-2 border-[var(--color-brand-red)] rounded-full" />
                            </div>
                            <h4 className="text-lg font-bold group-hover:text-[var(--color-brand-red)] transition-colors">
                                {client}
                            </h4>
                        </motion.div>
                    ))}
                </div>

                <div className="md:col-span-3 mt-16">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold font-[family-name:var(--font-lexend)]">
                            Trusted by 100+ Urban Local Bodies
                        </h3>
                        <p className="text-gray-500 mt-2">Serving Municipal Corporations and Councils across Maharashtra</p>
                    </div>

                    {/* Marquee Section */}
                    {/* Marquee Section */}
                    <div className="relative w-full h-32 overflow-hidden bg-[var(--color-brand-gray)] border-y border-gray-200">

                        {/* The "Center Box" Visual Backdrop - Static */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-full bg-white/50 border-x border-[var(--color-brand-red)]/30 shadow-sm z-0 pointer-events-none" />

                        {/* Gradient Fades on Edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-brand-gray)] to-transparent z-30 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-brand-gray)] to-transparent z-30 pointer-events-none" />

                        {/* --- Layer 1: Base Black Text (Always Visible) --- */}
                        <div className="absolute inset-0 flex items-center z-10 pointer-events-none">
                            <div className="flex w-max">
                                {/* Track 1 */}
                                <div className="flex animate-marquee whitespace-nowrap">
                                    {Array(8).fill(councils).flat().map((council, i) => (
                                        <span key={`b1-${i}`} className="mx-8 text-xl font-bold uppercase tracking-wide text-gray-800">
                                            {council}
                                        </span>
                                    ))}
                                </div>
                                {/* Track 2 (Immediate Duplicate) */}
                                <div className="flex animate-marquee whitespace-nowrap">
                                    {Array(8).fill(councils).flat().map((council, i) => (
                                        <span key={`b2-${i}`} className="mx-8 text-xl font-bold uppercase tracking-wide text-gray-800">
                                            {council}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* --- Layer 2: Red Text Overlay (Strictly Masked to Center Box) --- */}
                        <div
                            className="absolute inset-0 flex items-center z-20 pointer-events-none"
                            style={{
                                maskImage: "linear-gradient(to right, transparent, transparent calc(50% - 128px), black calc(50% - 128px), black calc(50% + 128px), transparent calc(50% + 128px), transparent)",
                                WebkitMaskImage: "linear-gradient(to right, transparent, transparent calc(50% - 128px), black calc(50% - 128px), black calc(50% + 128px), transparent calc(50% + 128px), transparent)"
                            }}
                        >
                            <div className="flex w-max">
                                {/* Track 1 */}
                                <div className="flex animate-marquee whitespace-nowrap">
                                    {Array(8).fill(councils).flat().map((council, i) => (
                                        <span key={`r1-${i}`} className="mx-8 text-xl font-bold uppercase tracking-wide text-[var(--color-brand-red)]">
                                            {council}
                                        </span>
                                    ))}
                                </div>
                                {/* Track 2 (Immediate Duplicate) */}
                                <div className="flex animate-marquee whitespace-nowrap">
                                    {Array(8).fill(councils).flat().map((council, i) => (
                                        <span key={`r2-${i}`} className="mx-8 text-xl font-bold uppercase tracking-wide text-[var(--color-brand-red)]">
                                            {council}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
