import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer1() {
  return (
    <footer
      className="bg-primary text-white section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 lg:gap-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="bg-white/10 rounded-xl p-3 w-fit">
              <Logo showText={false} />
            </div>
            <p className="text-base font-semibold text-white">Central Education Services</p>
            <p className="text-sm text-white/80 leading-relaxed">
              Expert admission guidance for Medical, Engineering, Management,
              and more. Your success is our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm" aria-label="Footer navigation">
              {[
                { label: "Home", href: "/" },
                { label: "Courses", href: "/courses" },
                { label: "Admissions", href: "/admissions" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/80 hover:text-white transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Courses */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Courses</h4>
            <div className="flex flex-col gap-2 text-sm">
              {[
                "MBBS / BDS / BAMS / BHMS",
                "B.Tech / M.Tech / Diploma",
                "MBA / BBA / BCA / MCA",
                "B.Sc Nursing / GNM / BPT",
                "B.Pharma / M.Pharma",
                "Aviation / Pilot Training",
              ].map((course) => (
                <span key={course} className="text-white/80">{course}</span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:8007507488" className="flex items-center gap-2 hover:text-white/100 transition-colors">
                <Phone className="h-4 w-4 text-white/70 shrink-0" />
                <span className="text-white/80">8007507488 | 9075074883</span>
              </a>
              <a href="mailto:centraleducationser@gmail.com" className="flex items-center gap-2 hover:text-white/100 transition-colors">
                <Mail className="h-4 w-4 text-white/70 shrink-0" />
                <span className="text-white/80 break-all">centraleducationser@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-white/70 mt-0.5 shrink-0" />
                <span className="text-white/80">
                  1st Floor 102, Sanchayani Complex, Above Canara Bank,
                  Trimurti Nagar Square, Ring Road, Nagpur - 440022
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-4 text-sm lg:flex-row lg:justify-between">
          <p className="text-white/70 text-center lg:text-left">
            © 2026 Central Education Services. All rights reserved. | Dr. Akshay Patmase
          </p>
          <nav className="flex items-center gap-6" aria-label="Legal links">
            <Link
  href="/privacy-policy"
  className="text-white/70 hover:text-white transition-colors"
>
  Privacy Policy
</Link>

<Link
  href="/term-of-services"
  className="text-white/70 hover:text-white transition-colors"
>
  Terms of Service
</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
