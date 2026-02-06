"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certs = [
    { src: "/assets/certs/skoch.png", alt: "Skoch Group Award" },
    { src: "/assets/certs/cmmi.png", alt: "CMMI Level 3" },
    { src: "/assets/certs/iso9001.png", alt: "ISO 9001:2015" },
    { src: "/assets/certs/iso27001.png", alt: "ISO 27001" },
    { src: "/assets/certs/copyright.png", alt: "Copyright" },
    { src: "/assets/certs/certin.png", alt: "CERT-In Certified" },
    { src: "/assets/certs/hdfc.png", alt: "HDFC Bank Co-Partner" },
    { src: "/assets/certs/icici.png", alt: "ICICI Bank Co-Partner" },
];

export default function Certifications() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h3 className="text-xl font-bold font-[family-name:var(--font-lexend)] text-gray-400 mb-10 uppercase tracking-widest">
                    Recognitions, Certifications & Partners
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 transition-all duration-300 transform hover:scale-110"
                        >
                            <Image
                                src={cert.src}
                                alt={cert.alt}
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
