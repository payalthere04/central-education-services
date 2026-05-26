import Link from "next/link";
import { Stethoscope, Cog, Briefcase, Heart, Plane, FlaskConical, ArrowRight } from "lucide-react";

const FIELDS = [
  { icon: Stethoscope, label: "Medical", href: "/courses#medical" },
  { icon: Cog, label: "Engineering", href: "/courses#engineering" },
  { icon: Briefcase, label: "Management", href: "/courses#management" },
  { icon: Heart, label: "Healthcare", href: "/courses#healthcare" },
  { icon: FlaskConical, label: "Pharmacy", href: "/courses#pharmacy" },
  { icon: Plane, label: "Aviation", href: "/courses#aviation" },
];

export function HomeCoursesStrip() {
  return (
    <section className="bg-primary py-6">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {FIELDS.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="/courses"
            className="flex items-center gap-1 text-white text-sm font-semibold whitespace-nowrap hover:gap-2 transition-all"
          >
            View All Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
