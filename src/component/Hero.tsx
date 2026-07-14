"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[95dvh] flex flex-col items-center justify-center pt-36 pb-24 px-4 md:px-8">
      {/* Background Ornaments (Subtle sparkles) */}
      <div className="absolute top-1/4 left-10 md:left-20 animate-pulse pointer-events-none opacity-40">
        <svg className="w-6 h-6 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-20 animate-pulse pointer-events-none opacity-30 delay-1000">
        <svg className="w-8 h-8 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </div>

      {/* Main container: Expanded maximum width to allow larger child components */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Vertical stack container for hero content */}
        <div className="flex flex-col items-center gap-8 md:gap-10 w-full text-center">
          
          {/* Eyebrow Label "/2026/" */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            <div className="flex justify-center -mb-2">
              <span className="font-serif italic text-rose-600/90 text-lg md:text-2xl tracking-wide select-none">
                /2026/
              </span>
            </div>
          </div>

          {/* PORTFOLIO Title Wordmark Image with Sparkle Star (Sized wider) */}
          <div className="relative animate-fade-in-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            <div className="relative inline-block max-w-[95vw] w-[700px] md:w-[950px] lg:w-[1100px] xl:w-[1250px] select-none pointer-events-none">
              <Image
                src="/port.png"
                alt="PORTFOLIO"
                width={1250}
                height={300}
                priority
                style={{ height: "auto" }}
                className="w-full object-contain drop-shadow-[0_6px_18px_rgba(251,198,202,0.18)]"
              />

              {/* Sparkle Star on top of "I" */}
              <div 
                className="absolute top-[8%] right-[19.8%] animate-spin-slow cursor-pointer pointer-events-auto"
                title="Sparkle!"
              >
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 text-rose-500 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] hover:scale-125 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Peeking Girl GIF in stylized container (Sized wider) */}
          <div className="w-full flex justify-center animate-fade-in-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[800px] lg:max-w-[950px] xl:max-w-[1050px] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.01] hover:-translate-y-1">
              
              {/* Outer Shell for High-End Double-Bezel look */}
              <div className="p-2.5 bg-white/40 dark:bg-zinc-900/40 rounded-[2.8rem] border border-white/60 dark:border-white/5 shadow-[0_20px_50px_rgba(251,198,202,0.22)] backdrop-blur-md">
                
                {/* Inner Core */}
                <div className="relative overflow-hidden rounded-[calc(2.8rem-0.625rem)] bg-gradient-to-tr from-rose-100 to-rose-200/50">
                  <Image
                    src="/ezgif.com-crop.gif"
                    alt="Truong Thi Tam Illustration"
                    width={1050}
                    height={520}
                    unoptimized // keeps GIF animation running
                    priority
                    style={{ height: "auto" }}
                    className="w-full object-cover select-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Tag "/WELCOME/" */}
          <div className="mt-4 animate-fade-in-up opacity-0" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>
            <div>
              <span className="font-serif italic text-rose-600/90 text-lg md:text-2xl tracking-[0.15em] select-none">
                /WELCOME/
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
