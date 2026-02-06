"use client";

import Header from "@/components/ui/Header";
import Journey from "@/components/sections/Journey";

export default function JourneyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 bg-white text-black">
                <section className="px-6 pb-12 text-center bg-gray-50/50">
                    <h1 className="text-sm font-bold tracking-widest text-[var(--color-brand-red)] uppercase mb-4 pt-12">
                        Our History
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        A Legacy of Excellence
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From a vision to transform urban governance to becoming India's leading consulting firm for ULBs.
                    </p>
                </section>
                <Journey />
            </main>
        </>
    );
}
