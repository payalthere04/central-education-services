"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

interface NavMenuItemsProps {
  className?: string;
  onItemClick?: () => void;
}

function NavMenuItems({ className, onItemClick }: NavMenuItemsProps) {
  const pathname = usePathname();
  return (
    <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
      {MENU_ITEMS.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <Link key={label} href={href} onClick={onItemClick}>
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className={`w-full md:w-auto font-medium ${isActive ? "text-primary" : ""}`}
            >
              {label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-card sticky top-0 isolate z-50 border-b shadow-sm py-2 md:py-3">
      <div className="container-padding-x container mx-auto flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={closeMenu}>
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-4 md:flex md:items-center">
          <NavMenuItems />
          <Link href="tel:8007507488">
            <Button className="gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-4 pb-2.5 md:hidden">
            <NavMenuItems onItemClick={closeMenu} />
            <Link href="tel:8007507488" onClick={closeMenu}>
              <Button className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
