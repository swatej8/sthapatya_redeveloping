"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 1000); // Show "Leading"
        const timer2 = setTimeout(() => setStep(2), 2000); // Show "Excellence"
        const timer3 = setTimeout(() => onComplete(), 3000); // Finish

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -2000 }} // Slide up like a curtain
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center text-white"
        >
            <div className="text-center space-y-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase text-[var(--color-brand-red)] font-[family-name:var(--font-rozha)]"
                >
                    Sthapatya Consultants
                </motion.p>

                <div className="overflow-hidden h-20 md:h-32 flex items-center justify-center">
                    {step === 0 && (
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            exit={{ y: -100 }}
                            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-changa)] italic"
                        >
                            Innovating
                        </motion.h1>
                    )}
                    {step === 1 && (
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            exit={{ y: -100 }}
                            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-changa)] italic"
                        >
                            Leading
                        </motion.h1>
                    )}
                    {step >= 2 && (
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            className="text-5xl md:text-7xl font-bold text-[var(--color-brand-red)] font-[family-name:var(--font-changa)] italic"
                        >
                            Transforming
                        </motion.h1>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
