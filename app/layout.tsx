import type { Metadata } from "next";
import { Geist, Geist_Mono, Rozha_One, Changa_One, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Scene from "@/components/canvas/Scene";
import HeroShader from "@/components/canvas/HeroShader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rozhaOne = Rozha_One({
  weight: "400",
  variable: "--font-rozha",
  subsets: ["latin", "devanagari"],
});

const changaOne = Changa_One({
  weight: "400",
  variable: "--font-changa",
  subsets: ["latin"],
  style: "italic",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sthapatya Consultants",
  description: "Advanced Municipal Solutions & Property Tax Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${rozhaOne.variable} ${changaOne.variable} ${lexendDeca.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen`}>
        <ScrollProgress />
        {/* Fixed 3D Background */}
        <Scene>
          <HeroShader />
          {/* Other 3D components can go here or be ported via View */}
        </Scene>

        {/* Main Content */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
