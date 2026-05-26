"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";

const COURSES_OPTIONS = [
  "MBBS / Medical",
  "BDS / Dental",
  "BAMS / Ayurveda",
  "BHMS / Homeopathy",
  "B.Sc Nursing / GNM",
  "BPT / Physiotherapy",
  "B.Tech / Engineering",
  "MBA / Management",
  "B.Pharma / Pharmacy",
  "Aviation",
  "Other",
];

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["8007507488", "9075074883"],
    href: "tel:8007507488",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["centraleducationser@gmail.com", "akshaypatmase2001@gmail.com"],
    href: "mailto:centraleducationser@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    lines: [
      "1st Floor 102, Sanchayani Complex",
      "Above Canara Bank, Trimurti Nagar Square",
      "Ring Road, Nagpur - 440022 (Maharashtra)",
    ],
    href: "https://maps.google.com/?q=Trimurti+Nagar+Square+Nagpur",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: By Appointment"],
    href: null,
  },
];

const FAQS = [
  {
    q: "What documents are required for admission?",
    a: "Documents typically include: 10th & 12th marksheets, entrance exam scorecard (NEET/JEE/CAT etc.), caste certificate (if applicable), domicile certificate, passport size photographs, Aadhar card, and income certificate for scholarships. Our counsellors will provide a complete list based on your course.",
  },
  {
    q: "How do you help with NEET counselling?",
    a: "We provide comprehensive NEET counselling support including the counselling process, college selection based on rank and budget, document verification, choice filling strategy, and seat allotment assistance — for both state and central counselling.",
  },
  {
    q: "Do you provide guidance for admissions abroad?",
    a: "Yes, we provide complete guidance for MBBS and other courses abroad in countries like Russia, Ukraine, Philippines, Georgia, and more. We only recommend NMC-recognised universities for medical courses.",
  },
  {
    q: "What is the fee for your services?",
    a: "Our initial consultation is free. We charge a nominal service fee only after successful admission confirmation. No hidden charges — we believe in complete transparency.",
  },
  {
    q: "Can I get MBA admission without CAT?",
    a: "Yes. Many good MBA colleges accept MAT, XAT, CMAT, ATMA, and state-level exams. Some also have direct admission based on graduation marks. We guide you to colleges matching your profile and budget.",
  },
  {
    q: "Is scholarship assistance available?",
    a: "Yes — government scholarships for SC/ST/OBC/EWS categories, merit-based scholarships, and college-specific financial aid. We help identify applicable scholarships and assist with the application.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-4 text-center">
          <Tagline variant="white">Get In Touch</Tagline>
          <h1 className="heading-xl text-white text-balance">
            Get Admission Guidance Today
          </h1>
          <p className="text-white/80 max-w-xl text-base lg:text-lg">
            Fill the form below and our counsellors will contact you shortly. Or call us directly on 8007507488.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <h2 className="heading-sm text-primary mb-6">Submit Your Enquiry</h2>
                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="course" className="text-sm font-medium text-foreground">
                      Course Interested In <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="course"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select a course</option>
                      {COURSES_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, marks, or any questions..."
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" size="lg" className="flex-1">
                      Submit Enquiry
                    </Button>
                    <Button type="button" size="lg" variant="outline" className="flex-1 gap-2" asChild>
                      <a
                        href="https://wa.me/918007507488?text=Hi%2C%20I%20want%20to%20know%20about%20admission%20guidance"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp Now
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              {/* Consultant Card */}
              <Card className="border-2 border-primary/20 bg-primary">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white text-2xl font-bold shrink-0">
                    AP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Dr. Akshay Patmase</h3>
                    <p className="text-white/80 text-sm">Education Consultant</p>
                    <p className="text-white/80 text-sm">Central Education Services, Nagpur</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact detail cards */}
              {CONTACT_CARDS.map((info) => {
                const Icon = info.icon;
                const inner = (
                  <Card className="border-2 hover:border-primary/30 hover:shadow-md transition-all duration-200">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{info.title}</h4>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
                return info.href ? (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.title === "Office Address" ? "_blank" : undefined}
                    rel={info.title === "Office Address" ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={info.title}>{inner}</div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card section-padding-y" aria-labelledby="faq-heading">
        <div className="container-padding-x container mx-auto flex flex-col gap-10">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>FAQ</Tagline>
            <h2 id="faq-heading" className="heading-lg text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Still have questions? Call us on{" "}
              <a href="tel:8007507488" className="text-primary font-semibold underline">
                8007507488
              </a>
            </p>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <Accordion type="single" collapsible className="flex flex-col gap-2">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-2 rounded-xl px-4 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
