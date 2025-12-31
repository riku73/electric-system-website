"use client";

import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { content } from "@/content/fr";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-[#FAFAF8] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FF9502]/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FF9502]/5 rounded-full blur-[100px]" />
      </div>

      {/* Large quote decoration */}
      <div className="absolute top-20 right-10 text-[300px] font-serif text-[#0D0D0D]/[0.02] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="container-padding mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#FF9502] font-medium tracking-wide uppercase text-sm mb-4 block">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] leading-[1.1] mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-xl text-[#6B6B6B] leading-relaxed">
            {content.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {content.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative ${
                index === 1 ? "md:-translate-y-8" : ""
              }`}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-[#E5E5E3] h-full">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-2xl bg-[#FF9502] flex items-center justify-center shadow-lg shadow-[#FF9502]/30">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 pt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FF9502] text-[#FF9502]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[#0D0D0D] leading-relaxed mb-8 text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#E5E5E3]">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF9502] to-[#FFB340] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0D0D0D]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#6B6B6B]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden rounded-br-3xl">
                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-[#FF9502]/10 to-transparent transform rotate-45 translate-x-10 translate-y-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Clients satisfaits" },
            { value: "98%", label: "Taux de satisfaction" },
            { value: "24h", label: "Temps de réponse" },
            { value: "2 ans", label: "Garantie incluse" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-2">
                {stat.value}
              </div>
              <div className="text-[#6B6B6B] text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
