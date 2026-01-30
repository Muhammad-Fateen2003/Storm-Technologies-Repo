import Link from "next/link";
import { SERVICES, PROCESS_STEPS } from "@/app/data/services";
import { ChevronRight, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header / Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20 hero-brand-strip overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Our
            <span className="text-[#0d9488] block mt-2">
              Services
            </span>
          </h1>

          <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive medical billing and revenue cycle management solutions
            designed to maximize your reimbursement and focus on patient care.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-[2.5rem] blur opacity-30" />

              <div className="relative flex items-center justify-around p-8 border border-white/20 rounded-[2rem] bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Fixed Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/[0.02] to-white/10 pointer-events-none" />

                <div className="text-center relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">30+</div>
                  <div className="text-white/40 font-bold text-[10px] tracking-[0.3em] uppercase">Years Exp.</div>
                </div>

                <div className="w-px h-16 bg-white/10 flex-shrink-0" />

                <div className="text-center relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-[#0d9488] mb-2">98%</div>
                  <div className="text-white/40 font-bold text-[10px] tracking-[0.3em] uppercase">Success</div>
                </div>

                <div className="w-px h-16 bg-white/10 flex-shrink-0" />

                <div className="text-center relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">4-6%</div>
                  <div className="text-white/40 font-bold text-[10px] tracking-[0.3em] uppercase">Comm. Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="card-aetna card-aetna-interactive p-10"
              >
                <div className={`icon-standalone mb-8 ${service.color}`}>
                  <service.icon size={44} strokeWidth={1.5} />
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="link-arrow mb-4 inline-flex items-center group"
                >
                  <span className="text-xl font-bold group-hover:text-[#0d9488] transition-colors">
                    {service.title}
                  </span>
                  <ChevronRight size={20} className="ml-2 mt-1" />
                </Link>

                <p className="text-slate-600 leading-relaxed font-light mt-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light">
              A collaborative 4-step approach to optimize your entire revenue cycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="card-aetna p-10 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 text-slate-100 text-5xl font-black italic select-none">
                    0{process.step}
                  </div>
                  <div className="icon-standalone amber mb-8">
                    <CheckCircle size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-4 relative z-10">
                    {process.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light text-sm relative z-10">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a365d] mb-10 leading-tight">
                Partner with the <br />
                <span className="text-[#0d9488]">Medical Billing Experts</span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "30+ Years of Excellence",
                    desc: "Three decades of specialized expertise in medical billing and revenue cycle management since 1993.",
                  },
                  {
                    title: "Rooted in Ethics",
                    desc: "Our business is built on transparency and integrity, ensuring you always know the status of your claims.",
                  },
                  {
                    title: "Consistent 98% Collection Rate",
                    desc: "Industry-leading results that directly impact your practice's bottom line and cash flow.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-5"
                  >
                    <div className="icon-standalone teal mt-1">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-[#1a365d] font-bold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-12 text-center shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                Ready for Excellence?
              </h3>
              <p className="text-slate-500 leading-relaxed mb-10 font-light">
                Join the many medical practices that have optimized their revenue cycle and maximized their collections with Storm Technologies.
              </p>

              <div className="space-y-5">
                <Link
                  href="/contact#contact-form"
                  className="block bg-[#1a365d] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#2c5282] transition-all duration-300"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="/contact#contact-info"
                  className="block w-full text-center text-[#0d9488] font-bold hover:underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a365d] to-[#042f2e] rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden">
            <h2 className="text-4xl font-bold mb-6">
              Optimize Your Revenue Cycle Today
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
              Experience the Storm Technologies difference with our
              comprehensive medical billing solutions.
            </p>

            <Link
              href="/contact#contact-form"
              className="inline-block bg-[#0d9488] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#0f766e] transition-all duration-300"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
