import Link from "next/link";
import { SERVICES } from "@/app/data/services";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

export default function ServicePageTemplate({ slug }: { slug: string }) {
    const service = SERVICES.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20 hero-brand-strip overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors group"
                    >
                        <ChevronLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a365d] mb-8">Service Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                {service.detailedContent}
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#1a365d] mb-6">Key Benefits</h3>
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-start space-x-4">
                                        <div className="icon-standalone teal mt-1">
                                            <CheckCircle size={20} />
                                        </div>
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card-aetna p-10 bg-slate-50 sticky top-32">
                            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Ready to get started?</h3>
                            <p className="text-slate-500 mb-8 font-light">
                                Contact our experts today for a free assessment and find out how we can optimize your {service.title.toLowerCase()} process.
                            </p>

                            <Link
                                href="/contact#contact-form"
                                className="block w-full bg-[#1a365d] text-white text-center py-4 rounded-xl font-bold shadow-lg hover:bg-[#2c5282] transition-all mb-4"
                            >
                                Request Free Assessment
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
            </section>

            {/* Other Services Bottom CTA */}
            <section className="bg-slate-50 py-20 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Explore Our Other Solutions</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {SERVICES.filter(s => s.slug !== slug).slice(0, 4).map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="bg-white border border-slate-200 px-6 py-3 rounded-full text-[#1a365d] font-bold hover:border-[#0d9488] hover:text-[#0d9488] transition-all shadow-sm"
                            >
                                {s.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
