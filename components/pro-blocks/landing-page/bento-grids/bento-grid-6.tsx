"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { 
  Stethoscope, 
  Cog, 
  Briefcase, 
  Heart, 
  Plane 
} from "lucide-react";

const COURSES = [
  {
    icon: Stethoscope,
    title: "Medical",
    courses: ["MBBS", "MD/MS", "BDS", "BAMS", "BHMS"],
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Cog,
    title: "Engineering",
    courses: ["B.Tech", "M.Tech", "Diploma"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Management",
    courses: ["BBA", "MBA", "BCA", "MCA", "PGDM"],
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Heart,
    title: "Healthcare",
    courses: ["B.Sc Nursing", "M.Sc Nursing", "GNM", "BPT"],
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Plane,
    title: "Aviation",
    courses: ["Pilot", "Air Hostess"],
    color: "bg-sky-50 text-sky-600",
  },
];

export function BentoGrid6() {
  return (
    <section className="bg-card section-padding-y border-b" id="courses">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>Our Programs</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg text-primary">
            Courses We Help With
          </h2>
          <p className="text-muted-foreground">
            Get complete guidance for admissions in Medical, Engineering, Management, Pharmacy, Nursing, Aviation and more - in India & Abroad.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {COURSES.map((course) => (
            <Card 
              key={course.title} 
              className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20"
            >
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${course.color}`}>
                  <course.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {course.courses.map((c) => (
                    <span 
                      key={c} 
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
