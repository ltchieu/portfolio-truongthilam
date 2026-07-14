"use client";

import React, { useState, useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1000,
  distance = "40px"
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Avoid running on server side
    if (typeof window === "undefined") return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(timer);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.02, // trigger when 2% of section enters viewport (more reliable on mobile)
        rootMargin: "0px 0px -20px 0px" // trigger slightly earlier but safer for mobile
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearTimeout(timer);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${distance})`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
