"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Giới thiệu", href: "#gioi-thieu" },
    { label: "Kinh nghiệm", href: "#kinh-nghiem" },
    { label: "Sản phẩm", href: "#san-pham" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] py-4"
          : "bg-transparent border-b border-transparent py-6"
          }`}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between relative z-50">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="font-serif text-xl md:text-2xl font-bold tracking-tight text-neutral-800 dark:text-white transition-colors duration-300 hover:text-rose-500"
          >
            Trương Thị Lâm
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-neutral-600 hover:text-rose-500 dark:text-neutral-300 dark:hover:text-rose-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-rose-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#lien-he"
              className="group flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10 active:scale-[0.98]"
            >
              Let&apos;s Talk
              <div className="w-5 h-5 rounded-full bg-white/10 dark:bg-black/5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2.5 h-2.5" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden w-10 h-10 items-center justify-center rounded-full border border-neutral-200/50 dark:border-neutral-800 bg-white/50 backdrop-blur-md text-neutral-700 dark:text-neutral-300 hover:text-rose-500 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-zinc-950/98 backdrop-blur-2xl md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-4"
          }`}
      >
        <div className="flex flex-col h-full justify-center px-8 sm:px-16 gap-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-2xl tracking-tight text-neutral-600 dark:text-white hover:text-rose-500 transition-all duration-300 transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button for Mobile */}
            <a
              href="#lien-he"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10 active:scale-[0.98] self-start transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: `${navLinks.length * 75}ms` }}
            >
              Let&apos;s Talk
              <div className="w-5 h-5 rounded-full bg-white/10 dark:bg-black/5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2.5 h-2.5" />
              </div>
            </a>
          </div>

          <div className={`border-t border-neutral-100 dark:border-neutral-800 pt-8 flex flex-col gap-4 transition-all duration-500 delay-300 transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
            <p className="text-xs tracking-wider text-neutral-400 uppercase font-semibold">Connect with me</p>
            <a
              href="mailto:Ttuelam1310@gmail.com"
              className="text-lg font-semibold text-rose-500 hover:underline"
            >
              Ttuelam1310@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
