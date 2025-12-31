"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { content } from "@/content/fr";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact";

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Image Section */}
      <div className="absolute inset-0 lg:w-1/2 lg:left-1/2">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
          alt="Modern office"
          fill
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/60" />
      </div>

      <div className="container-padding mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAFAF8] py-20 lg:py-28 lg:pr-16"
          >
            <span className="text-[#FF9502] font-medium tracking-wide uppercase text-sm mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] leading-[1.1] mb-4">
              {content.contact.title}
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-10">
              {content.contact.subtitle}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#0D0D0D] font-medium">
                    {content.contact.form.name.label}
                  </Label>
                  <Input
                    id="name"
                    placeholder={content.contact.form.name.placeholder}
                    {...register("name")}
                    className={`h-12 bg-white border-[#E5E5E3] focus:border-[#FF9502] focus:ring-[#FF9502] ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0D0D0D] font-medium">
                    {content.contact.form.email.label}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={content.contact.form.email.placeholder}
                    {...register("email")}
                    className={`h-12 bg-white border-[#E5E5E3] focus:border-[#FF9502] focus:ring-[#FF9502] ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone & Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#0D0D0D] font-medium">
                    {content.contact.form.phone.label}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={content.contact.form.phone.placeholder}
                    {...register("phone")}
                    className={`h-12 bg-white border-[#E5E5E3] focus:border-[#FF9502] focus:ring-[#FF9502] ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-[#0D0D0D] font-medium">
                    {content.contact.form.service.label}
                  </Label>
                  <Select onValueChange={(value) => setValue("service", value as ContactFormData["service"])}>
                    <SelectTrigger className={`h-12 bg-white border-[#E5E5E3] focus:border-[#FF9502] focus:ring-[#FF9502] ${errors.service ? "border-red-500" : ""}`}>
                      <SelectValue placeholder={content.contact.form.service.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {content.contact.form.service.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-red-500">{errors.service.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#0D0D0D] font-medium">
                  {content.contact.form.message.label}
                </Label>
                <Textarea
                  id="message"
                  placeholder={content.contact.form.message.placeholder}
                  rows={5}
                  {...register("message")}
                  className={`bg-white border-[#E5E5E3] focus:border-[#FF9502] focus:ring-[#FF9502] resize-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-[#FF9502] hover:bg-[#E68600] text-white font-semibold text-base rounded-full shadow-lg shadow-[#FF9502]/25 hover:shadow-xl hover:shadow-[#FF9502]/30 transition-all duration-300 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                    </span>
                    {content.contact.form.submitting}
                  </>
                ) : (
                  <>
                    {content.contact.form.submit}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-50 text-green-700 border border-green-200"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-sm">{content.contact.form.success}</p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50 text-red-700 border border-red-200"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm">{content.contact.form.error}</p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative py-20 lg:py-28 lg:pl-16 text-white"
          >
            <div className="lg:max-w-md">
              <h3 className="text-2xl font-bold mb-8">
                {content.contact.info.title}
              </h3>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF9502]" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{content.contact.info.address.label}</p>
                    <p className="text-white/70">
                      {content.company.address}<br />
                      {content.company.city}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FF9502]" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{content.contact.info.phone.label}</p>
                    <a
                      href={`tel:${content.company.phone.replace(/\s/g, "")}`}
                      className="text-white/70 hover:text-[#FF9502] transition-colors"
                    >
                      {content.company.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#FF9502]" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{content.contact.info.email.label}</p>
                    <a
                      href={`mailto:${content.company.email}`}
                      className="text-white/70 hover:text-[#FF9502] transition-colors"
                    >
                      {content.company.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FF9502]" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{content.contact.info.hours.label}</p>
                    <p className="text-white/70">{content.company.hours}</p>
                  </div>
                </div>
              </div>

              {/* Emergency CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-[#FF9502] text-white">
                <h4 className="font-bold text-lg mb-2">Urgence Électrique ?</h4>
                <p className="text-white/80 text-sm mb-4">
                  Nous intervenons rapidement pour toute urgence électrique.
                </p>
                <a
                  href={`tel:${content.company.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  Appeler Maintenant
                </a>
              </div>

              {/* Google Map */}
              <div className="mt-8 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.4677018757643!2d6.070527999999999!3d49.607786700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954bedb22689cb%3A0xc875d6a4b45682cd!2sElectric%20System%20S%C3%A0rl!5e0!3m2!1sen!2slu!4v1767198311791!5m2!1sen!2slu"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
