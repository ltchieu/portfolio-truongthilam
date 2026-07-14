"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFolderOpen,
  faQuoteLeft,
  faBookOpen,
  faGem,
  faPlaceOfWorship,
  faUtensils,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { HUE_VIDEO_PROJECT } from "@/constant/project";

// Icon mapping configuration
const ICON_MAP: Record<string, IconDefinition> = {
  history: faBookOpen,
  gem: faGem,
  temple: faPlaceOfWorship,
  food: faUtensils,
  star: faStar,
};

export default function HueVideoProject() {
  const project = HUE_VIDEO_PROJECT;

  // Helper to parse **highlighted text** into <strong> tags
  const renderHighlightedText = (text: string) => {
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

  // Maps topic keys to FontAwesome icons
  const getTopicIcon = (iconKey?: string) => {
    if (iconKey && iconKey in ICON_MAP) {
      return ICON_MAP[iconKey];
    }
    return faStar;
  };

  return (
    <div className="bg-white/40 border border-rose-100/50 backdrop-blur-md rounded-[3rem] p-6 md:p-12 shadow-[0_30px_60px_rgba(251,198,202,0.1)] relative overflow-hidden">
      
      {/* Decorative Aura background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-tr from-rose-200/20 via-[#e05263]/10 to-transparent blur-3xl rounded-[3rem] -z-10 pointer-events-none" />

      <div className="flex flex-col gap-10">
        
        {/* 1. Header Information Area */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <div className="flex justify-center items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-rose-100/70 text-rose-600 rounded-full text-xs font-semibold uppercase tracking-wider shadow-inner">
              <FontAwesomeIcon icon={faFolderOpen} className="w-3.5 h-3.5 text-rose-400" />
              {project.category}
            </span>
            <div className="flex gap-1.5">
              {project.tools.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold bg-neutral-900 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-3xl md:text-5xl font-extrabold text-neutral-800 leading-tight">
              {project.title}
            </h3>
            <p className="font-serif text-lg md:text-xl italic text-rose-500 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-neutral-600 text-base leading-relaxed text-center font-medium mt-2">
            {project.summary && renderHighlightedText(project.summary)}
          </p>
        </div>

        {/* 2. Outstanding Large Widescreen Video Player */}
        <div className="relative w-full max-w-5xl mx-auto group">
          {/* Ambient backlight glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-300 via-rose-400 to-amber-200 rounded-[2.8rem] blur-xl opacity-30 group-hover:opacity-45 transition duration-1000 -z-10" />
          
          {/* Bezel frame container */}
          <div className="p-3 bg-white rounded-[2.8rem] border border-rose-100/60 shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-700 group-hover:scale-[1.005]">
            <div className="relative aspect-video w-full rounded-[calc(2.8rem-0.75rem)] overflow-hidden bg-black flex items-center justify-center">
              {project.video && (
                <video
                  src={project.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>

        {/* 3. Core Highlights Grid Below Video */}
        {project.features && project.features.length > 0 && (
          <div className="flex flex-col gap-6 mt-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400 text-center">
              Phân cảnh và Nội dung chính
            </h5>
            
            <Grid container spacing={3}>
              {project.features.map((item, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <div className="h-full p-6 bg-white/50 border border-neutral-100 hover:border-rose-100 rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shadow-inner shrink-0">
                      <FontAwesomeIcon icon={getTopicIcon(item.icon)} className="w-4 h-4" />
                    </div>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-medium text-left">
                      {renderHighlightedText(item.text)}
                    </p>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        )}

        {/* 4. Bottom message (Thông điệp) */}
        {project.message && (
          <div className="max-w-4xl mx-auto w-full mt-4 p-6 bg-rose-50/50 border-l-4 border-rose-400 rounded-r-2xl flex gap-4 shadow-sm">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="w-6 h-6 text-rose-300 shrink-0 mt-1"
            />
            <p className="text-neutral-700 text-sm md:text-base italic font-medium leading-relaxed text-left">
              {renderHighlightedText(project.message)}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
