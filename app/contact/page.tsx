"use client";

import { useState } from "react";
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
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: "stormtech2008@gmail.com",
      action: "mailto:stormtech2008@gmail.com",
      color: "from-teal-400 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "502 Bridge Crest Blvd., Houston, TX 77082",
      action:
        "https://maps.google.com/?q=502+Bridge+Crest+Blvd,+Houston,+TX+77082",
      color: "from-green-400 to-green-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM CST",
      action: null,
      color: "from-amber-400 to-amber-500",
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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Contact
            <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent block">
              Storm Technologies
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready to optimize your revenue cycle? Get in touch with our medical
            billing experts for a free consultation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
              >
                <feature.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-white text-sm font-medium">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {info.title}
                </h3>

                {info.action ? (
                  <a
                    href={info.action}
                    target={info.action.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.action.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-blue-200 hover:text-white transition-colors duration-300 leading-relaxed"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-blue-200 leading-relaxed">
                    {info.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-6">
                Get Free Consultation
              </h2>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Fill out the form below and we&apos;ll contact you within 24
                hours to discuss how we can optimize your revenue cycle.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 backdrop-blur-sm"
                        placeholder="Dr. John Smith"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 backdrop-blur-sm"
                        placeholder="doctor@practice.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 backdrop-blur-sm"
                        placeholder="(832) 000-0000"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="practice" className="text-white">
                        Practice Name
                      </Label>
                      <Input
                        id="practice"
                        value={formData.practice}
                        onChange={(e) =>
                          handleChange("practice", e.target.value)
                        }
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 backdrop-blur-sm"
                        placeholder="Your Medical Practice"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practitioners" className="text-white">
                      Number of Practitioners
                    </Label>
                    <Select
                      value={formData.practitioners}
                      onValueChange={(value) =>
                        handleChange("practitioners", value)
                      }
                      disabled={isSubmitting}
                      //make width fit
                    >
                      <SelectTrigger className="w-full bg-white/10 border-white/20 text-white backdrop-blur-sm data-[placeholder]:text-blue-300">
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

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-300 backdrop-blur-sm min-h-[120px]"
                      placeholder="Tell us about your current billing challenges or what services you're interested in..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-white py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 backdrop-blur-sm border border-amber-300/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Thank You!
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    Your message has been sent successfully. We&apos;ll contact
                    you within 24 hours to discuss your medical billing needs.
                  </p>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Contact Us?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Free Consultation",
                      desc: "No obligation assessment of your current billing processes",
                    },
                    {
                      title: "Custom Solutions",
                      desc: "Tailored billing services designed for your practice's unique needs",
                    },
                    {
                      title: "Quick Response",
                      desc: "We respond to all inquiries within 24 hours",
                    },
                    {
                      title: "30+ Years Experience",
                      desc: "Decades of expertise in medical billing and revenue optimization",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start space-x-4"
                    >
                      <CheckCircle className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">
                          {item.title}
                        </h4>
                        <p className="text-blue-200 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/20 to-teal-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Emergency Support
                  </h3>
                  <p className="text-blue-200 mb-6">
                    Need immediate assistance with billing issues?
                  </p>
                  <a
                    href="tel:+18322363930"
                    className="inline-block bg-gradient-to-r from-amber-500 to-amber-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 inline mr-2" />
                    Call Now: 832-236-3930
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-500/20 to-teal-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Located in Houston, Serving Nationwide
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Based in Houston, Texas, but serving medical practices across the
              United States with our comprehensive billing solutions.
            </p>

            <div className="flex items-center justify-center space-x-3 text-blue-200">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">
                502 Bridge Crest Blvd., Houston, TX 77082
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
