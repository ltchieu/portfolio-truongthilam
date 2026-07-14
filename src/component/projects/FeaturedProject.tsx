"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/component/ImageLightbox";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFolderOpen,
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
  faVolumeUp,
  faUtensils,
  faCameraRetro,
  faHeart,
  faCircleExclamation,
  faStethoscope,
  faMicroscope,
  faGlobe,
  faArrowUpRightFromSquare,
  faWind,
  faPalette,
  faHands,
  faSeedling,
  faBookOpen,
  faGem,
  faPlaceOfWorship,

  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { ProjectDetail } from "@/model/project";

// Icon mapping configuration
const ICON_MAP: Record<string, IconDefinition> = {
  sound: faVolumeUp,
  food: faUtensils,
  camera: faCameraRetro,
  heart: faHeart,
  warning: faCircleExclamation,
  health: faStethoscope,
  medical: faMicroscope,
  culture: faGlobe,
  wind: faWind,
  palette: faPalette,
  hands: faHands,
  seed: faSeedling,
  history: faBookOpen,
  gem: faGem,
  temple: faPlaceOfWorship,
  star: faStar,
};

interface FeaturedProjectProps {
  project: ProjectDetail;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const projectImages = project.images || [];

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

  // Carousel Handlers
  const handlePrev = () => {
    if (projectImages.length === 0) return;
    setActiveImgIdx((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (projectImages.length === 0) return;
    setActiveImgIdx((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white/40 border border-rose-100/50 backdrop-blur-md rounded-[3rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(251,198,202,0.08)]">
      <Grid container spacing={6} className="items-center">
        
        {/* Left Column: Interactive Project Screenshots / Slideshow */}
        <Grid size={{ xs: 12, md: 5 }}>
          <div className="group relative flex flex-col gap-4">
            
            {/* Main Interactive Screen Showcase */}
            <div className="p-3 bg-white rounded-[2.5rem] border border-rose-100/60 shadow-xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:shadow-2xl">
              <div className="relative aspect-[16/10] w-full rounded-[calc(2.5rem-0.75rem)] overflow-hidden bg-rose-50/20 flex items-center justify-center">
                {project.video ? (
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    <video
                      src={project.video}
                      controls
                      preload="metadata"
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      Trình duyệt của bạn không hỗ trợ phát video định dạng này.
                    </video>
                  </div>
                ) : projectImages.length > 0 ? (
                  <>
                    <Image
                      src={projectImages[activeImgIdx]}
                      alt={`${project.title} Page ${activeImgIdx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                      className="object-contain p-1 transition-all duration-700 cursor-zoom-in"
                      onClick={() => setIsZoomed(true)}
                    />

                    {/* Navigation Buttons (Appear on hover) */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-rose-500 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 cursor-pointer border border-rose-50"
                      aria-label="Previous page"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-rose-500 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 cursor-pointer border border-rose-50"
                      aria-label="Next page"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="w-3.5 h-3.5" />
                    </button>
                  </>
                ) : (
                  project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                      className="object-cover cursor-zoom-in"
                      onClick={() => setIsZoomed(true)}
                    />
                  )
                )}
              </div>
            </div>

            {/* Carousel Thumbnails Strip */}
            {projectImages.length > 1 && (
              <div className="flex gap-2 justify-center py-1">
                {projectImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImgIdx(i)}
                    className={`relative w-16 h-10 md:w-20 md:h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImgIdx === i
                        ? "border-rose-500 scale-105 shadow-md shadow-rose-100"
                        : "border-neutral-100/60 opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Page thumbnail ${i + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Corner decorative sparkle star */}
            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg border-2 border-white pointer-events-none">
              <FontAwesomeIcon icon={faStar} className="w-4 h-4 animate-spin-slow" />
            </div>

          </div>
        </Grid>

        {/* Right Column: Content Summary & Details */}
        <Grid size={{ xs: 12, md: 7 }} className="text-left">
          <div className="flex flex-col gap-6 md:pl-4">
            
            {/* Category & Tools row */}
            <div className="flex flex-wrap items-center gap-3">
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

            {/* Titles */}
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-neutral-800 leading-tight">
                {project.title}
              </h3>
              <p className="font-serif text-lg md:text-xl italic text-rose-500 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Summary description */}
            <p className="text-neutral-600 text-base leading-relaxed text-justify font-medium">
              {project.summary && renderHighlightedText(project.summary)}
            </p>

            {/* Key Topics List */}
            {project.features && project.features.length > 0 && (
              <div className="flex flex-col gap-4 mt-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Nội dung chính
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white/50 border border-neutral-100 rounded-2xl flex gap-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mt-0.5 shrink-0 shadow-inner">
                        <FontAwesomeIcon icon={getTopicIcon(item.icon)} className="w-4 h-4" />
                      </div>
                      <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-medium">
                        {renderHighlightedText(item.text)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message Blockquote */}
            {project.message && (
              <div className="mt-4 p-5 bg-rose-50/50 border-l-4 border-rose-400 rounded-r-2xl flex gap-3 shadow-sm">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="w-5 h-5 text-rose-300 shrink-0 mt-1"
                />
                <p className="text-neutral-700 text-sm italic font-medium leading-relaxed">
                  {renderHighlightedText(project.message)}
                </p>
              </div>
            )}

            {/* Project Link Action */}
            {project.projectLink && (
              <div className="mt-6 flex justify-start">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10 active:scale-[0.98]"
                >
                  Xem chi tiết dự án
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2.5 h-2.5 text-white" />
                  </div>
                </a>
              </div>
            )}

          </div>
        </Grid>

      </Grid>

      {/* Image Lightbox Modal */}
      {isZoomed && (
        <ImageLightbox
          images={projectImages.length > 0 ? projectImages : (project.image ? [project.image] : [])}
          activeIndex={activeImgIdx}
          onClose={() => setIsZoomed(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
