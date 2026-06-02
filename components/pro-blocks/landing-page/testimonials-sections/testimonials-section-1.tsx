"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "I successfully secured my MBBS admission with the help of Central Education Services. Their expert counselling, proper guidance during NEET counselling, and continuous support made the entire admission process smooth and stress-free.",
    name: "Tejaswini Kale",
    course: "MBBS Student",
  },
  {
    quote:"The team provided excellent guidance for my MBA admission journey. From college shortlisting to scholarship assistance, everything was handled professionally and transparently. I am truly grateful for their support.",
    name: "Pooja Jadhav",
    course: "MBA Student",
  },
  {
    quote:"Central Education Services helped me achieve my dream of pursuing B.Sc Nursing. Their personalized counselling, quick responses, and constant encouragement gave me confidence throughout the admission process.",
    name: "Saurabh Deshmukh",
    course: "B.Sc Nursing Student",
  },
];

export default function TestimonialsSection1() {
  return (
    <section
      className="bg-primary section-padding-y"
      aria-labelledby="testimonial-title"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            Student Reviews
          </span>
          <h2 className="heading-lg text-white">
            What Our Students Say
          </h2>
          <p className="text-white/80">
            Hear from students who achieved their academic dreams with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="flex flex-col gap-4 p-6">
                <Quote className="h-8 w-8 text-white/40" />
                <p className="text-white/90 text-base leading-relaxed">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="border-t border-white/20 pt-4 mt-2">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.course}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
