"use client";

import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCalendar,
  faCheck,
  faCamera,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="gioi-thieu" className="py-32 px-6 md:px-12 lg:px-16 bg-[#fdfbf7] border-t border-rose-100/50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
        <svg className="w-20 h-20 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <Grid container spacing={6} className="items-stretch">

          {/* Column 1: Profile & Short Details */}
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <div className="bg-white/50 border border-rose-100/60 backdrop-blur-md rounded-[3rem] p-8 md:p-10 flex flex-col items-center text-center h-full shadow-[0_15px_40px_rgba(251,198,202,0.1)]">
              {/* Profile Image with Overlapping Bubble Background */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-64 md:h-72 lg:w-72 lg:h-80 mb-8 mt-2 mx-auto">
                {/* Overlapping bubble pattern */}
                <div className="absolute -top-5 -right-5 w-48 h-48 sm:w-56 sm:h-56 md:w-48 md:h-48 lg:w-56 lg:h-56 grid grid-cols-3 grid-rows-3 gap-2 opacity-90">
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300 relative flex items-center justify-center">
                    {/* Sparkle Star in top-left bubble */}
                    <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                    </svg>
                  </div>
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300"></div>
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300"></div>
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300"></div>
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300"></div>
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300"></div>
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300"></div>
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300"></div>
                  <div className="rounded-full bg-gradient-to-tr from-rose-200 to-pink-300"></div>
                </div>

                {/* Main Avatar Photo */}
                <div className="absolute bottom-0 left-0 w-56 h-64 sm:w-60 sm:h-72 md:w-56 md:h-64 lg:w-64 lg:h-72 rounded-[2rem] overflow-hidden border-4 border-white shadow-md bg-rose-50">
                  <Image
                    src="/avata.jpg"
                    alt="Trương Thị Lâm"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Identity */}
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#e05263] tracking-wide mt-2">
                TRƯƠNG THỊ LÂM
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-500 font-bold uppercase tracking-widest mt-2">
                Truyền thông đa phương tiện
              </p>

              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full my-8" />

              {/* Quick Info Grid */}
              <div className="w-full text-left flex flex-col gap-5 px-2 text-sm sm:text-base text-neutral-600">

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                    <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-neutral-400 font-bold uppercase tracking-wider">Trường học</p>
                    <p className="font-semibold text-neutral-700">Đại học Thăng Long</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                    <FontAwesomeIcon icon={faCalendar} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-neutral-400 font-bold uppercase tracking-wider">Niên khóa</p>
                    <p className="font-semibold text-neutral-700">2022 - Hiện tại</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          {/* Column 2: Hello! About Me & Education */}
          <Grid size={{ xs: 12, sm: 6, md: 7, lg: 4 }}>
            <div className="flex flex-col gap-10 h-full justify-between py-2">
              {/* Introduction Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-serif text-6xl sm:text-7xl font-black text-[#e05263] tracking-tighter">
                    HELLO!
                  </h2>
                  <div className="w-12 h-12 bg-gradient-to-t from-pink-300 to-rose-400 rounded-t-full rotate-90 self-end mb-1.5" />
                </div>

                {/* About Me Pill */}
                <div className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 rounded-full px-6 py-2 text-white font-serif tracking-widest text-[11px] sm:text-xs uppercase shadow-sm mb-6">
                  ABOUT ME
                </div>

                <p className="text-neutral-600 text-base leading-relaxed text-justify font-medium">
                  Xin chào, em là Trương Thị Lâm, em mong muốn được thực tập trong môi trường chuyên nghiệp để áp dụng những kiến thức đã học vào thực tế, đồng thời tích lũy kinh nghiệm và phát triển kỹ năng chuyên môn. Trong quá trình học tập, em đã có cơ hội rèn luyện các kỹ năng về chụp ảnh, quay video, và sử dụng các công cụ như Adobe Premiere, CapCut cùng một số phần mềm thiết kế cơ bản. Em luôn sẵn sàng học hỏi, chủ động tiếp thu những kiến thức mới và không ngừng hoàn thiện bản thân để phát triển trong lĩnh vực truyền thông.
                </p>
              </div>

              {/* Education Section */}
              <div className="mt-auto pt-8 border-t border-rose-100/40">
                {/* Education Pill */}
                <div className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 rounded-full px-6 py-2 text-white font-serif tracking-widest text-[11px] sm:text-xs uppercase shadow-sm mb-6">
                  EDUCATION
                </div>

                <div className="flex items-start gap-4 p-5 bg-white/40 border border-rose-100/30 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-rose-500 mt-1 shadow-sm shrink-0">
                    <FontAwesomeIcon icon={faBookOpen} className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-800 leading-tight">
                      Đại học Thăng Long
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-rose-500 mt-1.5">
                      Truyền thông đa phương tiện
                    </p>
                    <span className="inline-block text-[11px] sm:text-xs font-bold bg-neutral-100 text-neutral-500 px-3.5 py-1 rounded-full mt-3">
                      2022 - Hiện tại
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          {/* Column 3: Personal & Creative Skills */}
          <Grid size={{ xs: 12, sm: 6, md: 12, lg: 4 }}>
            <div className="flex flex-col gap-10 h-full justify-between py-2">
              {/* Personal Skills Section */}
              <div>
                {/* Skills Pill */}
                <div className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 rounded-full px-6 py-2 text-white font-serif tracking-widest text-[11px] sm:text-xs uppercase shadow-sm mb-6">
                  PERSONAL SKILL
                </div>

                <div className="flex flex-col gap-5 text-left">
                  {/* Tiếng Anh */}
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mt-0.5 shrink-0">
                      <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-neutral-800">Tiếng Anh</h5>
                      <p className="text-sm text-neutral-500 mt-0.5 font-medium">Tiếng Anh ở mức trung bình</p>
                    </div>
                  </div>

                  {/* Tin học */}
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mt-0.5 shrink-0">
                      <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-neutral-800">Kỹ năng tin học</h5>
                      <p className="text-sm text-neutral-500 mt-0.5 font-medium">Sử dụng Word, PowerPoint ở mức tốt; Excel ở mức cơ bản</p>
                    </div>
                  </div>

                  {/* Kỹ năng mềm */}
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mt-0.5 shrink-0">
                      <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-neutral-800">Kỹ năng mềm</h5>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 font-medium">Thái độ tốt, Quản lý thời gian tốt, Có tinh thần ham học hỏi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Fields & Software Section */}
              <div className="mt-auto pt-8 border-t border-rose-100/40">
                {/* Creative Fields Pill */}
                <div className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 rounded-full px-6 py-2 text-white font-serif tracking-widest text-[11px] sm:text-xs uppercase shadow-sm mb-6">
                  CREATIVE FIELD
                </div>

                <div className="flex flex-col gap-5 text-left">
                  {/* Photo & Video */}
                  <div className="flex gap-4 mb-2">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mt-0.5 shrink-0">
                      <FontAwesomeIcon icon={faCamera} className="w-3 h-3" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-neutral-800">Kỹ năng khác</h5>
                      <p className="text-sm text-neutral-500 mt-0.5 font-medium">Chụp ảnh, quay video</p>
                    </div>
                  </div>

                  {/* Software badging */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                      Software & Tools
                    </h5>
                    <div className="flex flex-wrap gap-2.5">
                      {/* Photoshop */}
                      <div className="w-11 h-11 rounded-xl bg-[#001e36] text-[#31a8ff] border border-[#31a8ff]/20 flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-default" title="Photoshop">
                        Ps
                      </div>
                      {/* Illustrator */}
                      <div className="w-11 h-11 rounded-xl bg-[#261300] text-[#ff9a00] border border-[#ff9a00]/20 flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-default" title="Illustrator">
                        Ai
                      </div>
                      {/* InDesign */}
                      <div className="w-11 h-11 rounded-xl bg-[#2b0016] text-[#ff359c] border border-[#ff359c]/20 flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-default" title="InDesign">
                        Id
                      </div>
                      {/* Premiere */}
                      <div className="w-11 h-11 rounded-xl bg-[#1b002c] text-[#e289ff] border border-[#e289ff]/20 flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-default" title="Premiere">
                        Pr
                      </div>
                      {/* Canva */}
                      <div className="px-3.5 h-11 rounded-xl bg-[#00c4cc]/10 text-[#009da3] border border-[#00c4cc]/20 flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-default" title="Canva">
                        Canva
                      </div>
                      {/* CapCut */}
                      <div className="px-4 h-11 rounded-xl bg-zinc-900 text-white border border-zinc-700/20 flex items-center justify-center font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-default" title="CapCut">
                        CapCut
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

        </Grid>
      </div>
    </section>
  );
}
