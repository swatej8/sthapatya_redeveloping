"use client";

import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const offices = [
    {
        city: "Amravati",
        address: "4, Swapnashri Colony, Siddhivinayak Nagar, Ashiyad Square, Shegaon Road, Amravati, Maharashtra 444604",
        phone: "+91 8069780000"
    },
    {
        city: "Pune",
        address: "8th floor, Velocity, MONT VERT, Baner - Pashan Link Rd, Pashan, Pune, Maharashtra 411021",
        phone: "+91 9091039103"
    },
    {
        city: "Thane",
        address: "1101, Lodha Supremus, Lodha Business District 2, Off Kolshet Road, Thane-West, Maharashtra 400607",
        phone: "+91 7028791416"
    },
    {
        city: "Panvel",
        address: "Saisakshi Apartment, Plot No. 96, Near Saraswat Bank, Panvel, Maharashtra",
        phone: "+91 7774091416"
    }
];

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-20 px-6 bg-white text-black">
                <section className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase mb-4">
                        Contact Us
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Get in Touch, <br /> Let's Build Together
                    </h2>
                </section>

                <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 mb-24">
                    {/* Contact Info & Offices */}
                    <div className="space-y-12">
                        {/* Main Contacts */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-red-50 rounded-2xl">
                                <Phone className="text-[var(--color-brand-red)] mb-4" />
                                <h3 className="font-bold mb-2">Call Us</h3>
                                <p className="text-lg font-semibold">080 6978 0000</p>
                                <p className="text-sm text-gray-500">Mon-Sat, 9 AM - 6 PM</p>
                            </div>
                            <div className="p-6 bg-red-50 rounded-2xl">
                                <Mail className="text-[var(--color-brand-red)] mb-4" />
                                <h3 className="font-bold mb-2">Email Us</h3>
                                <p className="text-lg font-semibold">scipl@sthapatya.in</p>
                                <p className="text-sm text-gray-500">We'll respond within 24h</p>
                            </div>
                        </div>

                        {/* Offices List */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
                            <div className="space-y-6">
                                {offices.map((office, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:border-red-100 transition-colors">
                                        <MapPin className="text-[var(--color-brand-red)] shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-lg">{office.city}</h4>
                                            <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                                            <p className="font-mono text-sm font-semibold">{office.phone}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-200/50 h-fit">
                        <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-red)] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-red)] transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-red)] transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-red)] transition-all"></textarea>
                            </div>
                            <button className="w-full py-4 rounded-lg bg-[var(--color-brand-red)] text-white font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg shadow-red-500/20">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
