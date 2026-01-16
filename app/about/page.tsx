"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Award, Heart, Shield, Users, Star } from "lucide-react";

type ValueCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
};

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values: ValueCard[] = [
    {
      icon: Heart,
      title: "Honesty",
      desc: "We believe in transparent communication and honest dealings with all our clients",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Shield,
      title: "Integrity",
      desc: "Our core values guide every business decision and client interaction",
      color: "from-blue-400 to-teal-500",
    },
    {
      icon: Users,
      title: "Transparency",
      desc: "Clear reporting and open communication about your billing performance",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const achievements: string[] = [
    "Over 30 years of continuous service",
    "98% collection success rate",
    "HIPAA compliant operations",
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-medium text-sm">
              Established 1993
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About
            <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent block">
              Storm Technologies
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            For over three decades, we&apos;ve been the trusted partner for
            medical practices across the nation, combining cutting-edge
            technology with core values of honesty, transparency, and integrity.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Founded in 1993 in Houston, Texas, Storm Technologies, Inc.
                  began with a simple mission: to help medical practices focus
                  on what they do best – caring for patients – while we handle
                  the complexities of medical billing and revenue cycle
                  management.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Our journey has been guided by principles of honesty,
                  transparency, and integrity. These values aren&apos;t just
                  words to us; they&apos;re the foundation of every client
                  relationship and business decision we make.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Today, after more than 30 years of dedicated service,
                  we&apos;re proud to maintain a 98% collection success rate
                  while serving medical practices nationwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-500/20 to-teal-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-amber-400 mb-2">
                      30+
                    </div>
                    <div className="text-white font-semibold">
                      Years of Excellence
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-teal-400 mb-1">
                        98%
                      </div>
                      <div className="text-blue-200 text-sm">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-1">
                        HIPAA
                      </div>
                      <div className="text-blue-200 text-sm">Compliant</div>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-white/20">
                    <div className="text-white font-semibold mb-2">
                      Houston, Texas
                    </div>
                    <div className="text-blue-200 text-sm">
                      502 Bridge Crest Blvd.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values & Principles
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our core values form the cornerstone of our business practices and
              client relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-blue-100">
                Recognition and results that speak for themselves
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-blue-100">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-500/20 to-teal-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience the Storm Technologies difference – where core values
              meet medical billing excellence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 backdrop-blur-sm border border-amber-300/30 hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
