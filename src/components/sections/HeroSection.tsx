"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/content/fr";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Image with Overlay */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          alt="Solar panels installation"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/30" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#FF9502]/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-[#FF9502]/10 rounded-full blur-[80px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-padding mx-auto max-w-7xl w-full py-32 lg:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9502] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF9502]" />
            </span>
            <span className="text-[#FF9502] font-medium tracking-wide uppercase text-sm">
              Électricien Agréé au Luxembourg
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Solutions <span className="text-gradient">Électriques</span> Complètes pour Particuliers et Pros
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed font-light"
          >
            {content.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 bg-[#FF9502] hover:bg-[#E68600] text-white font-semibold rounded-full group shadow-lg shadow-[#FF9502]/25 hover:shadow-xl hover:shadow-[#FF9502]/30 transition-all duration-300"
            >
              <Link href="#services" className="flex items-center gap-2">
                {content.hero.cta.primary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 border border-white/30 bg-transparent text-white hover:bg-white hover:text-[#0D0D0D] hover:border-white font-semibold rounded-full backdrop-blur-sm group transition-all duration-300"
            >
              <Link href="#contact" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                {content.hero.cta.secondary}
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8"
          >
            {[
              "Installation Certifiée",
              "Devis Gratuit 24h",
              "Garantie 2 Ans",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-white/60"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FF9502]" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-8"
        >
          {[
            { value: "500+", label: "Projets Réalisés" },
            { value: "98%", label: "Clients Satisfaits" },
            { value: "10+", label: "Ans d'Expérience" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-right border-r-2 border-[#FF9502]/30 pr-6 py-2"
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs uppercase tracking-widest">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 12] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#FF9502] rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
