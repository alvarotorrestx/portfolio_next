"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          videoRef.current?.play?.();
        } else {
          videoRef.current?.pause?.();
        }
      },
      { threshold: 0.3 } // % of visible view to pause/play
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 w-full h-full -z-10 overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {loaded && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/bg_video.mp4" type="video/mp4" />
        </video>
      )}
      <span className="select-none font-mono absolute bottom-0 right-0 italic text-[.5rem] md:text-[.6rem] lg:text-[.7rem] font-syne p-4 text-primary drop-shadow-[0_0_4px_rgba(255,0,0,1.0)]">
        Software Engineer by day... Architect of code by night.
      </span>
    </div>
  );
}
