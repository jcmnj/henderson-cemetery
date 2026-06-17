"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { GalleryImage } from "@/lib/gallery";

type GalleryLightboxProps = {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
};

function wrapIndex(index: number, total: number) {
  return (index + total) % total;
}

export function GalleryLightbox({ images, selectedIndex, onClose, onSelect }: GalleryLightboxProps) {
  const isOpen = selectedIndex !== null;
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  useEffect(() => {
    if (!isOpen || selectedIndex === null) return;

    const activeIndex = selectedIndex;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onSelect(wrapIndex(activeIndex - 1, images.length));
      }

      if (event.key === "ArrowRight") {
        onSelect(wrapIndex(activeIndex + 1, images.length));
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, isOpen, onClose, onSelect, selectedIndex]);

  if (!isOpen || selectedIndex === null || !selectedImage) {
    return null;
  }

  const previousIndex = wrapIndex(selectedIndex - 1, images.length);
  const nextIndex = wrapIndex(selectedIndex + 1, images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-dvh flex-col bg-stone-950/95 px-4 py-4 text-stone-50 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Archive image ${selectedIndex + 1} of ${images.length}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-stone-300">
          Image {selectedIndex + 1} of {images.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="button-soft inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-stone-600 bg-stone-900 px-4 text-sm font-medium text-stone-100 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
        >
          Close
        </button>
      </div>

      <div className="relative my-4 flex min-h-0 flex-1 items-center justify-center">
        <Image
          src={selectedImage.src}
          alt={`Henderson Cemetery archive photograph: ${selectedImage.filename}`}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 border-t border-stone-700 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="truncate font-serif text-xl font-semibold text-stone-50">{selectedImage.filename}</p>
          <p className="mt-1 text-sm text-stone-400">{selectedImage.relativePath}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:flex sm:shrink-0">
          <button
            type="button"
            className="button-soft h-12 rounded-full border border-stone-600 bg-stone-900 px-5 text-sm font-medium text-stone-100 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
            onClick={() => onSelect(previousIndex)}
          >
            ← Previous
          </button>
          <button
            type="button"
            className="button-soft h-12 rounded-full border border-stone-600 bg-stone-900 px-5 text-sm font-medium text-stone-100 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300"
            onClick={() => onSelect(nextIndex)}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
