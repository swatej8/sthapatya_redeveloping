"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "100+", label: "Urban Local Bodies", sub: "Empowering Growth" },
    { value: "50L+", label: "Properties Surveyed", sub: "Accurate Assessment" },
    { value: "5000Cr", label: "Tax Revenue Generated", sub: "Financial Impact" },
    { value: "25+", label: "Years Experience", sub: "Industry Leadership" },
];

export default function Impact() {
    return (
        <section className="py-24 px-6 bg-[var(--color-brand-red)] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/grid.svg')] bg-center" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Text */}
                <div className="md:w-1/3 space-y-6">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-white/80">
                        Transforming Urban India
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-lexend)] leading-tight">
                        Empowering 100+ Municipal Bodies with cutting-edge GIS technology
                    </h3>
                </div>

                {/* Grid */}
                <div className="md:w-2/3 grid grid-cols-2 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-2 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                            <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-changa)]">
                                {stat.value}
                            </h4>
                            <p className="text-lg md:text-xl font-bold font-[family-name:var(--font-lexend)]">{stat.label}</p>
                            <p className="text-white/70 text-sm">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
