import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { Mission } from "@/components/home/Mission";
import { Science } from "@/components/home/Science";
import { Ecosystem } from "@/components/home/Ecosystem";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Mission />
      <Science />
      <Ecosystem />
      <FinalCta />
    </>
  );
}
