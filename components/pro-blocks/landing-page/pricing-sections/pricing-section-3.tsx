"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone",
    details: ["8007507488", "9075074883"],
    href: "tel:8007507488",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["centraleducationser@gmail.com", "akshaypatmase2001@gmail.com"],
    href: "mailto:centraleducationser@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: [
      "1st Floor 102, Sanchayani Complex",
      "Above Canara Bank, Trimurti Nagar Square",
      "Ring Road, Nagpur - 440022 (Maharashtra)",
    ],
    href: "https://maps.google.com/?q=Trimurti+Nagar+Square+Nagpur",
  },
];

const COURSES_OPTIONS = [
  "MBBS / Medical",
  "BDS / Dental",
  "BAMS / Ayurveda",
  "BHMS / Homeopathy",
  "B.Sc Nursing",
  "B.Tech / Engineering",
  "MBA / Management",
  "Aviation",
  "Other",
];

export function PricingSection3() {
  return (
    <section className="bg-secondary section-padding-y border-b" id="contact">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Get In Touch</Tagline>
          <h2 className="heading-lg text-primary">
            Get Admission Guidance Today
          </h2>
          <p className="text-muted-foreground">
            Fill out the form below and our counsellors will get in touch with you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-2">
            <CardContent className="p-6 md:p-8">
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="course" className="text-sm font-medium text-foreground">
                    Course Interested In *
                  </label>
                  <select
                    id="course"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  >
                    <option value="">Select a course</option>
                    {COURSES_OPTIONS.map((course) => (
                      <option key={course} value={course}>
                        {course}
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
                    placeholder="Tell us about your requirements..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" size="lg" className="flex-1">
                    Submit Inquiry
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="flex-1 gap-2"
                    asChild
                  >
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
          <div className="flex flex-col gap-6">
            {/* Consultant Info */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                    AP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Dr. Akshay Patmase</h3>
                    <p className="text-muted-foreground">Education Consultant</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            {CONTACT_INFO.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.title === "Office Address" ? "_blank" : undefined}
                rel={info.title === "Office Address" ? "noopener noreferrer" : undefined}
                className="group"
              >
                <Card className="border-2 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Office Hours */}
            <Card className="border-2">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Office Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
