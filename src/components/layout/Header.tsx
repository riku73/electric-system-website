"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { content } from "@/content/fr";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: content.nav.home },
  { href: "#services", label: content.nav.services },
  { href: "#about", label: content.nav.about },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: content.nav.contact },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-padding mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <Image
              src="https://static.wedo.lu/img/companies/170286/logo/1757514965689.png"
              alt="ELECTRIC SYSTEM Logo"
              width={180}
              height={65}
              className="h-14 sm:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "text-[#0D0D0D]/70 hover:text-[#FF9502] hover:bg-[#FF9502]/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${content.company.phone.replace(/\s/g, "")}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-[#0D0D0D]" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{content.company.phone}</span>
            </a>
            <Button
              asChild
              className="bg-[#FF9502] hover:bg-[#E68600] text-white font-semibold px-6 rounded-full"
            >
              <Link href="#contact">{content.nav.cta}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`${isScrolled ? "text-[#0D0D0D] hover:bg-[#0D0D0D]/5" : "text-white hover:bg-white/10 hover:text-white"}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-[#0D0D0D] border-none p-0">
              <div className="flex flex-col h-full p-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-12">
                  <Image
                    src="https://static.wedo.lu/img/companies/170286/logo/1757514965689.png"
                    alt="ELECTRIC SYSTEM Logo"
                    width={180}
                    height={65}
                    className="h-14 w-auto object-contain"
                  />
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-2xl font-bold text-white hover:text-[#FF9502] transition-colors py-3 border-b border-white/10"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto pt-8 space-y-4">
                  <Button
                    asChild
                    className="w-full bg-[#FF9502] hover:bg-[#E68600] text-white font-semibold py-6 rounded-full shadow-lg shadow-[#FF9502]/25"
                    size="lg"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      {content.nav.cta}
                    </Link>
                  </Button>

                  {/* Contact Info */}
                  <div className="text-center text-white/60 text-sm space-y-1">
                    <p>{content.company.phone}</p>
                    <p>{content.company.email}</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
