"use client";

import Link from "next/link";
import { Zap, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
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
      <div className="container-padding mx-auto max-w-7xl py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF9502] text-white">
                <Zap className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">
                  ELECTRIC SYSTEM
                </span>
                <span className="text-sm text-white/50">Sarl</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              {content.footer.description}
            </p>

            {/* Contact shortcuts */}
            <div className="space-y-3">
              <a
                href={`tel:${content.company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/70 hover:text-[#FF9502] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#FF9502]/10 transition-colors">
                  <Phone className="w-4 h-4 text-[#FF9502]" />
                </div>
                <span>{content.company.phone}</span>
              </a>
              <a
                href={`mailto:${content.company.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-[#FF9502] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#FF9502]/10 transition-colors">
                  <Mail className="w-4 h-4 text-[#FF9502]" />
                </div>
                <span>{content.company.email}</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6">
              {content.footer.sections.services.title}
            </h3>
            <ul className="space-y-3">
              {content.footer.sections.services.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#FF9502] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">
              {content.footer.sections.company.title}
            </h3>
            <ul className="space-y-3">
              {content.footer.sections.company.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#FF9502] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Hours */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6">Notre adresse</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF9502] shrink-0 mt-0.5" />
                <div className="text-white/60">
                  <p>{content.company.address}</p>
                  <p>{content.company.city}</p>
                  <p>{content.company.country}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-white/40 mb-2">Horaires</p>
                <p className="text-white/60">{content.company.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-padding mx-auto max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
              <span>&copy; {currentYear} {content.footer.copyright}</span>
              <span className="hidden md:inline">|</span>
              <span>{content.company.registration}</span>
              <span className="hidden md:inline">|</span>
              <span>{content.company.vat}</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/40 hover:text-[#FF9502] transition-colors">
                Mentions Légales
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
