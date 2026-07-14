"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { CONTACT_INFO } from "@/constant/contact";

export default function Contact() {
  return (
    <section
      id="lien-he"
      className="py-28 px-6 md:px-12 lg:px-16 bg-neutral-950 text-white rounded-t-[3.5rem] border-t border-neutral-900 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden"
    >
      {/* Subtle backlighting glow overlay */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <div className="inline-flex self-center items-center gap-1.5 px-4 py-1.5 bg-white/10 text-rose-400 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
            Thông tin liên hệ
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            Hãy cùng bắt đầu một dự án mới!
          </h2>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base font-medium">
            Hãy liên hệ với mình nếu bạn có ý tưởng cần thiết kế, minh họa hoặc muốn hợp tác thiết kế các sản phẩm độc đáo.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <Grid container spacing={4} className="justify-center">

          {/* Card 1: Email */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group h-full p-6 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center text-center gap-4 hover:bg-white/10 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/5 hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Email</span>
                <span className="text-sm font-semibold text-neutral-200 group-hover:text-rose-400 transition-colors break-all">
                  {CONTACT_INFO.email}
                </span>
              </div>
            </a>
          </Grid>

          {/* Card 2: Facebook */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full p-6 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center text-center gap-4 hover:bg-white/10 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/5 hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Facebook</span>
                <span className="text-sm font-semibold text-neutral-200 group-hover:text-rose-400 transition-colors">
                  {CONTACT_INFO.facebook}
                </span>
              </div>
            </a>
          </Grid>

          {/* Card 3: Phone */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="group h-full p-6 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center text-center gap-4 hover:bg-white/10 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/5 hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Điện thoại</span>
                <span className="text-sm font-semibold text-neutral-200 group-hover:text-rose-400 transition-colors">
                  {CONTACT_INFO.phone}
                </span>
              </div>
            </a>
          </Grid>

        </Grid>

        {/* Footer Copyright */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Trương Thị Lâm. All rights reserved.</p>
          <p className="tracking-wide">Designed with Passion & Creative Precision</p>
        </div>

      </div>
    </section>
  );
}
