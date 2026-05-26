import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { HomeCoursesStrip } from "@/components/pro-blocks/landing-page/home-courses-strip";
import { HomeCTA } from "@/components/pro-blocks/landing-page/home-cta";
import { FeaturedPrograms } from "@/components/pro-blocks/landing-page/featured-programs";
import { SuccessMetrics } from "@/components/pro-blocks/landing-page/success-metrics";
import { AdmissionProcess } from "@/components/pro-blocks/landing-page/admission-process";
import { TeamSection } from "@/components/pro-blocks/landing-page/team-section";

export default function HomePage() {
  return (
    <>
      <HeroSection2 />
      <HomeCoursesStrip />
      <FeaturedPrograms />
      <SuccessMetrics />
      <AdmissionProcess />
      <LogoSection10 />
      <StatsSection4 />
      <TeamSection />
      <TestimonialsSection1 />
      <HomeCTA />
    </>
  );
}
