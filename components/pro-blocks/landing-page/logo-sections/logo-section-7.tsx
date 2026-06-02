"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CAREER_FIELDS = [
  { name: "Medical", color: "bg-red-500" },
  { name: "Engineering", color: "bg-blue-500" },
  { name: "Commerce", color: "bg-amber-500" },
  { name: "Nursing", color: "bg-emerald-500" },
  { name: "Aviation", color: "bg-sky-500" },
];

export function LogoSection10() {
  return (
    <section className="bg-card section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col gap-6">
            <Tagline>Career Opportunities</Tagline>
            <h2 className="heading-lg text-primary">
              Limitless Career Opportunities
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              Start your academic journey with the right guidance. We help you explore 
              diverse career paths and find the perfect course that matches your 
              aspirations and potential.
            </p>

            {/* Career Fields */}
            <div className="flex flex-wrap gap-3">
              {CAREER_FIELDS.map((field) => (
                <div
                  key={field.name}
                  className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full"
                >
                  <span className={`h-3 w-3 rounded-full ${field.color}`} />
                  <span className="font-medium text-foreground">{field.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <p className="text-lg font-semibold text-accent">Admissions Open 2026-27</p>
              <Button size="lg" className="w-fit gap-2" asChild>
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex-1">
            <div className="relative aspect-[4/3.7] max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Central%20education%20services%20Post%2026-ineFWzEWk7vz7ORalfPfofEvMUpgwe.jpg"
                alt="Student with limitless career opportunities"
                fill
                className="rounded-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
