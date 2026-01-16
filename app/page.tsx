import Link from "next/link";
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
};

export default function HomePage() {
  const stats: Stat[] = [
    {
      icon: Award,
      value: "30+",
      label: "Years Experience",
      color: "from-amber-400 to-amber-500",
    },
    {
      icon: Target,
      value: "98%",
      label: "Collection Success",
      color: "from-teal-400 to-teal-500",
    },
    {
      icon: Shield,
      value: "100%",
      label: "HIPAA Compliant",
      color: "from-green-400 to-green-500",
    },
  ];

  const services: string[] = [
    "Insurance Credentialing & Enrollment",
    "Prior Authorization Verification",
    "Medical Billing and Coding",
    "Claims Submission and Follow-up",
    "Revenue Cycle Management",
    "Denial Management",
  ];

  const benefits: Benefit[] = [
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      desc: "Maximize cash flow and reduce claim denials",
    },
    {
      icon: Shield,
      title: "Improve Compliance",
      desc: "Reduce risk with expert billing practices",
    },
    {
      icon: Heart,
      title: "Patient Focus",
      desc: "Let you focus on patient care, not paperwork",
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      desc: "Grow your practice with flexible billing support",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-medium text-sm">
                30+ Years of Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Medical Billing
              <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent block">
                Excellence
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our mission is to help medical practices improve operational
              efficiency and financial performance by outsourcing their billing
              needs, so clients can focus on patient care instead of paperwork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 backdrop-blur-sm border border-amber-300/30 hover:scale-105"
              >
                Get Started Today
              </Link>

              <a
                href="tel:+18322363930"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call: 832-236-3930</span>
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlight */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Founded on Core Values
                    </h2>
                    <div className="text-blue-200">
                      Honesty • Transparency • Integrity
                    </div>
                  </div>
                </div>

                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  As a trusted partner in medical billing for over 30 years, we
                  deliver precise and efficient billing services. Our commitment
                  to honesty, transparency, and integrity ensures that your
                  practice receives the highest level of service.
                </p>

                <div className="bg-gradient-to-r from-amber-500/20 to-teal-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-amber-400 text-4xl font-bold mb-2">
                    98%
                  </div>
                  <div className="text-white font-semibold text-lg">
                    Collection Success Rate
                  </div>
                  <div className="text-blue-200 text-sm mt-2">
                    Consistently achieving industry-leading results
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-6">
                  Core Services
                </h3>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-blue-100">{service}</span>
                  </div>
                ))}

                <Link
                  href="/services"
                  className="inline-block mt-4 text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Storm Technologies?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the difference of working with a partner who truly
              understands medical billing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-500/20 to-teal-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Optimize Your Revenue Cycle Today!
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of medical practices that trust Storm Technologies
              with their billing needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 backdrop-blur-sm border border-amber-300/30 hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <a
                href="mailto:stormtech2008@gmail.com"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
