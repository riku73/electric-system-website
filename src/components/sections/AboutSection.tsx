"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Clock, GraduationCap, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { content } from "@/content/fr";

const iconMap = {
  Star,
  Clock,
  GraduationCap,
  HeartHandshake,
};

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0D0D0D] text-white">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#FF9502]/10 rounded-full blur-[150px]" />

      {/* Full-bleed Image - positioned absolutely on desktop */}
      <div className="absolute inset-y-0 left-0 w-1/2 hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop"
          alt="Installation électrique professionnelle"
          fill
          className="object-cover"
          sizes="50vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0D0D0D]" />

        {/* Experience badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-12 left-12 bg-[#FF9502] p-6 rounded-2xl z-10"
        >
          <div className="text-5xl font-bold text-white">10+</div>
          <div className="text-white/80 text-sm font-medium">
            Années<br />d&apos;Expérience
          </div>
        </motion.div>
      </div>

      {/* Mobile Image */}
      <div className="relative h-[400px] lg:hidden">
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop"
          alt="Installation électrique professionnelle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />

        {/* Experience badge - mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-8 left-8 bg-[#FF9502] p-6 rounded-2xl"
        >
          <div className="text-5xl font-bold text-white">10+</div>
          <div className="text-white/80 text-sm font-medium">
            Années<br />d&apos;Expérience
          </div>
        </motion.div>
      </div>

      <div className="container-padding mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Spacer for image on desktop */}
          <div className="hidden lg:block" />

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-20 lg:py-28 lg:pl-16"
          >
            <span className="text-[#FF9502] font-medium tracking-wide uppercase text-sm mb-4 block">
              Qui sommes-nous
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-4 sm:mb-6">
              {content.about.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-4">
              {content.about.subtitle}
            </p>

            {/* Content paragraphs */}
            <div className="space-y-4 text-white/70 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
              {content.about.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {content.about.values.map((value, index) => {
                const Icon = iconMap[value.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF9502]/20 group-hover:border-[#FF9502]/30 transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9502]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">
                          {value.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/50">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#FF9502] text-white font-semibold rounded-full hover:bg-[#E68600] shadow-lg shadow-[#FF9502]/25 hover:shadow-xl hover:shadow-[#FF9502]/30 transition-all duration-300 group text-sm sm:text-base"
            >
              Parlons de votre projet
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Certifications */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-6 text-sm text-white/40">
                <span>{content.company.registration}</span>
                <span>{content.company.vat}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
