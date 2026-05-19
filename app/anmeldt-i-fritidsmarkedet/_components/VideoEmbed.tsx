"use client";

import { useEffect, useRef } from "react";

interface VideoEmbedProps {
  src: string;
  caption?: string;
  poster?: string;
}

export default function VideoEmbed({ src, caption, poster }: VideoEmbedProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-4 lg:px-8">
      <div className="mx-auto max-w-[760px]">
        <div
          className="overflow-hidden rounded-2xl bg-[#f6f6f6]"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
        >
          <video
            ref={ref}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="block aspect-video h-auto max-h-[320px] w-full object-cover sm:max-h-[420px] lg:max-h-[480px]"
          />
        </div>
        {caption ? (
          <p className="mt-4 text-center text-[14px] italic text-ink-tertiary">
            {caption}
          </p>
        ) : null}
      </div>
    </section>
  );
}
