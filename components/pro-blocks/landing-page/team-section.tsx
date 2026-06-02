import { Tagline } from "./tagline";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Dr. Akshay Patmase",
      title: "Founder & Education Counsellor",
      description:
        "10+ years of experience in medical, engineering & management admissions",
      image: "/akshaypatmase.jpg",
      email: "akshaypatmase2001@gmail.com",
      phone: "9075074883",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <Tagline>Meet Our Team</Tagline>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Expert Guidance at Every Step
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to your admission success
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Team Card */}
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border w-full min-h-[620px]"
            >
              <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground">
                  {member.name}
                </h3>

                <p className="text-sm font-semibold text-primary mt-1">
                  {member.title}
                </p>

                <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                  {member.description}
                </p>

                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />

                    <span className="text-xs md:text-sm truncate">
                      {member.email}
                    </span>
                  </a>

                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />

                    <span className="text-xs md:text-sm">{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* About Us Box */}
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 flex flex-col justify-between min-h-[620px]">
            <Tagline>About Us</Tagline>

            <h3 className="mt-4 text-3xl font-bold text-foreground leading-tight">
              Guidance Beyond Admissions
            </h3>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Central Education Services is committed to helping students
              achieve their academic and career goals through expert counselling
              and personalized admission guidance.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Under the leadership of Dr. Akshay Patmase, we provide
              transparent, student-focused counselling services for Medical,
              Engineering, Management, Nursing and other professional courses
              across India and Abroad.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission is to simplify the admission journey by offering
              accurate guidance, college shortlisting, counselling support,
              scholarship assistance and complete admission solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl bg-primary/5 p-5 border border-primary/10">
                <div className="text-3xl font-bold text-primary">500+</div>

                <p className="text-sm text-muted-foreground mt-1">
                  Students Guided
                </p>
              </div>

              <div className="rounded-xl bg-primary/5 p-5 border border-primary/10">
                <div className="text-3xl font-bold text-primary">95%</div>

                <p className="text-sm text-muted-foreground mt-1">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose Central Education Services?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Personalized
                </div>

                <p className="text-muted-foreground text-sm">
                  Individual attention for every student
                </p>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Transparent
                </div>

                <p className="text-muted-foreground text-sm">
                  Clear process and regular updates
                </p>
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Proven
                </div>

                <p className="text-muted-foreground text-sm">
                  95% success rate consistently
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
