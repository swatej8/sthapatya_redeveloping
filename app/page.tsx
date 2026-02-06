"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/ui/Header";
import HeroSlider from "@/components/sections/HeroSlider";
import Preloader from "@/components/ui/Preloader";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Impact from "@/components/sections/Impact";
import Certifications from "@/components/sections/Certifications";
import TechStack from "@/components/sections/TechStack";
import Footer from "@/components/ui/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <HeroSlider />
          <About />
          <Clients />
          <Impact />
          <Certifications />
          <TechStack />
          <Services />
          <Footer />
        </>
      )}
    </>
  );
}
