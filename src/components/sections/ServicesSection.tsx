"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/content/fr";

// Service images from Unsplash
const serviceImages: Record<string, string> = {
  photovoltaique: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
  "borne-recharge": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
  "electricite-generale": "https://images.unsplash.com/photo-1558618165-3b969319390a?q=80&w=800&auto=format&fit=crop",
  domotique: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
  securite: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  informatique: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[#FAFAF8] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#FF9502]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9502]/5 rounded-full blur-[100px]" />

      <div className="container-padding mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-[#FF9502] font-medium tracking-wide uppercase text-sm mb-4 block">
              Nos expertises
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D0D0D] leading-[1.1] mb-4">
              {content.services.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed">
              {content.services.subtitle}
            </p>
          </div>
          <Link
            href="#contact"
            className="hidden sm:flex group items-center gap-2 text-[#0D0D0D] font-semibold hover:text-[#FF9502] transition-colors shrink-0"
          >
            Voir tous les services
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {content.services.items.map((service, index) => {
            // Make first two cards larger on desktop
            const isLarge = index < 2;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl bg-white ${
                  isLarge ? "lg:col-span-1 lg:row-span-1" : ""
                }`}
              >
                <Link href="#contact" className="block">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden">
                    <Image
                      src={serviceImages[service.id]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Number badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Arrow on hover */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FF9502] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0D0D0D] mb-2 group-hover:text-[#FF9502] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6B6B6B] leading-relaxed text-xs sm:text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF9502] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <p className="text-[#6B6B6B] mb-4 sm:mb-6 text-sm sm:text-base">
            Besoin d&apos;un service personnalisé ?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0D0D0D] text-white font-semibold rounded-full hover:bg-[#FF9502] transition-colors duration-300 group text-sm sm:text-base"
          >
            Demander un devis gratuit
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
