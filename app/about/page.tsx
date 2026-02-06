"use client";

import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-20 px-6 bg-white text-black">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-6"
                    >
                        <h1 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase">
                            About Us
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            Empowering ULBs for <br />
                            Property Tax Revenue Generation
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Leading the transformation of municipal governance with innovative technology,
                            trusted expertise, and unwavering commitment to excellence.
                        </p>
                    </motion.div>
                </section>

                {/* Our Story */}
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-black border-l-4 border-[var(--color-brand-red)] pl-6">
                            Our Story
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            For over two and a half decades, Sthapatya Consultants Pvt. Ltd. has been a trusted name in transforming municipal governance through innovation, precision, and technology. With a strong foundation in property tax survey, GIS-based asset mapping, e-governance systems, and smart municipal solutions, we have successfully partnered with over 150 Urban Local Bodies (ULBs) across Maharashtra and India.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our journey reflects a legacy of excellence from manual surveys to AI-driven smart governance maintaining our core values of integrity, trust, and performance. As we step into the future, we continue to innovate through AI, cloud infrastructure, blockchain-enabled verification, and citizen-centric mobile solutions.
                        </p>
                        <blockquote className="italic font-medium text-[var(--color-brand-red)]">
                            "Transforming urban governance through innovation, dedication, and excellence"
                        </blockquote>
                    </div>
                    <div className="h-80 bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center">
                        {/* Placeholder for an image - using text/icon for now */}
                        <div className="text-center text-gray-400">
                            <Users size={64} className="mx-auto mb-4 opacity-50" />
                            <p>Team / Office Image Space</p>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="max-w-6xl mx-auto mb-24">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold">Core Values</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <Target className="w-10 h-10 text-[var(--color-brand-red)] mb-4" />
                            <h4 className="font-bold text-lg mb-2">Mission</h4>
                            <p className="text-sm text-gray-600">Revolutionize urban governance through technology</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <Award className="w-10 h-10 text-[var(--color-brand-red)] mb-4" />
                            <h4 className="font-bold text-lg mb-2">Excellence</h4>
                            <p className="text-sm text-gray-600">Highest quality services across all projects</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <Users className="w-10 h-10 text-[var(--color-brand-red)] mb-4" />
                            <h4 className="font-bold text-lg mb-2">Collaboration</h4>
                            <p className="text-sm text-gray-600">Partner with ULBs to solve unique challenges</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <Lightbulb className="w-10 h-10 text-[var(--color-brand-red)] mb-4" />
                            <h4 className="font-bold text-lg mb-2">Innovation</h4>
                            <p className="text-sm text-gray-600">Cutting-edge technology solutions</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="max-w-4xl mx-auto bg-[var(--color-brand-red)] text-white p-12 rounded-3xl text-center">
                    <h3 className="text-3xl font-bold mb-8">Why Choose Us</h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-left">
                        {[
                            "25+ years of proven expertise",
                            "100+ successful ULB implementations",
                            "50+ lakh properties digitized",
                            "Advanced GIS mapping technology",
                            "Seamless government portal integration",
                            "Dedicated support & innovation"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 shrink-0 text-white" />
                                <span className="font-medium text-white/90">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
