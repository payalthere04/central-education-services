import { Tagline } from "./tagline";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Dr. Akshay Patmase",
      title: "Founder & Education Counsellor",
      description: "10+ years of experience in medical, engineering & management admissions",
      image: "/akshaypatmase.jpg",
      email: "akshaypatmase2001@gmail.com",
      phone: "9075074883",
    },
    
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Tagline>Meet Our Team</Tagline>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Expert Guidance at Every Step
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to your admission success
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border max-w-md w-full"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mt-1">{member.title}</p>
                <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                  {member.description}
                </p>

                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-xs md:text-sm truncate">{member.email}</span>
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
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose Central Education Services?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">Personalized</div>
                <p className="text-muted-foreground text-sm">Individual attention for every student</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">Transparent</div>
                <p className="text-muted-foreground text-sm">Clear process and regular updates</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">Proven</div>
                <p className="text-muted-foreground text-sm">95% success rate consistently</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
