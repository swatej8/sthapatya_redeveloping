"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flag, Trophy, Target, TrendingUp, Award, Rocket, CheckCircle2 } from "lucide-react";

const timeline = [
    {
        year: "2001",
        title: "Foundation",
        desc: "Vision to transform urban governance",
        badge: "Commitment",
        icon: Flag
    },
    {
        year: "2010",
        title: "Achievement",
        desc: "Completed 50+ Projects",
        badge: "50+ Projects",
        icon: CheckCircle2
    },
    {
        year: "2016",
        title: "Major Expansion",
        desc: "1st UAV DGCA approved Drone Flying 5CM Data in Maharashtra's ULBs",
        badge: "1st UAV DGCA",
        icon: Rocket
    },
    {
        year: "2017",
        title: "Growth",
        desc: "MMR Region ULBs undertaken and Completed 100+ ULBs.",
        badge: "100+ ULBs",
        icon: TrendingUp
    },
    {
        year: "2021",
        title: "Recognition",
        desc: "SCOCH Award by central government & received",
        badge: "75+ Projects",
        icon: Award
    },
    {
        year: "2023",
        title: "Recognition",
        desc: "1st IGR Integration in Maharashtra ULB",
        badge: "Innovation",
        icon: Target
    },
    {
        year: "2024",
        title: "Growth",
        desc: "THANE | PCMC | PANVEL , 9L Properties completed with 150+ projects",
        badge: "9L Properties",
        icon: TrendingUp
    },
    {
        year: "2025",
        title: "Growth",
        desc: "4000Cr+ Revenue generated | Completed 50L+ properties and 150+ ULBs",
        badge: "4500Cr+ Revenue",
        icon: Trophy
    }
];

const values = [
    { title: "Excellence in Service", desc: "Delivering quality solutions that exceed expectations" },
    { title: "Trust & Reliability", desc: "Building lasting partnerships through integrity" },
    { title: "Client-Centric Approach", desc: "Your success is our priority, always" },
    { title: "Innovation First", desc: "Leading with cutting-edge technology solutions" },
];

const goals = [
    "AI-powered property assessment and valuation",
    "Blockchain integration for transparent revenue tracking",
    "IoT sensors for smart infrastructure monitoring",
    "Advanced predictive analytics dashboard",
    "Drone-based aerial surveying technology",
    "Mobile-first citizen interactive portal",
    "Real-time compliance and audit automation",
    "AI-Based Chatbots for faster customer service"
];

export default function Journey() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
                    <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase">
                        Milestones That Define Us
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-lexend)]">
                        From a visionary start to Maharashtra's leading partner
                    </h3>
                    <p className="text-gray-500">
                        Our journey of innovation, growth, and unwavering commitment
                    </p>
                </div>

                {/* Timeline */}
                <div ref={containerRef} className="relative mb-32">
                    {/* Center Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -ml-[1px]">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-[var(--color-brand-red)] origin-top"
                        />
                    </div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                                    <div className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 md:text-right ${index % 2 !== 0 ? "md:text-left" : ""}`}>
                                        <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-[var(--color-brand-red)] text-xs font-bold mb-2">
                                            {item.badge}
                                        </span>
                                        <h4 className="text-3xl font-bold font-[family-name:var(--font-changa)] mb-1">{item.year}</h4>
                                        <h5 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h5>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Node */}
                                <div className="absolute left-[20px] md:left-1/2 -ml-[20px] w-10 h-10 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center z-10 shadow-sm text-[var(--color-brand-red)]">
                                    <item.icon size={16} />
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-xl font-bold text-gray-400">Journey Continues...</p>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold font-[family-name:var(--font-lexend)] mb-4">Our Commitment</h3>
                        <p className="text-gray-500">Values that drive our excellence</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-white rounded-lg mb-6 flex items-center justify-center text-black group-hover:bg-[var(--color-brand-red)] group-hover:text-white transition-colors">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h4 className="text-lg font-bold mb-3">{val.title}</h4>
                                <p className="text-gray-500 group-hover:text-gray-400 text-sm">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Future Goals */}
                <div className="bg-black text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-[var(--color-brand-red)] blur-[150px] opacity-20" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-lexend)]">Future Goals 2025+</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Continuing our mission to transform urban governance across India with AI, Blockchain, and Next-Gen Tech.
                            </p>
                            <div className="h-1 w-20 bg-[var(--color-brand-red)] rounded-full" />
                        </div>

                        <ul className="grid gap-4">
                            {goals.map((goal, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                                >
                                    <Target size={18} className="text-[var(--color-brand-red)] shrink-0" />
                                    {goal}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
