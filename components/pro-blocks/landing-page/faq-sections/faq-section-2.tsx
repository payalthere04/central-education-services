"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-card section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h2 id="faq-heading" className="heading-lg text-primary">
              Frequently Asked Questions
            </h2>
            {/* Section Description */}
            <p className="text-muted-foreground">
              Find answers to common questions about our admission guidance services. 
              Still have questions?{" "}
              <Link href="#contact" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Admission FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h3 className="text-foreground text-lg font-semibold md:text-xl">
                Admission Process
              </h3>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Admission FAQ items"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What documents are required for admission?
                  </AccordionTrigger>
                  <AccordionContent>
                    Required documents typically include: 10th & 12th marksheets, 
                    entrance exam scorecard (NEET/JEE/CAT etc.), caste certificate 
                    (if applicable), domicile certificate, passport size photographs, 
                    Aadhar card, and income certificate for scholarship applications. 
                    Our counsellors will guide you with the complete list based on 
                    your specific course and college requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How do you help with NEET counselling?
                  </AccordionTrigger>
                  <AccordionContent>
                    We provide comprehensive NEET counselling support including: 
                    helping you understand the counselling process, college selection 
                    based on your rank and budget, document verification guidance, 
                    choice filling strategy, and seat allotment assistance. We guide 
                    students through both state and central counselling processes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Do you provide guidance for admissions abroad?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide complete guidance for MBBS and other courses abroad 
                    in countries like Russia, Ukraine, Philippines, Georgia, and more. 
                    This includes university selection, admission process, visa assistance, 
                    and pre-departure guidance. We only recommend MCI/NMC recognized 
                    universities for medical courses.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What is the fee structure for your services?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our consultation is free of cost. We charge a nominal service fee 
                    only after successful admission confirmation. The fee varies based 
                    on the course and college. We believe in transparent pricing with 
                    no hidden charges. Contact us for detailed information.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Courses FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h3 className="text-foreground text-lg font-semibold md:text-xl">
                Courses & Eligibility
              </h3>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Courses FAQ items"
              >
                <AccordionItem value="courses-1">
                  <AccordionTrigger className="text-left">
                    What is the eligibility for MBBS admission?
                  </AccordionTrigger>
                  <AccordionContent>
                    For MBBS admission in India, you need to have passed 10+2 with 
                    Physics, Chemistry, and Biology with minimum 50% marks (40% for 
                    reserved categories). You must also qualify NEET-UG examination. 
                    Age should be minimum 17 years as of December 31st of admission year.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="courses-2">
                  <AccordionTrigger className="text-left">
                    Can I get MBA admission without CAT score?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, many good MBA colleges accept other entrance exams like MAT, 
                    XAT, CMAT, ATMA, and state-level exams. Some colleges also have 
                    direct admission based on graduation marks. We can guide you to 
                    find the best colleges matching your profile and budget.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="courses-3">
                  <AccordionTrigger className="text-left">
                    Is there scholarship available for students?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, various scholarships are available including government 
                    scholarships for SC/ST/OBC/EWS categories, merit-based scholarships, 
                    and college-specific financial aid programs. We help identify 
                    applicable scholarships and assist with the application process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="courses-4">
                  <AccordionTrigger className="text-left">
                    Do you help with engineering admissions?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide complete guidance for B.Tech/B.E. admissions 
                    through JEE Main, JEE Advanced, state CETs, and management quota. 
                    We help with college selection, counselling process, and documentation. 
                    We also assist with M.Tech and diploma engineering admissions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
