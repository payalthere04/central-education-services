"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COURSE_BADGES = [
  "MBBS",
  "BDS",
  "BAMS",
  "BHMS",
  "B.Tech",
  "MBA",
  "Nursing",
  "Aviation",
];

export function HeroSection2() {
  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Left Column - Image */}
        <div className="relative w-full flex-1 order-2 lg:order-1">
          <div className="relative aspect-[4/2.95] max-w-md mx-auto lg:max-w-none">
            <Image
              src="/pharmacyimg.png"
              alt="Graduate student celebrating success"
              fill
              priority
              className="rounded-2xl object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8 order-1 lg:order-2">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Expert Admission Guidance
            </span>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl text-primary">
              Frame Your Future With The Right Guidance
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Secure admission in top colleges across Medical, Engineering, 
              Management and more with expert counselling from Dr. Akshay Patmase.
            </p>
          </div>

          {/* Course Badges */}
          <div className="flex flex-wrap gap-2">
            {COURSE_BADGES.map((badge) => (
              <span
                key={badge}
                className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Contact Numbers */}
          <div className="flex flex-col gap-2 text-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-semibold">8007507488</span>
              <span className="text-muted-foreground">|</span>
              <span className="font-semibold">9075074883</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a 
                href="https://wa.me/918007507488?text=Hi%2C%20I%20want%20to%20know%20about%20admission%20guidance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to Counsellor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
