import { SERVICES } from "@/app/data/services";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, CheckCircle, Mail, Phone, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
    const service = SERVICES.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="bg-white min-h-screen">
            {/* Service Hero */}
            <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-24 bg-slate-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-slate-400 hover:text-[#1a365d] transition-colors mb-12 uppercase tracking-widest text-sm font-bold group"
                    >
                        <ChevronLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className={`icon-standalone mb-8 ${service.color}`}>
                                <Icon size={64} strokeWidth={1.5} />
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a365d] mb-8 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-slate-500 leading-relaxed font-light">
                                {service.detailedContent || service.description}
                            </p>
                        </div>

                        <div className="card-aetna p-12 bg-white relative">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#1a365d] rounded-l-2xl" />
                            <h2 className="text-2xl font-bold text-[#1a365d] mb-8">Service Features</h2>
                            <ul className="space-y-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start space-x-4">
                                        <div className="icon-standalone teal mt-1">
                                            <CheckCircle size={24} />
                                        </div>
                                        <span className="text-lg text-slate-600 font-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits / Value Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#1a365d] mb-16">Why Storm Technologies for <br /> {service.title}?</h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Expertise",
                                desc: "Specialized knowledge in medical billing for over 30 years means your claims are in safe hands."
                            },
                            {
                                title: "Efficiency",
                                desc: "Our streamlined processes reduce errors and accelerate your payment cycles significantly."
                            },
                            {
                                title: "Transparency",
                                desc: "Real-time reporting and constant communication keep you informed of every step in the billing process."
                            }
                        ].map((benefit, i) => (
                            <div key={i} className="text-center">
                                <div className="text-[#0d9488] text-2xl font-bold mb-4">{benefit.title}</div>
                                <p className="text-slate-500 font-light leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service CTA */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#1a365d] rounded-[3rem] p-12 md:p-20 text-center text-white relative shadow-2xl overflow-hidden">
                        <h2 className="text-4xl font-bold mb-8">Ready to Optimize Your Practice?</h2>
                        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Let Storm Technologies handle the complexities of {service.title.toLowerCase()} while you focus on what matters most: your patients.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/contact#contact-form"
                                className="bg-[#0d9488] text-white px-12 py-5 rounded-xl font-bold shadow-xl hover:bg-[#0f766e] transition-all duration-300"
                            >
                                Get Started Today
                            </Link>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-white/50 text-sm uppercase tracking-widest font-bold">Call Us</div>
                                    <div className="text-white font-bold text-lg">832-236-3930</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
