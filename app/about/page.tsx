"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Heart, Shield, Users, CheckCircle } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Honesty",
      desc: "We believe in transparent communication and honest dealings with all our clients.",
      color: "teal",
    },
    {
      icon: Shield,
      title: "Integrity",
      desc: "Our core values guide every business decision and client interaction.",
      color: "teal",
    },
    {
      icon: Users,
      title: "Transparency",
      desc: "Clear reporting and open communication about your billing performance.",
      color: "teal",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Consistently delivering superior service and results for our practice partners.",
      color: "teal",
    },
  ];

  return (
    <div className="bg-blue">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20 hero-brand-strip overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Our
            <span className="text-[#0d9488] block mt-2">
              Story
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Founded with a vision to revolutionize medical billing through
            integrity, transparency, and unparalleled expertise since 1993.
          </p>
        </div>
      </section>

      {/* Our Story / Founder Note */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 background-sky">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="card-aetna p-12 bg-white relative z-10">
                <div className="text-[#0d9488] font-bold uppercase tracking-widest text-sm mb-6">Established 1993</div>
                <h2 className="text-4xl font-bold text-[#1a365d] mb-8 leading-tight">
                  Three Decades of <br />
                  <span className="text-[#0d9488]">Billing Excellence</span>
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
                  <p>
                    Storm Technologies was founded on the principle that medical
                    practitioners should be able to focus on what they do best:
                    caring for patients.
                  </p>
                  <p>
                    For over 30 years, we have served as a dedicated partner to
                    medical practices, navigating the complexities of healthcare
                    reimbursement with honesty and precision.
                  </p>
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sky-200 rounded-[2.5rem] z-0" />
            </div>

            <div className="grid gap-8">
              <div className="card-aetna p-8 flex items-start space-x-6">
                <div className="icon-standalone navy mt-1">
                  <CheckCircle size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">Our Mission</h3>
                  <p className="text-slate-500 font-light">
                    To maximize provider revenue through expert billing and
                    unwavering commitment to client success.
                  </p>
                </div>
              </div>
              <div className="card-aetna p-8 flex items-start space-x-6">
                <div className="icon-standalone teal mt-1">
                  <Heart size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">Our Vision</h3>
                  <p className="text-slate-500 font-light">
                    To be the most trusted name in healthcare administration,
                    known for our integrity and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 background-sky">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Core Values</h2>
            <p className="text-xl text-slate-500 font-light">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-aetna p-10 text-center"
              >
                <div className="icon-standalone teal mb-8">
                  <value.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid Area - Infinite Carousel */}
      <section className="relative py-16 background-sky overflow-hidden border-t border-b border-sky-200">
        <div className="relative flex select-none">
          <motion.div
            className="flex space-x-24 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[
              { label: "Years in Business", value: "30+" },
              { label: "Collection Success", value: "98%" },
              { label: "Commission Rate", value: "4-6%" },
              { label: "Compliant", value: "HIPAA" },
              { label: "Years in Business", value: "30+" },
              { label: "Collection Success", value: "98%" },
              { label: "Commission Rate", value: "4-6%" },
              { label: "Compliant", value: "HIPAA" },
            ].map((stat, i) => (
              <div key={i} className="inline-block py-8 min-w-[300px] text-center">
                <div className="text-6xl font-bold text-[#1a365d] mb-3 tracking-tighter">{stat.value}</div>
                <div className="text-[#0d9488] uppercase tracking-[0.2em] text-xs font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Faded edges */}
          <div className="absolute top-0 left-0 h-full w-48 bg-gradient-to-r from-sky-200 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-48 bg-gradient-to-l from-sky-200 to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* CTA section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 background-sky">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1a365d] rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to See the <br />
              <span className="text-[#0d9488]">Storm Difference?</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the peace of mind that comes from working with a partner
              completely dedicated to your practice&apos;s financial health.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">
              <Link
                href="/contact#contact-form"
                className="bg-[#0d9488] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#0f766e] transition-all duration-300"
              >
                Schedule Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
