"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import DashboardDemo from "@/components/DashboardDemo";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Capabilities />
        <DashboardDemo />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
