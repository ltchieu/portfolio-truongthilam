"use client";

import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ImageLightboxProps {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const hasMultiple = images.length > 1;

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) onPrev();
      if (e.key === "ArrowRight" && hasMultiple) onNext();
    },
    [onClose, onPrev, onNext, hasMultiple]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll while lightbox is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const currentSrc = images[activeIndex] || "";

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Backdrop – dark semi-transparent overlay */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Close button – top right */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/20 hover:scale-110 active:scale-95"
        aria-label="Close"
      >
        <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
      </button>

      {/* Image counter */}
      {hasMultiple && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-white/60 text-xs font-semibold tracking-widest">
          {activeIndex + 1} / {images.length}
        </div>
      )}

      {/* Navigation arrows */}
      {hasMultiple && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/15 hover:scale-110 active:scale-95"
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/15 hover:scale-110 active:scale-95"
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Image container – pop-up scale animation */}
      <div
        className="relative w-[92vw] h-[85vh] max-w-[1400px] max-h-[900px] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={currentSrc}
          src={currentSrc}
          alt={`Image ${activeIndex + 1}`}
          fill
          sizes="92vw"
          className="object-contain select-none"
          priority
        />
      </div>
    </div>
  );

  // Render via portal to document.body so it's truly fullscreen
  if (typeof window === "undefined") return null;
  return createPortal(modal, document.body);
}
