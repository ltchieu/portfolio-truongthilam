"use client";

import React from "react";
import FeaturedProject from "./projects/FeaturedProject";
import HueVideoProject from "./projects/HueVideoProject";
import ScrollReveal from "@/component/ScrollReveal";
import { FEATURED_PROJECTS } from "@/constant/project";

export default function Projects() {
  return (
    <section id="san-pham" className="py-32 px-6 md:px-12 lg:px-16 border-t border-rose-100/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-rose-100/60 text-rose-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Thư viện tác phẩm
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-800 leading-tight">
            Dự án nổi bật
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mt-4 font-medium">
            Các dự án truyền thông đa phương tiện, thiết kế đồ họa và biên tập ấn phẩm sáng tạo tiêu biểu.
          </p>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="flex flex-col gap-20">
          {FEATURED_PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100} distance="50px">
              <FeaturedProject project={project} />
            </ScrollReveal>
          ))}

          {/* Custom Large Widescreen Video Showcase */}
          <ScrollReveal delay={FEATURED_PROJECTS.length * 100} distance="50px">
            <HueVideoProject />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
