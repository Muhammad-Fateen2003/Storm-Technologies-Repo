import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Award,
  Target,
  Heart,
  Zap,
  ChevronRight,
} from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
};

type Benefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
};

export default function HomePage() {
  const stats: Stat[] = [
    {
      icon: Award,
      value: "30+",
      label: "Years Experience",
      color: "bg-amber-500",
    },
    {
      icon: Target,
      value: "98%",
      label: "Collection Success",
      color: "bg-teal-500",
    },
    {
      icon: Shield,
      value: "100%",
      label: "HIPAA Compliant",
      color: "bg-emerald-500",
    },
  ];

  const coreServices = [
    { name: "Insurance Credentialing & Enrollment", slug: "credentialing" },
    { name: "Prior Authorization Verification", slug: "prior-authorization" },
    { name: "Medical Billing and Coding", slug: "medical-billing" },
    { name: "Claims Submission and Follow-up", slug: "claims-submission" },
    { name: "Revenue Cycle Management", slug: "revenue-cycle" },
    { name: "Denial Management", slug: "denial-management" },
  ];

  const benefits: Benefit[] = [
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      desc: "Maximize cash flow and reduce claim denials",
      color: "bg-teal-500",
    },
    {
      icon: Shield,
      title: "Improve Compliance",
      desc: "Reduce risk with expert billing practices",
      color: "bg-teal-500",
    },
    {
      icon: Heart,
      title: "Patient Focus",
      desc: "Let you focus on patient care, not paperwork",
      color: "bg-teal-500",
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      desc: "Grow your practice with flexible billing support",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="bg-blue">
      {/* Hero Section - Cleaner Aetna Style */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-32 hero-brand-strip overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-white font-medium text-sm">
                  30+ Years of Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Medical Billing
                <span className="text-[#0d9488] block mt-2">
                  Excellence
                </span>
              </h1>

              <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                Our mission is to help medical practices improve operational
                efficiency and financial performance by outsourcing their billing
                needs, so clients can focus on patient care instead of paperwork.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/contact#contact-form"
                  className="bg-[#0d9488] text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-teal-900/20 hover:bg-[#0f766e] transition-all duration-300 text-center"
                >
                  Get Started Today
                </Link>

                <Link
                  href="/contact#contact-info"
                  className="flex items-center justify-center space-x-2 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
                >
                  <span>Contact Details</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>

{/* Right: Modern Professional Image/Graphic */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-md mx-auto">
                
                {/* Decorative blob - subtle blue tint */}
                <div className="absolute inset-0 bg-sky-400/10 rounded-[3rem] rotate-6 backdrop-blur-sm" />
                
                {/* Main Card 
                   Changes:
                   1. Updated gradient 'from' color to 'from-sky-300/20' (lighter blue) instead of white.
                   2. Kept 'to-transparent' for the fade effect.
                */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 to-transparent rounded-[3rem] shadow-2xl backdrop-blur-xl flex items-center justify-center p-10 translate-x-4 -translate-y-4">
                  <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
                    <div className="w-28 h-28 relative mb-8">
                      <Image
                        src="/logo.png"
                        alt="Storm Technologies"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-3xl font-bold text-white mb-3">
                      Trusted Partner
                    </div>
                    <div className="text-white/70 text-lg">
                      in Medical Billing Since 1993
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Stats Grid - Aetna Inspired Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {stats.map((stat, index) => (
              <div key={index} className="card-aetna p-10 flex flex-col items-center text-center">
                <div className={`icon-standalone mb-6 ${stat.color.includes('amber') ? 'amber' : stat.color.includes('teal') ? 'teal' : 'teal'}`}>
                  <stat.icon size={48} strokeWidth={1.5} />
                </div>
                <div className="text-4xl font-bold text-[#1a365d] mb-3">
                  {stat.value}
                </div>
                <div className="text-slate-500 font-medium text-lg uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlight Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 background-sky">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-teal-50 text-[#0d9488] font-bold rounded-lg text-sm uppercase tracking-wider mb-6">
                Our Foundation
              </div>
              <h2 className="text-4xl font-bold text-[#1a365d] mb-8 leading-tight">
                Founded on Core Values of
                <span className="text-[#0d9488]"> Honesty & Integrity</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                As a trusted partner in medical billing for over 30 years, we
                deliver precise and efficient billing services. Our commitment
                to transparency ensures that your practice receives the highest level of service.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#d9f1f9] p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-4xl font-bold text-[#0d9488] mb-1">98%</div>
                  <div className="text-slate-500 font-medium">Collection Success</div>
                </div>
                <div className="bg-[#d9f1f9] p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-4xl font-bold text-[#1a365d] mb-1">30+</div>
                  <div className="text-slate-500 font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1a365d] mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-[#0d9488] mr-2" />
                Core Billing Services
              </h3>
              <div className="grid gap-3">
                {coreServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    className="flex items-center space-x-3 bg-[#d9f1f9] border border-slate-100 rounded-xl p-4 shadow-sm hover:border-[#c5dae2] transition-colors group"
                  > 
                    <div className="w-2 h-2 rounded-full bg-[#0d9488]" />
                    <span className="text-slate-700 font-medium group-hover:text-[#1a365d]">{service.name}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/services"
                className="link-arrow mt-6"
              >
                Explore all services
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Professional Aetna Style Cards */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 background-sky">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Why Choose Storm Technologies?
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light">
              Experience the difference of working with a partner who truly
              understands the complexities of medical billing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-aetna p-8 text-center"
              >
                <div className="icon-standalone teal mb-6">
                  <benefit.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional & Focused */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 background-sky">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1a365d] rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 leading-tight">
              Let&apos;s Optimize Your <br />
              <span className="text-[#0d9488]">Revenue Cycle Today!</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed font-light">
              Join hundreds of medical practices that trust Storm Technologies
              with their billing and credentialing needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-10">
              <Link
                href="/contact#contact-form"
                className="bg-[#0d9488] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#0f766e] transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact#contact-info"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <span>View Contact Details</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}