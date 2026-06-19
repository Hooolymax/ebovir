"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { GradientBlob } from "@/components/visuals/GradientBlob";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white pb-20 pt-40">
      {/* Vivid blue gradient cloud — large, fills the right side */}
      <GradientBlob className="right-[-10%] top-[4%] h-[760px] w-[880px] sm:h-[920px] sm:w-[1080px]" />

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center gap-12 px-6 sm:px-8 lg:gap-14">
        {/* Headline — left, large, pure black */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="font-display text-6xl font-bold leading-[0.92] tracking-tight text-black sm:text-8xl lg:text-[6rem]"
        >
          The Precision
          <br />
          Health Company
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
              {hero.subheading}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href} withArrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
