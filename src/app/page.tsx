"use client";

import React from "react";
import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Experience from "@/component/Experience";
import Projects from "@/component/Projects";
import Contact from "@/component/Contact";
import ScrollReveal from "@/component/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ffd3d8] via-[#fffbfb] to-[#fcfaf7]">
      {/* Navbar Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero />

        {/* Giới thiệu Section */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* Kinh nghiệm Section */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        {/* Sản phẩm Section */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        {/* Liên hệ Section */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  );
}
