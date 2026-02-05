"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Award,
  Shield,
  Star,
  Linkedin,
} from "lucide-react";

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

type FormData = {
  name: string;
  email: string;
  phone: string;
  practice: string;
  practitioners: string;
  message: string;
};

type ContactCard = {
  icon: LucideIcon;
  title: string;
  details: string;
  action: string | null;
  color: string;
};

type Feature = {
  icon: LucideIcon;
  text: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    practice: "",
    practitioners: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const contactInfo: ContactCard[] = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 832-236-3930",
      action: "tel:+18322363930",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: "stormtech2008@gmail.com",
      action: "mailto:stormtech2008@gmail.com",
      color: "bg-teal-500",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "502 Bridge Crest Blvd., Houston, TX 77082",
      action:
        "https://maps.google.com/?q=502+Bridge+Crest+Blvd,+Houston,+TX+77082",
      color: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM CST",
      action: null,
      color: "bg-amber-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: "Follow our company page",
      action: "https://www.linkedin.com/company/storm-technologies-inc/",
      color: "bg-blue-700",
    },
  ];

  const features: Feature[] = [
    { icon: Award, text: "30+ Years Experience" },
    { icon: Star, text: "98% Success Rate" },
    { icon: Shield, text: "HIPAA Compliant" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // send to backend here
    console.log("Form submitted:", formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        practice: "",
        practitioners: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20 hero-brand-strip overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Contact
            <span className="text-[#0d9488] block mt-2">
              Storm Technologies
            </span>
          </h1>

          <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to optimize your revenue cycle? Get in touch with our medical
            billing experts for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information Cards - Infinite Carousel */}
      <section id="contact-info" className="relative py-16 background-sky overflow-hidden border-b border-sky-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#1a365d] uppercase tracking-[0.2em]">Contact Channels</h2>
            <div className="h-px flex-1 bg-sky-200 ml-8" />
          </div>
        </div>

        <div className="relative flex select-none">
          <motion.div
            className="flex space-x-12 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 80, // Much slower for readability
                ease: "linear",
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[...contactInfo, ...contactInfo].map((info, index) => {
              const CardContent = (
                <div className="flex flex-col items-center justify-center p-10 w-[380px] h-[340px] text-center">
                  <div className={`icon-standalone teal mb-10`}>
                    <info.icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                    {info.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-light whitespace-normal max-w-[280px] text-lg">
                    {info.details}
                  </p>
                </div>
              );

              return (
                <div key={index} className="inline-block py-6">
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith("http") ? "_blank" : "_self"}
                      rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block card-aetna card-aetna-interactive hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 h-full group bg-white border-slate-100"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div className="block card-aetna h-full bg-white border-slate-100">
                      {CardContent}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Faded edges for better premium feel */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-sky-to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-sky-to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* Form and Info Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 background-sky">
        <div className="max-w-7xl mx-auto">
          <div id="contact-form" className="grid lg:grid-cols-2 gap-16 items-start scroll-mt-24">
            {/* Contact Form */}
            <div className="card-aetna p-10 md:p-12 bg-white relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#1a365d] rounded-l-2xl" />

              <h2 className="text-3xl font-bold text-[#1a365d] mb-6">
                Free Assessment
              </h2>
              <p className="text-slate-500 mb-10 leading-relaxed font-light">
                Fill out the form below and we&apos;ll contact you within 24
                hours to discuss how we can optimize your revenue cycle.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-[#1a365d] font-bold text-sm uppercase tracking-wider">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-[#0d9488] rounded-xl"
                        placeholder="Dr. John Smith"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-[#1a365d] font-bold text-sm uppercase tracking-wider">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-[#0d9488] rounded-xl"
                        placeholder="doctor@practice.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-[#1a365d] font-bold text-sm uppercase tracking-wider">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-[#0d9488] rounded-xl"
                        placeholder="(832) 000-0000"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="practice" className="text-[#1a365d] font-bold text-sm uppercase tracking-wider">
                        Practice Name
                      </Label>
                      <Input
                        id="practice"
                        value={formData.practice}
                        onChange={(e) =>
                          handleChange("practice", e.target.value)
                        }
                        className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-[#0d9488] rounded-xl"
                        placeholder="Your Medical Practice"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="practitioners" className="text-[#1a365d] font-bold text-sm uppercase tracking-wider">
                      Number of Practitioners
                    </Label>
                    <Select
                      value={formData.practitioners}
                      onValueChange={(value) =>
                        handleChange("practitioners", value)
                      }
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="h-14 bg-slate-50 border-transparent focus:bg-white focus:border-[#0d9488] rounded-xl">
                        <SelectValue placeholder="Select practice size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Practitioner</SelectItem>
                        <SelectItem value="2-5">2-5 Practitioners</SelectItem>
                        <SelectItem value="6-10">6-10 Practitioners</SelectItem>
                        <SelectItem value="11-25">
                          11-25 Practitioners
                        </SelectItem>
                        <SelectItem value="25+">25+ Practitioners</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-[#1a365d] font-bold text-sm uppercase tracking-wider">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-slate-50 border-transparent focus:bg-white focus:border-[#0d9488] rounded-xl min-h-[150px] p-4"
                      placeholder="Tell us about your current billing challenges..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1a365d] hover:bg-[#2c5282] text-white h-16 rounded-xl font-bold shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 mr-3 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="icon-standalone teal mb-8 mx-auto">
                    <CheckCircle size={64} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1a365d] mb-4">
                    Thank You!
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-light text-lg">
                    Your message has been sent successfully. We&apos;ll contact
                    you within 24 hours to discuss your medical billing needs.
                  </p>
                </div>
              )}
            </div>

            {/* Additional Info / Features */}
            <div className="lg:pt-12 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-[#1a365d] mb-8">
                  Why Storm Technologies?
                </h3>
                <div className="space-y-10">
                  {[
                    {
                      title: "Free Evaluation",
                      desc: "Comprehensive assessment of your current aging and billing performance.",
                      icon: Award
                    },
                    {
                      title: "Rapid Implementation",
                      desc: "Most practices are fully integrated and running within 15-30 days.",
                      icon: Star
                    },
                    {
                      title: "Guaranteed Compliance",
                      desc: "Full HIPAA compliance and strict adherence to federal and state regulations.",
                      icon: Shield
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-6"
                    >
                      <div className="icon-standalone teal mt-1">
                        <item.icon size={28} />
                      </div>
                      <div>
                        <h4 className="text-[#1a365d] font-bold text-lg mb-2">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-bold text-[#1a365d] mb-4">Immediate Assistance</h4>
                <p className="text-slate-500 font-light mb-8">Need to speak with an expert right away?</p>
                <a
                  href="tel:832-236-3930"
                  className="inline-flex items-center space-x-4 group"
                >
                  <div className="w-14 h-14 bg-[#1a365d] rounded-full flex items-center justify-center text-white group-hover:bg-[#0d9488] transition-colors">
                    <Phone size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1a365d] font-bold text-2xl tracking-tight">832-236-3930</div>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Available 8am - 6pm CST</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 background-sky">
        <div className="max-w-7xl mx-auto">
          <div className="card-aetna !bg-[#1a365d] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10 leading-tight">
              Located in Houston, <br />
              <span className="text-[#0d9488]">Serving Nationwide</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Based in Houston, Texas, we serve medical practices across all 50 states with our comprehensive billing solutions.
            </p>

            <div className="inline-flex items-center space-x-4 bg-white/10 px-8 py-4 rounded-full text-white relative z-10 border border-white/10">
              <MapPin size={22} className="text-[#0d9488]" />
              <span className="font-medium text-white">502 Bridge Crest Blvd., Houston, TX 77082</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
