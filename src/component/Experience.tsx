"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faCheck,
  faArrowRight,
  faAngleDown,
  faAngleUp,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { EXPERIENCES } from "@/constant/experience";

export default function Experience() {
  const [selectedIdx, setSelectedIdx] = useState<number>(3); // Defaults to the latest (index 3)
  const [lineHeight, setLineHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);

  // Scroll effect for running line
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineTrackRef.current) return;
      const rect = timelineTrackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height;
      // Start line animation when the top of the track crosses 75% of screen height
      const startPos = windowHeight * 0.75;
      
      const relativeTop = rect.top;
      const scrolled = startPos - relativeTop;
      
      let progress = scrolled / totalHeight; // basic ratio
      if (rect.top < startPos) {
        progress = (startPos - rect.top) / (rect.height);
      } else {
        progress = 0;
      }
      
      progress = Math.max(0, Math.min(1, progress));
      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to render text with bold highlights from **word** markup
  const renderTaskText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-[#e05263] font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section
      id="kinh-nghiem"
      ref={containerRef}
      className="py-32 px-6 md:px-12 lg:px-16 bg-white/40 border-t border-rose-100/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-rose-100/60 text-rose-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Hành trình nghề nghiệp
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-800 leading-tight">
            Kinh nghiệm làm việc
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mt-4 font-medium">
            Quá trình phát triển năng lực và cống hiến tại các tổ chức từ năm 2021 đến nay.
          </p>
        </div>

        <Grid container spacing={6} className="items-start">
          
          {/* Column 1: Interactive Timeline List */}
          <Grid size={{ xs: 12, lg: 7 }} className="relative">
            <div className="relative pl-8 md:pl-12 py-2" ref={timelineTrackRef}>
              
              {/* Vertical Timeline Track Line */}
              <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-[3px] bg-neutral-200/60 rounded-full overflow-hidden">
                {/* Running Line Progress Fill */}
                <div
                  className="w-full bg-gradient-to-b from-pink-300 via-rose-400 to-rose-500 transition-all duration-300 shadow-[0_0_8px_rgba(244,63,94,0.4)]"
                  style={{ height: `${lineHeight}%` }}
                />
              </div>

              {/* Chronological List of Jobs */}
              <div className="flex flex-col gap-10">
                {EXPERIENCES.map((job, idx) => {
                  const isSelected = selectedIdx === idx;
                  return (
                    <div key={idx} className="relative group text-left">
                      {/* Timeline Node Icon (Bullet point) */}
                      <button
                        onClick={() => setSelectedIdx(idx)}
                        className={`absolute -left-[30px] md:-left-[38px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 cursor-pointer ${
                          isSelected
                            ? "bg-rose-500 border-white text-white shadow-lg scale-125 shadow-rose-300"
                            : "bg-white border-neutral-300 text-neutral-400 group-hover:border-rose-400 group-hover:scale-110"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className="w-2.5 h-2.5"
                        />
                      </button>

                      {/* Job Header Card */}
                      <div
                        onClick={() => setSelectedIdx(idx)}
                        className={`p-6 md:p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer select-none ${
                          isSelected
                            ? "bg-white border-rose-100 shadow-[0_15px_40px_rgba(251,198,202,0.18)] scale-[1.01]"
                            : "bg-white/40 border-neutral-100/70 hover:bg-white/70 hover:border-rose-100/50 hover:shadow-md"
                        }`}
                      >
                        <div className="flex gap-4 items-start">
                          {/* Logo / Monogram */}
                          {job.logo ? (
                            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-neutral-100 bg-white flex items-center justify-center mt-1">
                              <Image
                                src={job.logo}
                                alt={job.company}
                                fill
                                className="object-contain p-1.5"
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-100 to-rose-200 text-rose-600 flex items-center justify-center font-serif text-lg font-black shrink-0 shadow-sm border border-rose-100/50 mt-1">
                              {job.company.charAt(0)}
                            </div>
                          )}

                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <div>
                                <span className="text-[11px] font-bold text-rose-500 uppercase tracking-widest flex items-center gap-1.5">
                                  <FontAwesomeIcon icon={faCalendar} className="w-3 h-3 text-rose-400" />
                                  {job.period}
                                </span>
                                <h4 className={`font-serif text-xl font-bold mt-1.5 transition-colors duration-300 ${
                                  isSelected ? "text-[#e05263]" : "text-neutral-800"
                                }`}>
                                  {job.title}
                                </h4>
                                <p className="text-sm font-semibold text-neutral-500 mt-1 flex items-center gap-1.5">
                                  <FontAwesomeIcon icon={faBuilding} className="w-3 h-3 text-neutral-400" />
                                  {job.company}
                                </p>
                              </div>
                              <div className="block lg:hidden">
                                <FontAwesomeIcon
                                  icon={isSelected ? faAngleUp : faAngleDown}
                                  className={`text-neutral-400 transition-transform duration-300 ${
                                    isSelected ? "text-rose-500" : ""
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Accordion content for Mobile & Tablet viewports */}
                        <div
                          className={`block lg:hidden transition-all duration-500 overflow-hidden ${
                            isSelected
                              ? "max-h-[600px] opacity-100 mt-6 pt-6 border-t border-rose-100/40"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">
                            Công việc đã làm
                          </h5>
                          <ul className="flex flex-col gap-3">
                            {job.tasks.map((task, tIdx) => (
                              <li key={tIdx} className="flex gap-2.5 text-sm text-neutral-600 leading-relaxed">
                                <span className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mt-0.5 shrink-0">
                                  <FontAwesomeIcon icon={faCheck} className="w-2 h-2" />
                                </span>
                                <span>{renderTaskText(task)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </Grid>

          {/* Column 2: Sticky Detail View Card (Desktop Only) */}
          <Grid size={{ xs: 12, lg: 5 }} className="hidden lg:block sticky top-32">
            <div className="bg-white border border-rose-100/80 rounded-[3rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(251,198,202,0.12)] text-left min-h-[480px] flex flex-col justify-between transition-all duration-500">
              
              {/* Header details */}
              <div>
                <div className="flex gap-4 items-center mb-6">
                  {EXPERIENCES[selectedIdx].logo ? (
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-neutral-100 flex items-center justify-center bg-white">
                      <Image
                        src={EXPERIENCES[selectedIdx].logo}
                        alt={EXPERIENCES[selectedIdx].company}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-100 to-rose-200 text-rose-600 flex items-center justify-center font-serif text-xl font-black shrink-0 shadow-sm border border-rose-100/50">
                      {EXPERIENCES[selectedIdx].company.charAt(0)}
                    </div>
                  )}
                  <div>
                    <span className="text-[11px] font-bold bg-rose-50 text-rose-600 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-inner">
                      <FontAwesomeIcon icon={faCalendar} className="w-3 h-3 text-rose-400" />
                      {EXPERIENCES[selectedIdx].period}
                    </span>
                    <p className="text-base font-bold text-rose-500 mt-1.5 flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faBuilding} className="w-3.5 h-3.5 text-rose-400" />
                      {EXPERIENCES[selectedIdx].company}
                    </p>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-black text-neutral-800 leading-tight">
                  {EXPERIENCES[selectedIdx].title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-100 my-6" />

                {/* Task bullets */}
                <div className="flex flex-col gap-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    Nhiệm vụ chính & Thành quả
                  </h5>
                  <ul className="flex flex-col gap-4">
                    {EXPERIENCES[selectedIdx].tasks.map((task, tIdx) => (
                      <li
                        key={tIdx}
                        className="flex gap-3 text-sm text-neutral-600 leading-relaxed animate-fade-in-up opacity-0"
                        style={{
                          animationDelay: `${tIdx * 100}ms`,
                          animationFillMode: "forwards"
                        }}
                      >
                        <span className="w-5.5 h-5.5 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mt-0.5 shrink-0 shadow-sm border border-rose-100/50">
                          <FontAwesomeIcon icon={faArrowRight} className="w-2.5 h-2.5" />
                        </span>
                        <span>{renderTaskText(task)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Graphic background signature detail */}
              <div className="flex justify-end mt-8 opacity-40">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="w-12 h-12 text-rose-200"
                />
              </div>

            </div>
          </Grid>

        </Grid>
      </div>
    </section>
  );
}
