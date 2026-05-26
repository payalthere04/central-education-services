import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export const metadata: Metadata = {
  title: "Terms of Service | Central Education Services",
  description: "Terms of Service for Central Education Services",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-primary section-padding-y">
        <div className="container-padding-x container mx-auto text-center flex flex-col items-center gap-2">
         <div className="mb-1">
              <Tagline variant="white">Terms of Service</Tagline>
         </div>
          <h1 className="heading-xl text-white">Terms & Conditions</h1>

          <p className="text-white/80 max-w-3xl mx-auto">
            Please read these terms before using our admission guidance and
            counselling services.
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
                    Service Scope
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Central Education Services provides admission counselling
                    and educational guidance services only.
                  </p>
                </div>

                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    Student Responsibilities
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Students are responsible for submitting accurate academic
                    records and required documents.
                  </p>
                </div>

                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    Admission Decisions
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Final admissions are determined by colleges, universities
                    and governing authorities.
                  </p>
                </div>

                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    Payments & Fees
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Any counselling or processing fees will be communicated
                    clearly before service confirmation.
                  </p>
                </div>

                <div className="rounded-2xl border shadow-sm p-8 bg-background">
                  <h2 className="font-bold text-2xl mb-3 text-primary">
                    Changes to Terms
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to update these terms whenever
                    required.
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
