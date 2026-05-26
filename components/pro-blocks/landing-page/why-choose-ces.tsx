import { Award, BookOpen, Users, FileText, Briefcase, GraduationCap } from "lucide-react";

const WHY_CHOOSE = [
  {
    icon: Award,
    title: "Government-Approved Colleges",
    description: "Access to 500+ recognized institutions with verified partnerships",
    color: "from-blue-50 to-blue-100",
  },
  {
    icon: Users,
    title: "Expert Counselling",
    description: "One-on-one guidance from seasoned education professionals",
    color: "from-cyan-50 to-cyan-100",
  },
  {
    icon: Briefcase,
    title: "Complete Admission Support",
    description: "End-to-end assistance from form filling to final admission",
    color: "from-indigo-50 to-indigo-100",
  },
  {
    icon: FileText,
    title: "Documentation Assistance",
    description: "Professional help with all required documents and certificates",
    color: "from-violet-50 to-violet-100",
  },
  {
    icon: BookOpen,
    title: "Scholarship Guidance",
    description: "Expert advice on scholarships and education loan options",
    color: "from-purple-50 to-purple-100",
  },
  {
    icon: GraduationCap,
    title: "Career Roadmap",
    description: "Comprehensive career planning aligned with your aspirations",
    color: "from-pink-50 to-pink-100",
  },
];

export function WhyChooseCES() {
  return (
    <section className="section-padding-y-lg bg-white">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest">
              Why Choose Central Education Services
            </p>
            <h2 className="heading-lg text-primary">
              Complete Admission Solution For Your Success
            </h2>
            <p className="text-foreground/70 text-base">
              We provide comprehensive support at every step of your admission journey, ensuring a smooth transition to your dream college.
            </p>
          </div>

          {/* Grid of Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl p-6 border border-border bg-gradient-to-br hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Trust Statement */}
          <div className="bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-foreground/80 text-base leading-relaxed max-w-3xl mx-auto">
              Trusted by families across Maharashtra and India, Central Education Services has established itself as a premier consultancy for admission guidance. With a 95% success rate and partnerships with 500+ colleges, we ensure your career aspirations become reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
