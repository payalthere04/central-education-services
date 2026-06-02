import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  FileText,
  Search,
  ClipboardList,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions | Central Education Services",
  description:
    "Learn about our step-by-step admission process and how we help students secure seats in top colleges across India and Abroad.",
};

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Free Consultation",
    description:
      "Book a free consultation with Dr. Akshay Patmase. Discuss your marks, budget, location preference, and career goals.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Personalised College Shortlisting",
    description:
      "Based on your profile we shortlist the best-fit colleges across India and Abroad. Government, private, and deemed universities.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Document Preparation",
    description:
      "We guide you through collecting and verifying all required documents — marksheets, entrance scorecards, certificates, and more.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Application & Counselling",
    description:
      "We support you through the official counselling process — choice filling, seat allotment, and application submissions.",
  },
  {
    step: "05",
    icon: GraduationCap,
    title: "Admission Confirmation",
    description:
      "We stay with you until the admission is confirmed. Fee payment, reporting, and all post-admission formalities are handled.",
  },
];

const WHY_ITEMS = [
  "Expert Admission Guidance",
  "Transparent & Honest Process",
  "Personalized Career Counselling",
  "Smart College Shortlisting",
  "Proven Admission Support",
  "End-to-End Assistance",
];

const FIELDS = [
  "Medical (MBBS, BDS, BAMS, BHMS, BPTh)",
  "Engineering (B.Tech, M.Tech, Diploma)",
  "Management (BBA, MBA, BCA, MCA, PGDM)",
  "Pharmacy (B.Pharma, M.Pharma, Pharma.D)",
  "Nursing (B.Sc Nursing, GNM, M.Sc Nursing)",
  "Aviation (Pilot, Air Hostess)",
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-1 flex-col gap-6">
              <Tagline variant="white">Admissions Open 2026–27</Tagline>
              <h1 className="heading-xl text-white text-balance">
                Turning Your Career Goals Into Admission Success
              </h1>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Get complete guidance for admissions in Medical, Engineering, Management, Pharmacy, Nursing, Aviation and more — in India & Abroad.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-black hover:bg-white/10 hover:text-black"
                  asChild
                >
                  <Link href="/courses">View All Courses</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Central%20Education%20Services%20Post%2023-VDOKPvnAmxvJ6zXkheZKwqnYvxQrD3.jpg"
                  alt="Student achieving admission success"
                  fill
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fields We Cover */}
      <section className="bg-secondary py-10 border-b">
        <div className="container-padding-x container mx-auto">
          <p className="text-sm font-semibold text-center text-muted-foreground mb-6 uppercase tracking-wider">
            Complete guidance for admissions in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {FIELDS.map((f) => (
              <span
                key={f}
                className="bg-card border text-sm font-medium text-foreground px-4 py-2 rounded-full shadow-sm"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="bg-card section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>How It Works</Tagline>
            <h2 className="heading-lg text-primary">Our 5-Step Admission Process</h2>
            <p className="text-muted-foreground">
              A clear, transparent, and fully guided journey from your first call to receiving your admission letter.
            </p>
          </div>

          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border hidden md:block" aria-hidden="true" />

            <div className="flex flex-col gap-6">
              {STEPS.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                    <div className="flex shrink-0 flex-col items-center md:items-start">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-sm z-10">
                        {s.step}
                      </div>
                    </div>
                    <Card className="flex-1 border-2 hover:border-primary/20 transition-colors">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-base mb-1">{s.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Medical Admissions Feature */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative flex-1">
              <div className="relative aspect-[4/4] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Central%20Education%20Services%20Post%2024-vEb1GV7fXTYwe9JpftH7fZBZlxYe0A.jpg"
                  alt="Medical admission guidance — Your medical dream starts here"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <Tagline>Medical Admissions</Tagline>
              <h2 className="heading-lg text-primary">Your Medical Dream Starts Here</h2>
              <p className="text-muted-foreground leading-relaxed">
                Get expert admission guidance for top medical colleges in India & Abroad with complete counselling support.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "MBBS | MD/MS Admission Assistance",
                  "BDS | BAMS | BHMS Guidance",
                  "Personalised Career Counselling",
                  "Budget-Based College Options",
                  "End-to-End Admission Support",
                  "Transparent Process",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-3 rounded-xl bg-primary px-5 py-3 w-fit">
                <span className="text-white font-bold text-sm uppercase tracking-wide">Apply Now</span>
                <span className="text-white/60 text-sm">|</span>
                <span className="text-white font-bold text-sm uppercase tracking-wide">Admissions Open 2026-27</span>
              </div>
              <Button className="w-fit gap-2" asChild>
                <Link href="/contact">
                  Get Medical Admission Guidance <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Strip */}
      <section className="bg-card section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-8">
          <div className="section-title-gap-md mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Why Choose Us</Tagline>
            <h2 className="heading-md text-primary">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border-2 bg-secondary px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-5 text-center">
          <h2 className="heading-md text-white text-balance">
            Ready to Secure Your Admission?
          </h2>
          <p className="text-white/80 max-w-lg">
            Contact Dr. Akshay Patmase today for a free consultation and take the first step towards your dream career.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
