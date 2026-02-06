"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

const partners = [
    "/assets/partners/image-0.png", // Image 0
    "/assets/partners/image-1.png", // Image 1
    "/assets/partners/image-2.png", // Image 2
    "/assets/partners/image-3.png", // Image 3
    "/assets/partners/image-4.png", // Image 4
];

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen py-20 px-6 relative bg-white">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-red)]/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto space-y-20">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase mb-4">
                                Get In Touch
                            </h2>
                            <h3 className="text-4xl font-bold text-black">Let's Build the Future</h3>
                            <p className="text-gray-600 mt-4 leading-relaxed font-medium">
                                Have a project in mind? We'd love to hear from you. Reach out to our team for expert consultation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-red-50 text-[var(--color-brand-red)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">Headquarters</h4>
                                    <p className="text-gray-600 text-sm">Amravati | Pune | Thane | Panvel</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-red-50 text-[var(--color-brand-red)]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">Email Us</h4>
                                    <p className="text-gray-600 text-sm">scipl@sthapatya.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-red-50 text-[var(--color-brand-red)]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">Call Us</h4>
                                    <p className="text-gray-600 text-sm">080-6978-0000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-red)] focus:ring-1 focus:ring-red-200 transition-all text-black" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-red)] focus:ring-1 focus:ring-red-200 transition-all text-black" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-red)] focus:ring-1 focus:ring-red-200 transition-all text-black" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-red)] focus:ring-1 focus:ring-red-200 transition-all text-black"></textarea>
                            </div>
                            <button className="w-full py-4 rounded-lg bg-[var(--color-brand-red)] text-white font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Partners / Certifications */}
                <div className="border-t border-gray-100 pt-10">
                    <p className="text-center text-sm font-bold text-gray-400 mb-10 uppercase tracking-widest">Trusted By & Certified</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-opacity">
                        {partners.map((src, idx) => (
                            <div key={idx} className="relative h-20 w-36">
                                <img
                                    src={src}
                                    alt="Partner"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
