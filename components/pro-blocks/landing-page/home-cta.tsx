import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="bg-secondary section-padding-y border-t">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Admissions Open 2026-27
          </p>
          <h2 className="heading-lg text-primary max-w-2xl text-balance">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            Talk to Dr. Akshay Patmase and get personalised guidance for admission in top colleges across India and Abroad.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="h-4 w-4" />
                Get Free Counselling
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://wa.me/918007507488?text=Hi%2C%20I%20want%20to%20know%20about%20admission%20guidance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
