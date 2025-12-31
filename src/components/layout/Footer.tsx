"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { content } from "@/content/fr";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9502]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9502]/5 rounded-full blur-[150px]" />

      {/* Main Footer */}
      <div className="container-padding mx-auto max-w-7xl py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4">
            <Link href="#home" className="inline-block mb-4 sm:mb-6">
              <Image
                src="https://static.wedo.lu/img/companies/170286/logo/1757514965689.png"
                alt="ELECTRIC SYSTEM Logo"
                width={160}
                height={60}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 leading-relaxed mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              {content.footer.description}
            </p>

            {/* Contact shortcuts */}
            <div className="space-y-2 sm:space-y-3">
              <a
                href={`tel:${content.company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-[#FF9502] transition-colors group text-sm sm:text-base"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#FF9502]/10 transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF9502]" />
                </div>
                <span className="break-all">{content.company.phone}</span>
              </a>
              <a
                href={`mailto:${content.company.email}`}
                className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-[#FF9502] transition-colors group text-sm sm:text-base"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#FF9502]/10 transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF9502]" />
                </div>
                <span className="break-all">{content.company.email}</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
              {content.footer.sections.services.title}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {content.footer.sections.services.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#FF9502] transition-colors inline-flex items-center gap-1 group text-xs sm:text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:block" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
              {content.footer.sections.company.title}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {content.footer.sections.company.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#FF9502] transition-colors inline-flex items-center gap-1 group text-xs sm:text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:block" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Hours */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Notre adresse</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9502] shrink-0 mt-0.5" />
                <div className="text-white/60 text-xs sm:text-sm">
                  <p>{content.company.address}</p>
                  <p>{content.company.city}</p>
                  <p>{content.company.country}</p>
                </div>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-white/10">
                <p className="text-xs sm:text-sm text-white/40 mb-1 sm:mb-2">Horaires</p>
                <p className="text-white/60 text-xs sm:text-sm">{content.company.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-padding mx-auto max-w-7xl py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-1 sm:gap-4 text-xs sm:text-sm text-white/40 text-center sm:text-left">
              <span>&copy; {currentYear} {content.footer.copyright}</span>
              <span className="hidden sm:inline">|</span>
              <span>{content.company.registration}</span>
              <span className="hidden sm:inline">|</span>
              <span>{content.company.vat}</span>
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="#" className="text-white/40 hover:text-[#FF9502] transition-colors">
                Mentions légales
              </Link>
              <Link href="#" className="text-white/40 hover:text-[#FF9502] transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
