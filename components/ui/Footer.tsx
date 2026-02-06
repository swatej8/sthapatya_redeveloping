"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-lexend)] leading-tight">
                        Ready to <span className="text-[var(--color-brand-red)]">Transform?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-lg">
                        Join 100+ ULBs Transforming Urban India. Partner with Maharashtra's leading urban governance solutions provider.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[var(--color-brand-red)] hover:text-white transition-all"
                        >
                            Start Your Transformation
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 text-gray-400">
                    <div className="space-y-4">
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white">Services</Link></li>
                            <li><Link href="/journey" className="hover:text-white">Our Journey</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <p>Amravati | Pune | Thane</p>
                        <p>+91 8069780000</p>
                        <p>info@sthapatyaconsultants.com</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between text-gray-500 text-sm">
                <p>© 2026 Sthapatya Consultants & Softwares India Pvt. Ltd. All rights reserved.</p>
                <p>Innovation in Urban Governance</p>
            </div>
        </footer>
    );
}
