"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Map,
    Droplets,
    MapPin,
    LineChart,
    Globe,
    Store,
    Building2,
    TrendingUp,
    CheckCircle2,
    ChevronRight,
    Check
} from "lucide-react";

// Placeholder images for now (using colored placeholders or standard services images if available)
const services = [
    {
        icon: Building2,
        title: "Municipal Property Tax Management",
        description: "Transforming property data into municipal revenue.",
        image: "https://placehold.co/800x450/e60000/fff?text=Property+Tax+Management",
        features: [
            "GIS-based door-to-door property surveys for accurate assessment",
            "Drone mapping for high-precision property visualization",
            "Use of advanced software tools for data analysis and automation",
            "25+ years of expertise in municipal tax systems",
            "Helping ULBs unlock hidden revenue and improve collections",
            "Promoting tax equity and transparency",
            "Enabling citizen inclusion in the formal taxation system"
        ]
    },
    {
        icon: Droplets,
        title: "Municipal Water Bill Management",
        description: "Every drop accounted. Every source optimized.",
        image: "https://placehold.co/800x450/2563eb/fff?text=Water+Bill+Management",
        features: [
            "Field surveys to digital billing for complete water management",
            "Track, monitor, and recover water usage efficiently",
            "Data-backed systems for better decision-making",
            "Ensure transparency in operations",
            "Enable leak detection and quick response",
            "Build citizen trust in water tax processes"
        ]
    },
    {
        icon: Map,
        title: "Municipal ELU/PLU City Mapping",
        description: "Land use mapping for urban planning and development with GIS integration",
        image: "https://placehold.co/800x450/059669/fff?text=City+Mapping",
        features: [
            "ELU & PLU projects at Shegaon, Parbhani",
            "GIS-based planning and mapping expertise",
            "Statutory compliance and accuracy ensured",
            "Data-driven zoning and land analysis",
            "Sustainable and future-ready development plans",
            "Collaborative approach with stakeholders"
        ]
    },
    {
        icon: LineChart,
        title: "Municipal Smart Valuation Analytics",
        description: "Transform municipal data into actionable insights for better decision-making",
        image: "https://placehold.co/800x450/7c3aed/fff?text=Smart+Analytics",
        features: [
            "Real-time Analytics Dashboard",
            "Predictive Modeling",
            "Custom Report Generation",
            "Performance Metrics",
            "Trend Analysis"
        ]
    },
    {
        icon: Globe,
        title: "Municipal GIS Mapping & Urban Intelligence Platforms",
        description: "Spatial intelligence for smarter cities.",
        image: "https://placehold.co/800x450/ea580c/fff?text=GIS+Mapping",
        features: [
            "Creation of base maps and ward boundaries",
            "Integration of utilities and property layers",
            "Drone and DGPS-based surveys",
            "AI-assisted segmentation and analytics",
            "Interactive urban dashboards for governance"
        ]
    },
    {
        icon: Store,
        title: "Municipal Trade License Management",
        description: "Empowering local businesses. Enabling municipal compliance.",
        image: "https://placehold.co/800x450/db2777/fff?text=Trade+License",
        features: [
            "QR-code based registrations and renewals",
            "Mobile app for traders and inspectors",
            "Geo-tagged field verification",
            "Automated workflow and notifications",
            "Revenue boosting with transparency and ease"
        ]
    },
    {
        icon: Building2,
        title: "Municipal Asset & Estate Management",
        description: "Mapping public wealth. Maximizing its value.",
        image: "https://placehold.co/800x450/0891b2/fff?text=Asset+Management",
        features: [
            "GIS-tagged inventory of civic assets",
            "Lease and rent management modules",
            "Legal and financial system integration",
            "Monitoring of markets, plots, and buildings",
            "Optimized monetization of public property"
        ]
    },
    {
        icon: TrendingUp,
        title: "Driving Smart Governance & Revenue Growth",
        description: "Empowering ULBs with technology-driven revenue enhancement.",
        image: "https://placehold.co/800x450/4f46e5/fff?text=Smart+Governance",
        features: [
            "Comprehensive revenue gap analysis",
            "Implementation of smart billing and collection systems",
            "Capacity building for municipal staff",
            "Citizen-centric payment portals",
            "Real-time revenue monitoring dashboards"
        ]
    }
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="min-h-screen py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-lexend)] text-[var(--color-brand-red)]">
                        Leading Municipal Excellence
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto font-medium text-lg">
                        Specializing in GIS-based property tax surveys and comprehensive IT solutions for municipalities across Maharashtra
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${activeIndex === index
                                        ? "bg-red-50 border-[var(--color-brand-red)] shadow-sm"
                                        : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-100"
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activeIndex === index
                                        ? "bg-[var(--color-brand-red)] text-white"
                                        : "bg-gray-100 text-gray-500 group-hover:text-[var(--color-brand-red)]"
                                    }`}>
                                    <service.icon className="w-5 h-5" />
                                </div>

                                <span className={`flex-1 font-semibold text-sm md:text-base ${activeIndex === index ? "text-black" : "text-gray-600"
                                    }`}>
                                    {service.title}
                                </span>

                                {activeIndex === index && (
                                    <Check className="w-5 h-5 text-[var(--color-brand-red)] shrink-0" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8 bg-white rounded-3xl p-1 lg:p-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {/* Image / Visual */}
                                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                    <Image
                                        src={services[activeIndex].image}
                                        alt={services[activeIndex].title}
                                        fill
                                        className="object-cover"
                                        unoptimized // Allow placeholder.co images
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                        <div className="text-white">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                                                    {(() => {
                                                        const Icon = services[activeIndex].icon;
                                                        return <Icon className="w-6 h-6 text-white" />;
                                                    })()}
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold">
                                                    {services[activeIndex].title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-6 px-2">
                                    <p className="text-xl font-medium text-[var(--color-brand-red)] italic">
                                        {services[activeIndex].description}
                                    </p>

                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4 flex items-center gap-2">
                                            <span className="w-8 h-[2px] bg-black"></span>
                                            Key Features
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                            {services[activeIndex].features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-red)] shrink-0 mt-0.5" />
                                                    <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
