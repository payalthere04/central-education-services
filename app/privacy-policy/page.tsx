import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export const metadata: Metadata = {
  title: "Privacy Policy | Central Education Services",
  description: "Privacy Policy for Central Education Services",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto text-center flex flex-col items-center gap-2">
          <div className="mb-1">
            <Tagline variant="white">Privacy Policy</Tagline>
          </div>
          <h1 className="heading-xl text-white">Your Privacy Matters</h1>

          <p className="text-white/80 max-w-3xl mx-auto">
            Central Education Services values your trust and protects personal
            information shared during admission counselling and educational
            services.
          </p>
        </div>
      </section>

      <section className="bg-card section-padding-y">
        <div className="container-padding-x container mx-auto">
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    Information We Collect
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    We may collect your name, mobile number, email address,
                    academic details, course interests, counselling preferences
                    and documents required for admission guidance.
                  </p>
                </div>

                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    How We Use Information
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    We use collected information for admission support,
                    counselling services, application processing, communication,
                    updates and student assistance.
                  </p>
                </div>

                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    Data Security
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    We implement reasonable security measures to protect your
                    personal information from unauthorized access, misuse or
                    disclosure.
                  </p>
                </div>

                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    Third Party Sharing
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Student information may be shared only when necessary for
                    admission processes, college applications or legal
                    requirements.
                  </p>
                </div>

                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    Contact Us
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Email: centraleducationser@gmail.com
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Phone: 8007507488 / 9075074883
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
