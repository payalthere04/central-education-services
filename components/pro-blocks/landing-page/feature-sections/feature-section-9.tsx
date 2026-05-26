"use client";

import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HEALTHCARE_COURSES = ["MBBS", "BDS", "BAMS", "BHMS", "Nursing", "BPT"];

export function FeatureSection9() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="healthcare"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Image */}
          <div className="relative flex-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Central%20education%20services%20Post%2037-d5vnwaKhIu1jx5hzLgtgHMn5xJcjzH.jpg"
                alt="Healthcare professional - Start your career in healthcare"
                fill
                className="rounded-2xl object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-1 flex-col gap-6">
            <Tagline>Healthcare Admissions</Tagline>
            <h2 className="heading-lg text-primary">
              Start Your Career in Healthcare
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">
                Admissions Open for
              </p>
              <div className="flex flex-wrap gap-2">
                {HEALTHCARE_COURSES.map((course) => (
                  <span
                    key={course}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-base lg:text-lg">
              Get expert guidance for selecting the right college and course with 
              complete admission support. Our counsellors help you navigate the 
              complex admission process for top medical colleges in India & Abroad.
            </p>

            <Button size="lg" className="w-fit gap-2" asChild>
              <Link href="/contact">
                Get Medical Admission Guidance
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
