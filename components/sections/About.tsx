"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);
    const textRef = useRef(null);
    const listRef = useRef(null);

    useGSAP(
        () => {
            // Heading Animation
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // List Items Stagger
            const items = (listRef.current as HTMLElement | null)?.querySelectorAll("li");
            if (items) {
                gsap.from(items, {
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 85%",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                });
            }
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            id="about"
            className="relative min-h-screen flex items-center justify-center py-20 px-6"
        >
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Heading & Intro */}
                <div ref={textRef} className="space-y-6 group">
                    <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase">
                        Who We Are
                    </h2>

                    <h3 className="text-4xl md:text-5xl font-bold leading-tight text-black transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-black hover:via-[var(--color-brand-blue)] hover:to-black hover:bg-[length:200%_auto] hover:animate-shine cursor-default">
                        Leading Municipal <br />
                        Property Tax Management
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed hover:text-black transition-colors duration-300">
                        Sthapatya Consultants (I) Private Limited is a pioneer in transforming
                        urban governance. With over 25 years of expertise, we help Urban
                        Local Bodies (ULBs) unlock hidden revenue through accurate assessment
                        and advanced data analysis.
                    </p>
                </div>

                {/* Right: Feature List */}
                <div className="p-8 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100">
                    <ul ref={listRef} className="space-y-4">
                        {[
                            "GIS-based property surveys",
                            "Drone mapping visualization",
                            "Data automation software",
                            "Tax equity & transparency",
                            "Citizen inclusion systems",
                            "Revenue collection growth",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-3 text-gray-700 font-medium p-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:pl-4 group/item cursor-pointer"
                            >
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-red)] shrink-0 group-hover/item:scale-110 transition-transform" />
                                <span className="bg-gradient-to-r from-gray-700 to-gray-700 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover/item:bg-[length:100%_2px] transition-all duration-500 from-blue-400 to-blue-600">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
