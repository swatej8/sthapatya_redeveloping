"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, PenTool } from "lucide-react";

const slides = [
    {
        id: 1,
        subtitle: "Leading Municipal Excellence",
        title: "Property Tax Reform",
        description: "Transforming municipal revenue with accurate door-to-door surveys and digital assessment.",
        cta: "Explore Services"
    },
    {
        id: 2,
        subtitle: "Advanced Technology",
        title: "GIS & Drone Mapping",
        description: "High-precision aerial insights and data collection for smarter urban planning.",
        cta: "View Projects"
    },
    {
        id: 3,
        subtitle: "Smart Governance",
        title: "Digital Integration",
        description: "Seamless software solutions connecting ULBs with citizens for transparency.",
        cta: "Contact Us"
    }
];

const letterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.3 }
    }
};

const letterAnimation: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", damping: 12 }
    }
};

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000); // Slightly longer for reading
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">

            {/* Visibility Overlay - Blurs the 3D background slightly for text readability */}
            <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[2px]" />

            {/* Permanent Marathi Quote Overlay - Top Right or Floating */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute top-24 right-6 md:right-12 z-10 text-right hidden md:block"
            >
                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-rozha)] text-[var(--color-brand-red)] leading-snug drop-shadow-sm bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                    "नगररचना आणि विकासाचा <br /> भक्कम पाया"
                </h3>
                <div className="h-1 w-24 bg-black ml-auto mt-2 rounded-full opacity-20" />
            </motion.div>

            {/* Slide Content */}
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 pl-4 md:pl-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                            className="space-y-6"
                        >
                            <motion.div variants={letterContainer} className="overflow-hidden">
                                <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase flex items-center gap-2 bg-white/60 w-fit px-2 py-1 rounded">
                                    <span className="w-8 h-[2px] bg-red-500 inline-block" />
                                    {slides[current].subtitle}
                                </h2>
                            </motion.div>

                            <motion.h1
                                variants={letterContainer}
                                className="text-6xl md:text-8xl font-[family-name:var(--font-changa)] italic tracking-wide text-black leading-[0.9] drop-shadow-lg"
                            >
                                {slides[current].title.split(" ").map((word, i) => (
                                    <span key={i} className="inline-block mr-4">
                                        {word.split("").map((char, j) => (
                                            <motion.span key={j} variants={letterAnimation} className="inline-block">
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-xl text-gray-800 font-bold max-w-lg border-l-4 border-[var(--color-brand-red)] pl-6 bg-white/30 backdrop-blur-md py-4 rounded-r-xl"
                            >
                                {slides[current].description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="flex gap-4 pt-4"
                            >
                                <a
                                    href="/services"
                                    className="group relative bg-black text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-[var(--color-brand-red)] shadow-2xl shadow-black/20 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {slides[current].cta} <PenTool size={16} />
                                    </span>
                                    <div className="absolute inset-0 bg-[var(--color-brand-red)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 left-6 right-6 flex items-center justify-between max-w-7xl mx-auto z-20">
                <div className="flex gap-4">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`h-2 rounded-full transition-all duration-500 ease-out ${current === idx
                                ? "w-16 bg-[var(--color-brand-red)]"
                                : "w-3 bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
                <div className="flex gap-4">
                    <button onClick={prevSlide} className="group p-4 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm hover:bg-black hover:text-white transition-colors duration-300">
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button onClick={nextSlide} className="group p-4 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm hover:bg-black hover:text-white transition-colors duration-300">
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
