"use client";

import { useRef, useState } from "react";

export function PlotMapViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const [scrollStartTop, setScrollStartTop] = useState(0);

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartY(event.clientY);
    setScrollStartLeft(containerRef.current.scrollLeft);
    setScrollStartTop(containerRef.current.scrollTop);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const dx = event.clientX - dragStartX;
    const dy = event.clientY - dragStartY;
    containerRef.current.scrollLeft = scrollStartLeft - dx;
    containerRef.current.scrollTop = scrollStartTop - dy;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const zoomIn = () => setZoom((value) => Math.min(2.5, Number((value + 0.2).toFixed(2))));
  const zoomOut = () => setZoom((value) => Math.max(0.8, Number((value - 0.2).toFixed(2))));
  const resetZoom = () => setZoom(1);

  return (
    <div className="rounded-3xl border border-stone-300 bg-stone-50/90 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
          Drag to pan on desktop · Scroll/pinch on mobile
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            className="button-soft rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700"
          >
            Zoom out
          </button>
          <button
            type="button"
            onClick={zoomIn}
            className="button-soft rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700"
          >
            Zoom in
          </button>
          <button
            type="button"
            onClick={resetZoom}
            className="button-soft rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700"
          >
            Reset
          </button>
          <span className="text-xs text-stone-500">{Math.round(zoom * 100)}%</span>
        </div>
      </div>
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className={[
          "mt-3 max-h-[72vh] overflow-auto rounded-2xl border border-stone-300 bg-stone-100",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        ].join(" ")}
      >
        <img
          src="/images/plot-map/henderson-cemetery-plots-medium.jpg"
          alt="Henderson Cemetery lot map"
          className="h-auto max-w-none origin-top-left"
          style={{ transform: `scale(${zoom})` }}
          draggable={false}
        />
      </div>
    </div>
  );
}
