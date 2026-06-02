import type { Metadata } from "next";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export const metadata: Metadata = {
  title: "Terms of Service | Central Education Services",
  description:
    "Read the Terms and Conditions for using Central Education Services website and admission counselling services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto text-center flex flex-col items-center gap-3">

          <div className="mb-1">
            <Tagline variant="white">
              Terms of Service
            </Tagline>
          </div>

          <h1 className="heading-xl text-white">
            Terms & Conditions
          </h1>

          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Please read these Terms & Conditions carefully before using
            our admission counselling and educational guidance services.
          </p>

        </div>
      </section>

      {/* Terms Content */}
      <section className="bg-card section-padding-y">
        <div className="container-padding-x container mx-auto max-w-6xl">

          <div className="flex flex-col gap-6">

            {/* Introduction */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Introduction
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Welcome to Central Education Services. These Terms &
                Conditions govern your access to and use of our website,
                counselling services, admission support, and educational
                consultancy services. By using our website or services,
                you agree to comply with these terms and conditions.
              </p>
            </div>

            {/* Service Scope */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Educational Counselling Services
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Central Education Services provides admission counselling,
                educational guidance, college shortlisting, application
                support, documentation guidance, and career counselling
                for Medical, Engineering, Management, Nursing, Pharmacy,
                Aviation and other professional courses in India and Abroad.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                We assist students throughout the admission process,
                however final admissions are granted solely by colleges,
                universities, or governing authorities.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Student Responsibilities
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Students and parents using our services agree to:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-3 leading-relaxed">
                <li>Provide accurate academic and personal information</li>
                <li>Submit valid documents and certificates</li>
                <li>Follow counselling schedules and deadlines</li>
                <li>Maintain respectful communication with our team</li>
                <li>Comply with rules and regulations of colleges and universities</li>
                <li>Avoid providing false or misleading information</li>
              </ul>
            </div>

            {/* Admission Disclaimer */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Admission Disclaimer
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Central Education Services provides professional guidance
                and counselling support only. We do not guarantee admission,
                scholarships, visas, placements, or approval from any
                institution unless officially confirmed by the respective authority.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Admission decisions depend on eligibility, merit,
                availability of seats, entrance examination results,
                counselling authorities and institutional policies.
              </p>
            </div>

            {/* Fees */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Consultation Fees & Payments
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Any counselling, consultation, documentation or processing
                fees will be informed clearly before confirmation of services.
                Students agree to complete all payments as per agreed terms.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Fees once paid may not be refundable unless otherwise
                stated in writing by Central Education Services.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Intellectual Property
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                All content on this website including logos, graphics,
                designs, text, images and branding belongs to
                Central Education Services and may not be copied,
                reproduced or distributed without permission.
              </p>
            </div>

            {/* Privacy */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Privacy & Data Usage
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                By using our services, you consent to the collection
                and use of personal information required for admission
                counselling, student support and communication purposes.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                We take reasonable measures to protect your information
                and maintain confidentiality throughout the admission process.
              </p>
            </div>

            {/* Third Party */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Third-Party Websites & Institutions
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to colleges, universities,
                external portals or third-party websites. We are not
                responsible for the policies, services or content
                provided by third-party platforms.
              </p>
            </div>

            {/* Liability */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Limitation of Liability
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Central Education Services shall not be held liable for
                any admission rejection, delay, cancellation, technical issue,
                change in government policies, counselling authority decisions,
                or any indirect loss arising from use of our services.
              </p>
            </div>

            {/* Suspension */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Suspension or Termination
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate services
                if any user violates these Terms & Conditions,
                provides false information, engages in misconduct,
                or attempts fraudulent activities.
              </p>
            </div>

            {/* Changes */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Changes to Terms
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Central Education Services may update or modify these
                Terms & Conditions at any time without prior notice.
                Updated terms will be published on this page.
              </p>
            </div>

            {/* Governing Law */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Governing Law
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                These Terms & Conditions are governed by the laws
                of Maharashtra, India. Any disputes shall be subject
                to the jurisdiction of courts located in Nagpur,
                Maharashtra.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Contact Us
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">

                <p>
                  <span className="font-semibold text-foreground">
                    Central Education Services
                  </span>
                </p>

                <p>
                  <span className="font-semibold text-foreground">
                    Email:
                  </span>{" "}
                  centraleducationser@gmail.com
                </p>

                <p>
                  <span className="font-semibold text-foreground">
                    Phone:
                  </span>{" "}
                  8007507488 / 9075074883
                </p>

                <p>
                  <span className="font-semibold text-foreground">
                    Address:
                  </span>{" "}
                  1st Floor 102, Sanchayani Complex,
                  Above Canara Bank, Trimurti Nagar Square,
                  Ring Road, Nagpur – 440022, Maharashtra
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}