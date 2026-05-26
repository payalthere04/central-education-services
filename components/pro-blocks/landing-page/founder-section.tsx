import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export function FounderSection() {
  return (
    <section className="section-padding-y-lg bg-gradient-to-br from-background via-white to-secondary">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/20 rounded-3xl blur-3xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                alt="Dr. Akshay Patmase - Founder & Education Consultant"
                width={400}
                height={500}
                className="rounded-3xl object-cover relative z-10 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-2xl font-bold text-sm z-20 shadow-lg">
                Trusted Since 2013
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="space-y-3">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest">
                Meet Our Founder
              </p>
              <h2 className="heading-lg text-primary">
                Dr. Akshay Patmase
              </h2>
              <p className="text-lg font-semibold text-foreground/80">
                Founder & Lead Education Consultant
              </p>
            </div>

            <p className="text-foreground/70 text-base leading-relaxed">
              With over a decade of experience in education consultancy, Dr. Akshay Patmase has guided more than 2,500 students toward successful admissions in premier medical, engineering, and management institutions across India and abroad.
            </p>

            <div className="space-y-3 bg-accent/8 rounded-2xl p-6">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wide">
                Our Promise
              </h3>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Student-first approach with personalized guidance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expert knowledge of NEET, JEE, CET, and MBA admissions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Government-approved college partnerships</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>End-to-end admission support and documentation</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground italic">
              "Our mission is to transform aspirations into admissions. Every student deserves the right guidance to secure their dream college."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90" asChild>
                <a href="tel:8007507488">
                  <Phone className="h-4 w-4" />
                  Call Dr. Akshay
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="mailto:akshaypatmase2001@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
