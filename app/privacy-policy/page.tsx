import type { Metadata } from "next";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export const metadata: Metadata = {
  title: "Privacy Policy | Central Education Services",
  description:
    "Read the Privacy Policy of Central Education Services regarding admission counselling, data collection, security and student privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto text-center flex flex-col items-center gap-3">

          <Tagline variant="white">
            Privacy Policy
          </Tagline>

          <h1 className="heading-xl text-white">
             Your Information, Our Responsibility
          </h1>

          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            Central Education Services is committed to protecting the
            privacy and personal information of students, parents and
            visitors using our admission counselling and educational
            guidance services.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="bg-card section-padding-y">
        <div className="container-padding-x container mx-auto">

          <div className="flex flex-col gap-6">

            {/* Overview */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Overview
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how Central Education
                Services collects, uses, stores and protects personal
                information shared by students, parents and visitors
                through our website, counselling services and admission
                assistance programmes.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                By using our services, you agree to the collection and
                use of information in accordance with this policy.
              </p>
            </div>

            {/* Information Collection */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">
              <h2 className="font-bold text-3xl mb-4 text-primary">
                Information We Collect
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal, academic and technical
                information required for counselling and admission
                guidance purposes.
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-3 leading-relaxed">
                <li>Student Full Name</li>
                <li>Email Address and Phone Number</li>
                <li>Parent / Guardian Contact Information</li>
                <li>Academic Qualifications and Marks</li>
                <li>NEET / CET / JEE / Entrance Exam Details</li>
                <li>Preferred Courses and Colleges</li>
                <li>Address, City and State Information</li>
                <li>Uploaded Documents and Certificates</li>
                <li>Website usage and browser information</li>
              </ul>
            </div>

            {/* Use of Information */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">

              <h2 className="font-bold text-3xl mb-4 text-primary">
                How We Use Your Information
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Information collected from users may be used for:
              </p>

              <ul className="list-disc pl-6 text-muted-foreground space-y-3 leading-relaxed">
                <li>Admission counselling and student guidance</li>
                <li>College and course shortlisting assistance</li>
                <li>Medical, Engineering, Pharmacy and Nursing admissions</li>
                <li>NEET counselling and application support</li>
                <li>Communication regarding admission updates</li>
                <li>Responding to student and parent inquiries</li>
                <li>Improving website functionality and services</li>
                <li>Providing scholarship and educational updates</li>
                <li>Maintaining internal student records</li>
              </ul>

            </div>

            {/* Cookies */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">

              <h2 className="font-bold text-3xl mb-4 text-primary">
                Cookies & Tracking Technologies
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies and analytics tools to
                enhance user experience, understand visitor behaviour
                and improve website performance. Cookies help us
                remember user preferences and provide a smoother
                browsing experience.
              </p>

            </div>

            {/* Data Security */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">

              <h2 className="font-bold text-3xl mb-4 text-primary">
                Data Security & Protection
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Central Education Services implements appropriate
                security measures to safeguard personal information
                from unauthorized access, misuse, alteration or
                disclosure.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                While we strive to protect user data, no method of
                online transmission or storage is completely secure.
                Users are advised to keep their personal credentials
                confidential.
              </p>

            </div>

            {/* Third Party */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">

              <h2 className="font-bold text-3xl mb-4 text-primary">
                Third-Party Sharing
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We do not sell or rent personal information to third
                parties. Information may only be shared with colleges,
                universities, admission authorities or trusted service
                providers when required for counselling, admission
                processing or legal obligations.
              </p>

            </div>

            {/* Student Responsibility */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">

              <h2 className="font-bold text-3xl mb-4 text-primary">
                Student Responsibility
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Students and parents are responsible for providing
                accurate academic records, entrance examination scores
                and personal information during the counselling and
                admission process.
              </p>

            </div>

            {/* External Links */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">

              <h2 className="font-bold text-3xl mb-4 text-primary">
                External Links
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites
                or educational portals. We are not responsible for the
                privacy practices or content of external websites.
              </p>

            </div>

            {/* Policy Updates */}
            <div className="rounded-2xl border shadow-sm p-8 bg-background">

              <h2 className="font-bold text-3xl mb-4 text-primary">
                Changes to This Privacy Policy
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Central Education Services reserves the right to update
                or modify this Privacy Policy at any time. Updated
                versions will be posted on this page with the latest
                revision date.
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
                    Organization:
                  </span>{" "}
                  Central Education Services
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
                  Ring Road, Nagpur – 440022, Maharashtra, India
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}