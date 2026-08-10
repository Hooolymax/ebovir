"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { hero } from "@/lib/content";

export function Hero({
  content = hero,
  headlineLines = ["Empowering", "Biology", "Omics"],
}: {
  content?: typeof hero;
  headlineLines?: readonly string[];
}) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white pb-20 pt-40">
      <video
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 z-0 h-full w-full object-cover object-right"
      >
        <source src="/assets/videos/dna-banner-1080p.mp4" type="video/mp4" />
      </video>
      {/* White mask over the left (behind the headline); image stays visible on the right */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.62) 22%, rgba(255,255,255,0.32) 42%, transparent 62%)",
        }}
      />
      {/* Bottom fade into the next (white) section — removes the seam */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-white to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center gap-12 px-6 sm:px-8 lg:gap-14">
        {/* Headline — left, large, pure black */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="font-display text-6xl font-bold leading-[1.2] tracking-tight text-black sm:text-8xl lg:text-[6rem]"
        >
          {headlineLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline + CTAs — right */}
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-lg font-medium leading-relaxed text-slate-700">
              {content.subheading}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={content.primaryCta.href} withArrow>
                {content.primaryCta.label}
              </Button>
              <Button href={content.secondaryCta.href} variant="secondary">
                {content.secondaryCta.label}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
