import { Tagline } from "./tagline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FeaturedPrograms() {
  const programs = [
    {
      title: "Medical & Healthcare",
      description: "MBBS, BDS, BAMS, BHMS, Nursing, BPTh",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Engineering",
      description: "B.Tech, M.Tech, Diploma in all branches",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      color: "from-blue-700 to-blue-500",
    },
    {
      title: "Management",
      description: "BBA, MBA, BCA, MCA, PGDM, CA, CS",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Tagline>Featured Programs</Tagline>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Your Path to Success
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guidance for India&apos;s most sought-after professional courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80`} />
              </div>

              <div className="relative h-64 md:h-72 flex flex-col justify-between p-6 md:p-8 text-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{program.title}</h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <Button
                  size="sm"
                  variant="secondary"
                  className="w-fit gap-2 group/btn"
                  asChild
                >
                  <Link href="/admissions">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/courses">
              Explore All Programs
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
