import { Tagline } from "./tagline";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";

export function SuccessMetrics() {
  const metrics = [
    {
      icon: Users,
      number: "500+",
      label: "Students Guided",
      description: "Successfully counselled across India",
    },
    {
      icon: Award,
      number: "95%",
      label: "Admission Success Rate",
      description: "Into top colleges nationwide",
    },
    {
      icon: Building2,
      number: "100+",
      label: "Partner Colleges",
      description: "Medical, Engineering, Management streams",
    },
    {
      icon: TrendingUp,
      number: "5+",
      label: "Years of Excellence",
      description: "Trusted by families across India",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Tagline variant="white">Our Impact</Tagline>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Proven Track Record of Success
          </h2>
          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
            Trusted by thousands of students and families for career guidance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Icon className="h-8 w-8 text-cyan-300" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-cyan-200 mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-blue-100">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
