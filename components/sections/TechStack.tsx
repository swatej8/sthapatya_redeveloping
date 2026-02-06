"use client";

import { motion } from "framer-motion";
import { Map, Layers, Smartphone, MessageSquareText } from "lucide-react";

const stack = [
    { icon: Map, title: "GIS Mapping", desc: "Advanced spatial data" },
    { icon: Layers, title: "Integrated Softwares", desc: "Comprehensive solutions" },
    { icon: Smartphone, title: "Mobile Apps", desc: "Citizen engagement" },
    { icon: MessageSquareText, title: "Real-time AI-Chatbots", desc: "Intelligent assistance" },
];

export default function TechStack() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase mb-4">
                        Our Technology Stack
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-lexend)]">
                        Cutting-edge Solutions
                    </h3>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {stack.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center space-y-4 group p-6 rounded-2xl hover:bg-gray-50 transition-colors"
                        >
                            <div className="w-16 h-16 mx-auto bg-black text-white rounded-full flex items-center justify-center group-hover:bg-[var(--color-brand-red)] group-hover:scale-110 transition-all duration-300 shadow-lg">
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold">{item.title}</h4>
                            <p className="text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
