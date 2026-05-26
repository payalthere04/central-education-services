import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  Stethoscope,
  Cog,
  Briefcase,
  Heart,
  FlaskConical,
  Plane,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Courses | Central Education Services",
  description:
    "Explore all courses we offer admission guidance for — Medical, Engineering, Management, Pharmacy, Nursing, Aviation and more.",
};

const COURSE_CATEGORIES = [
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical",
    tagline: "MBBS | BDS | BAMS | BHMS | BPTh",
    description:
      "Get expert guidance for top medical college admissions in India and Abroad. We support NEET-qualified students through state and central counselling processes.",
    courses: [
      { name: "MBBS", detail: "Bachelor of Medicine & Bachelor of Surgery" },
      { name: "MD / MS", detail: "Postgraduate Medical Specialisations" },
      { name: "BDS", detail: "Bachelor of Dental Surgery" },
      { name: "BAMS", detail: "Bachelor of Ayurvedic Medicine & Surgery" },
      { name: "BHMS", detail: "Bachelor of Homeopathic Medicine & Surgery" },
      { name: "BPTh", detail: "Bachelor of Physiotherapy" },
    ],
    highlight: "Direct & Confirm Admission for NEET Qualified Students",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Central%20Education%20Services%20Post%2024-vEb1GV7fXTYwe9JpftH7fZBZlxYe0A.jpg",
    color: "bg-red-50 border-red-100",
    iconColor: "bg-red-100 text-red-600",
  },
  {
    id: "engineering",
    icon: Cog,
    title: "Engineering",
    tagline: "B.Tech | M.Tech | Diploma",
    description:
      "Guidance for engineering admissions through JEE Main, JEE Advanced, state CETs and management quota. We help with college selection and counselling.",
    courses: [
      { name: "B.Tech / B.E.", detail: "All branches — CS, Mech, Civil, EC, EE" },
      { name: "M.Tech", detail: "Postgraduate Engineering Specialisations" },
      { name: "Diploma", detail: "3-year polytechnic diploma programmes" },
      { name: "BCA", detail: "Bachelor of Computer Applications" },
      { name: "MCA", detail: "Master of Computer Applications" },
    ],
    highlight: "JEE / CET / Management Quota Admissions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Central%20Education%20Services%20Post%2023-VDOKPvnAmxvJ6zXkheZKwqnYvxQrD3.jpg",
    color: "bg-blue-50 border-blue-100",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    id: "management",
    icon: Briefcase,
    title: "Management",
    tagline: "BBA | MBA | PGDM | MCA",
    description:
      "Many top MBA colleges accept MAT, XAT, CMAT, ATMA alongside CAT. We guide you to the best programmes matching your profile and budget.",
    courses: [
      { name: "BBA", detail: "Bachelor of Business Administration" },
      { name: "MBA", detail: "Master of Business Administration" },
      { name: "PGDM", detail: "Post Graduate Diploma in Management" },
      { name: "BCA", detail: "Bachelor of Computer Applications" },
      { name: "MCA", detail: "Master of Computer Applications" },
    ],
    highlight: "CAT / MAT / CMAT / Direct Admission",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Central%20Education%20Services%20Post%2023-VDOKPvnAmxvJ6zXkheZKwqnYvxQrD3.jpg",
    color: "bg-amber-50 border-amber-100",
    iconColor: "bg-amber-100 text-amber-600",
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & Nursing",
    tagline: "B.Sc Nursing | GNM | M.Sc Nursing",
    description:
      "Comprehensive guidance for nursing and allied health science admissions to government and private colleges.",
    courses: [
      { name: "B.Sc Nursing", detail: "4-year undergraduate nursing programme" },
      { name: "M.Sc Nursing", detail: "Postgraduate nursing specialisation" },
      { name: "GNM", detail: "General Nursing and Midwifery (3.5 years)" },
      { name: "ANM", detail: "Auxiliary Nursing and Midwifery (2 years)" },
      { name: "BPT", detail: "Bachelor of Physiotherapy" },
    ],
    highlight: "Admissions Open — India & Abroad",
    image: "/healthcarenurse.png",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "pharmacy",
    icon: FlaskConical,
    title: "Pharmacy",
    tagline: "B.Pharma | M.Pharma | Pharma.D",
    description:
      "Get admitted to MCI/PCI recognised pharmacy colleges. We guide you through entrance counselling and direct admission processes.",
    courses: [
      { name: "B.Pharma", detail: "Bachelor of Pharmacy (4 years)" },
      { name: "M.Pharma", detail: "Master of Pharmacy (2 years)" },
      { name: "Pharma.D", detail: "Doctor of Pharmacy (6 years)" },
      { name: "D.Pharma", detail: "Diploma in Pharmacy (2 years)" },
    ],
    highlight: "PCI Recognised College Admissions",
    image:"/pharmacy01.png",
    color: "bg-violet-50 border-violet-100",
    iconColor: "bg-violet-100 text-violet-600",
  },
  {
    id: "aviation",
    icon: Plane,
    title: "Aviation",
    tagline: "Pilot | Air Hostess | Ground Staff",
    description:
      "Pursue a high-flying career in aviation. We guide you to DGCA-approved pilot training schools and leading cabin crew training institutes.",
    courses: [
      { name: "CPL / PPL", detail: "Commercial / Private Pilot Licence" },
      { name: "Air Hostess", detail: "Cabin Crew & Hospitality Training" },
      { name: "Airport Management", detail: "Ground Operations & Management" },
      { name: "Aviation Security", detail: "Security and Safety Operations" },
    ],
    highlight: "DGCA Approved Institutes",
    image:"/aviationimg.png",
    color: "bg-sky-50 border-sky-100",
    iconColor: "bg-sky-100 text-sky-600",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-4 text-center">
          <Tagline variant="white">All Programmes</Tagline>
          <h1 className="heading-xl text-white text-balance">
            Courses We Help You Get Admitted To
          </h1>
          <p className="text-white/80 max-w-2xl text-base lg:text-lg">
            From Medical to Aviation, we provide end-to-end admission guidance for a wide range of undergraduate and postgraduate programmes — in India and Abroad.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row mt-2">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Counselling</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-black hover:bg-white/10 hover:text-black"
              asChild
            >
              <Link href="/admissions">Admission Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col gap-16">
          {COURSE_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Side */}
                <div className="flex flex-1 flex-col gap-5">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${cat.iconColor}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">
                      {cat.tagline}
                    </p>
                    <h2 className="heading-md text-primary">{cat.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{cat.description}</p>

                  {/* Course list */}
                  <div className={`rounded-xl border-2 p-5 ${cat.color}`}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Programmes Covered
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {cat.courses.map((c) => (
                        <div key={c.name} className="flex flex-col">
                          <span className="font-semibold text-foreground text-sm">{c.name}</span>
                          <span className="text-xs text-muted-foreground">{c.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <GraduationCap className="h-4 w-4 shrink-0" />
                    {cat.highlight}
                  </div>

                  <Button className="w-fit gap-2" asChild>
                    <Link href="/contact">
                      Apply for {cat.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Image Side */}
                <div className="flex-1">
                  <div className="relative aspect-[4/4] w-full overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.image}
                      alt={`${cat.title} admission guidance`}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding-y border-t">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-5 text-center">
          <h2 className="heading-md text-primary text-balance">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Talk to our counsellors for free and get personalised guidance on the best course and college based on your marks, budget, and goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Talk to a Counsellor</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
