import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Shield,
  CreditCard,
  Users,
  CheckCircle,
  TrendingUp,
  RefreshCw,
  Search,
  FileCheck,
  DollarSign,
  BarChart,
  Settings,
  ClipboardList,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
};

type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export default function ServicesPage() {
  const services: Service[] = [
    {
      icon: Users,
      title: "Insurance Credentialing & Enrollment",
      description:
        "Complete provider enrollment and credentialing services with major insurance networks",
      features: [
        "Provider enrollment",
        "Credentialing management",
        "Network participation",
      ],
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: Search,
      title: "Prior Authorization Verification",
      description:
        "Streamlined prior authorization process to prevent claim delays and denials",
      features: [
        "Pre-auth verification",
        "Status tracking",
        "Documentation management",
      ],
      color: "from-teal-400 to-teal-500",
    },
    {
      icon: Shield,
      title: "Insurance Eligibility Verification",
      description:
        "Real-time insurance verification to ensure coverage before services",
      features: [
        "Real-time verification",
        "Coverage analysis",
        "Benefit confirmation",
      ],
      color: "from-green-400 to-green-500",
    },
    {
      icon: FileText,
      title: "Medical Billing and Coding",
      description:
        "Expert coding and billing services ensuring maximum reimbursement rates",
      features: [
        "ICD-10 & CPT coding",
        "Claim preparation",
        "Compliance review",
      ],
      color: "from-purple-400 to-purple-500",
    },
    {
      icon: RefreshCw,
      title: "Claims Submission and Follow-up",
      description:
        "Timely claim submission with persistent follow-up for maximum collections",
      features: [
        "Electronic submission",
        "Status monitoring",
        "Denial resolution",
      ],
      color: "from-amber-400 to-amber-500",
    },
    {
      icon: CreditCard,
      title: "Patient Billing and Collections",
      description:
        "Professional patient billing services with compassionate collection practices",
      features: ["Patient statements", "Payment plans", "Collection services"],
      color: "from-pink-400 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Revenue Cycle Management",
      description:
        "Complete revenue cycle optimization from patient registration to final payment",
      features: [
        "End-to-end management",
        "Performance analytics",
        "Process optimization",
      ],
      color: "from-indigo-400 to-indigo-500",
    },
    {
      icon: FileCheck,
      title: "Denial Management",
      description:
        "Comprehensive denial management with detailed analysis and resolution",
      features: [
        "Denial analysis",
        "Appeal preparation",
        "Root cause resolution",
      ],
      color: "from-red-400 to-red-500",
    },
    {
      icon: DollarSign,
      title: "Electronic Claims Submission",
      description:
        "Fast and accurate electronic claims processing with real-time tracking",
      features: ["EDI submission", "Real-time tracking", "Error correction"],
      color: "from-cyan-400 to-cyan-500",
    },
    {
      icon: Settings,
      title: "Code Optimization",
      description:
        "Advanced coding optimization to maximize reimbursement opportunities",
      features: [
        "Code analysis",
        "Documentation improvement",
        "Revenue enhancement",
      ],
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: BarChart,
      title: "Managed Care Contract Analysis",
      description:
        "Detailed contract analysis and negotiation support for better rates",
      features: ["Contract review", "Rate analysis", "Negotiation support"],
      color: "from-emerald-400 to-emerald-500",
    },
    {
      icon: ClipboardList,
      title: "Full Practice Management",
      description:
        "Complete practice management services including scheduling and administration",
      features: [
        "Appointment scheduling",
        "Administrative support",
        "Workflow optimization",
      ],
      color: "from-violet-400 to-violet-500",
    },
    {
      icon: BarChart,
      title: "Customized Reporting",
      description:
        "Detailed analytics and reporting tailored to your practice's specific needs",
      features: ["Custom dashboards", "Performance metrics", "Trend analysis"],
      color: "from-lime-400 to-lime-500",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      step: "1",
      title: "Assessment",
      desc: "We analyze your current billing processes and identify areas for improvement",
    },
    {
      step: "2",
      title: "Setup",
      desc: "Seamless integration with your existing systems and staff training",
    },
    {
      step: "3",
      title: "Implementation",
      desc: "Full-scale billing operations with dedicated account management",
    },
    {
      step: "4",
      title: "Optimization",
      desc: "Continuous monitoring and optimization for maximum performance",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent block">
              Services
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive medical billing solutions designed to maximize your
            revenue and minimize your administrative burden
          </p>

          <div className="bg-gradient-to-r from-amber-500/20 to-teal-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 inline-block">
            <div className="text-amber-400 text-4xl font-bold mb-2">98%</div>
            <div className="text-white font-semibold">
              Collection Success Rate
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A proven 4-step approach to optimize your revenue cycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-2xl font-bold text-white">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {process.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 hover:bg-white/15 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Storm Technologies?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "30+ Years of Experience",
                      desc: "Three decades of expertise in medical billing and revenue cycle management",
                    },
                    {
                      title: "Core Values & Ethics",
                      desc: "Honest, transparent business practices guided by our core principles",
                    },
                    {
                      title: "98% Collection Success Rate",
                      desc: "Industry-leading collection rates that maximize your revenue",
                    },
                    {
                      //something related to follow up
                      title: "Proactive Claim Follow-up",
                      desc: "Dedicated follow-up to ensure that all claim are processed and paid in a timely manner",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-blue-200">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/20 to-teal-500/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    Join over 500 medical practices that trust Storm
                    Technologies with their billing needs
                  </p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="block text-center bg-gradient-to-r from-amber-500 to-amber-400 text-white px-6 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 backdrop-blur-sm border border-amber-300/30 hover:scale-105"
                  >
                    Schedule Consultation
                  </Link>
                  <div className="text-center">
                    <a
                      href="tel:+18322363930"
                      className="text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300"
                    >
                      Call: 832-236-3930
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-500/20 to-teal-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Optimize Your Revenue Cycle Today!
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience the Storm Technologies difference with our
              comprehensive medical billing solutions
            </p>

            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 backdrop-blur-sm border border-amber-300/30 hover:scale-105"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
