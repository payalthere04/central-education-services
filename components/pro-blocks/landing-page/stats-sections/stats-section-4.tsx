"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  GraduationCap,
  Building2,
  BadgeIndianRupee,
  FileCheck,
  HeadphonesIcon,
  Users,
} from "lucide-react";

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Expert Admission Guidance",
    description: "Personalized counselling from experienced education consultants",
  },
  {
    icon: Building2,
    title: "Government Approved Colleges",
    description: "Access to recognized and accredited institutions",
  },
  {
    icon: BadgeIndianRupee,
    title: "Scholarship Assistance",
    description: "Help with scholarship applications for deserving students",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description: "Clear and honest guidance throughout the admission journey",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    description: "Complete assistance from application to admission confirmation",
  },
  {
    icon: Users,
    title: "Career Counselling",
    description: "Professional guidance to choose the right career path",
  },
];

export function StatsSection4() {
  return (
    <section className="bg-card section-padding-y border-b" id="why-us">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Why Choose Us</Tagline>
          <h2 className="heading-lg text-primary">
            Why Choose Central Education Services
          </h2>
          <p className="text-muted-foreground">
            We are committed to helping students achieve their academic dreams 
            with personalized guidance and support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="group border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
