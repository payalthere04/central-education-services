import { Tagline } from "./tagline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export function AdmissionProcess() {
  const steps = [
    {
      number: "01",
      title: "Free Counselling",
      description: "Personal one-on-one session to understand your goals, academics, and preferences",
    },
    {
      number: "02",
      title: "College Shortlisting",
      description: "Curated list of top colleges matching your profile and merit across India",
    },
    {
      number: "03",
      title: "Application Support",
      description: "Complete guidance on forms, documents, deadlines, and submission process",
    },
    {
      number: "04",
      title: "Interview Preparation",
      description: "Mock interviews, tips, and strategies to ace college and entrance exams",
    },
    {
      number: "05",
      title: "Admission Tracking",
      description: "Real-time updates on application status and admission offers from colleges",
    },
    {
      number: "06",
      title: "Final Counselling",
      description: "Help choosing the best college and course for your future career path",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Tagline>Our Process</Tagline>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Your Journey to Success in 6 Steps
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A structured, transparent, and personalized approach to admission guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 md:p-8 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              {/* Step Number Circle */}
              <div className="absolute top-0 right-6 -translate-y-1/2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>

              {/* Checkmark */}
              <div className="mt-4 flex items-center gap-2 text-cyan-600 font-medium">
                <CheckCircle className="h-5 w-5" />
                <span>Comprehensive support</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book your free consultation call with our expert counsellors today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule Free Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://wa.me/918007507488?text=Hi%2C%20I%20want%20to%20know%20more%20about%20admission%20guidance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
