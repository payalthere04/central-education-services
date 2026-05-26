import { Award, Users, Target, Clock } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Users,
    metric: "500+",
    label: "Students Guided",
    description: "Across India & Abroad",
  },
  {
    icon: Target,
    metric: "95%",
    label: "Success Rate",
    description: "Admission Guaranteed",
  },
  {
    icon: Award,
    metric: "100+",
    label: "College Partners",
    description: "Top institutions",
  },
  {
    icon: Clock,
    metric: "5+",
    label: "Years Experience",
    description: "Maharashtra Leadership",
  },
];

export function TrustBar() {
  return (
    <section className="bg-primary section-padding-y-sm">
      <div className="container-padding-x container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-2"
              >
                <Icon className="h-8 w-8 text-white/80" />
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {item.metric}
                </p>
                <p className="text-sm font-semibold text-white/90">{item.label}</p>
                <p className="text-xs text-white/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
