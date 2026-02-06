"use client";

import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import { Map, Droplets, Globe, Briefcase, Database, BarChart, FileDigit, Scan } from "lucide-react";

// Lucide icon mapping for services
const IconMap = {
    Map: Map,
    Droplets: Droplets,
    Globe: Globe,
    Briefcase: Briefcase,
    Database: Database,
    BarChart: BarChart,
    Scan: Scan,
    FileDigit: FileDigit,
};

const services = [
    {
        icon: Map,
        title: "Property Tax Survey",
        description: "Comprehensive GIS-based property surveys with accurate data collection and digitization."
    },
    {
        icon: Droplets,
        title: "Municipal Water Bill Management",
        description: "Efficient water tax assessment and collection systems for urban local bodies."
    },
    {
        icon: Globe,
        title: "GIS Mapping",
        description: "High-precision geographic information systems for municipal planning and analysis."
    },
    {
        icon: Briefcase,
        title: "Trade License",
        description: "Streamlined trade license management and approval workflows for businesses."
    },
    {
        icon: Database,
        title: "Asset Management",
        description: "Comprehensive municipal property and asset tracking systems."
    },
    {
        icon: BarChart,
        title: "Data Analysis",
        description: "Predictive models for revenue, demand, and service delivery outcomes."
    },
    {
        icon: Scan,
        title: "Scanning & Digitization",
        description: "Large-scale document scanning and digitization services for municipal archives."
    },
    {
        icon: FileDigit,
        title: "ELU-PLU Mapping",
        description: "Existing Land Use and Proposed Land Use mapping for comprehensive urban planning."
    }
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-20 px-6 bg-white text-black">
                <section className="max-w-7xl mx-auto text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase mb-4"
                    >
                        Our Expertise
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold leading-tight mb-8"
                    >
                        Transforming Cities <br /> Empowering People
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions for modern urban development and municipal excellence across Maharashtra.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-[var(--color-brand-red)] group-hover:scale-110 transition-transform">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-brand-red)] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </section>

                <section className="max-w-5xl mx-auto mt-24 text-center">
                    <h3 className="text-2xl font-bold mb-8">Why Choose Our Services?</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { title: "Trusted Expertise", desc: "Decades of experience" },
                            { title: "Proven Excellence", desc: "Consistent quality" },
                            { title: "Smart Governance", desc: "Innovative tools" },
                            { title: "Municipal Innovation", desc: "Modern solutions" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-gray-50 rounded-xl">
                                <h4 className="font-bold text-[var(--color-brand-red)] mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
