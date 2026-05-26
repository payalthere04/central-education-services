import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  GraduationCap,
  Building2,
  BadgeIndianRupee,
  FileCheck,
  HeadphonesIcon,
  Users,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Central Education Services",
  description:
    "Learn about Central Education Services and Dr. Akshay Patmase — expert education consultant based in Nagpur providing admission guidance since years.",
};

const VALUES = [
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    description: "Years of experience helping students navigate complex admission processes.",
  },
  {
    icon: FileCheck,
    title: "Transparency",
    description: "Honest advice with no hidden fees or misleading promises.",
  },
  {
    icon: Users,
    title: "Student-First",
    description: "Every decision is taken with the student's best interest at heart.",
  },
  {
    icon: Building2,
    title: "Trusted Network",
    description: "Strong relationships with top colleges across India and Abroad.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Budget-Conscious",
    description: "Solutions for every budget — from government seats to private colleges.",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    description: "From initial counselling to final admission confirmation.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-4 text-center">
          <Tagline variant="white">About Us</Tagline>
          <h1 className="heading-xl text-white text-balance max-w-2xl">
            Guiding Students Towards Their Dream Careers
          </h1>
          <p className="text-white/80 max-w-2xl text-base lg:text-lg">
            Central Education Services is a Nagpur-based education consultancy dedicated to helping students secure admissions in the best colleges across India and Abroad.
          </p>
        </div>
      </section>

      {/* About Dr. Akshay Patmase */}
      <section className="bg-card section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Image / Portrait */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 overflow-hidden rounded-3xl border-4 border-primary/20 shadow-xl bg-secondary flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full">
                    <Image
                      src="/ces-logo.png"
                      alt="Central Education Services"
                      fill
                      className="object-cover scale-175"
                      style={{ objectPosition: "50% 53%" }}
                      sizes="112px"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-primary text-xl">Dr. Akshay Patmase</p>
                    <p className="text-muted-foreground text-sm">Education Consultant</p>
                    <p className="text-muted-foreground text-sm">Central Education Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-5">
              <Tagline>Our Founder</Tagline>
              <h2 className="heading-lg text-primary">Dr. Akshay Patmase</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Akshay Patmase is the founder and principal consultant at Central Education Services. With years of hands-on experience in education consultancy, he has helped hundreds of students secure admissions in reputable colleges across Medical, Engineering, Management, Nursing, Pharmacy, and Aviation streams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His approach is rooted in transparency, personalised guidance, and a genuine commitment to student success. He understands that choosing the right college and course is one of the most important decisions in a student's life — and he takes that responsibility seriously.
              </p>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground font-medium">8007507488 | 9075074883</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground font-medium">akshaypatmase2001@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">
                    1st Floor 102, Sanchayani Complex, Above Canara Bank, Trimurti Nagar Square, Ring Road, Nagpur – 440022
                  </span>
                </div>
              </div>

              <Button className="w-fit" asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1 flex flex-col gap-5">
              <Tagline>Our Mission</Tagline>
              <h2 className="heading-lg text-primary">
                Frame Your Future With Right Guidance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is simple: be the next success story. We believe every student deserves access to quality education, and our job is to bridge the gap between student potential and the right academic opportunity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We guide students through every stage of the admission journey — from choosing the right course and college to completing documentation, filling counselling choices, and confirming their seat. We work for Medical, Engineering, Management, Pharmacy, Nursing, and Aviation admissions both in India and Abroad.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/pharmacyimg.png"
                  alt="Frame your future with right guidance"
                  fill
                  className=" object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-card section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>What We Stand For</Tagline>
            <h2 className="heading-lg text-primary">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide every interaction we have with our students and their families.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="border-2 hover:border-primary/20 transition-colors">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-5 text-center">
          <h2 className="heading-md text-white text-balance">
            Be the Next Success Story
          </h2>
          <p className="text-white/80 max-w-lg">
            Hundreds of students have trusted Central Education Services for their admission journey. You can be next.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
