// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Users, Linkedin } from "lucide-react";
import NavLinks from "./nav-links";

// If you want per-page titles/descriptions, you can adjust this.
export const metadata: Metadata = {
  title: "Storm Technologies — Medical Billing Excellence",
  description:
    "Trusted partner in medical billing for over 30 years, delivering precise and efficient billing services with integrity and transparency.",
  icons: {
    icon: '/favicon-logo.png',
    apple: '/favicon-logo.png',
  },
};

const navigationItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  {
    name: "Services",
    url: "/services",
    children: [
      { name: "Medical Billing & Coding", url: "/services/medical-billing" },
      { name: "Revenue Cycle Management", url: "/services/revenue-cycle" },
      { name: "Credentialing & Enrollment", url: "/services/credentialing" },
      { name: "Prior Authorization", url: "/services/prior-authorization" },
      { name: "View All Services", url: "/services" },
    ]
  },
  { name: "Contact", url: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {/* Professional Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="relative flex justify-between items-center h-24">
              {/* Logo - Premium Presentation */}
              <Link href="/" className="flex items-center space-x-4 group relative z-20">
                <div className="w-13 h-13 relative flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
                  <Image
                    src="/logo.png"
                    alt="Storm Technologies Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="border-l border-slate-50 pl-4 py-1">
                  <div className="text-xl md:text-2xl font-bold text-[#1a365d] tracking-tight leading-none mb-1">
                    Storm Technologies
                  </div>
                  <div className="text-[10px] text-[#0d9488] font-bold uppercase tracking-[0.2em]">
                    Medical Billing Excellence
                  </div>
                </div>
              </Link>

              {/* Centered Desktop Nav */}
              <div className="hidden md:absolute md:inset-0 md:flex md:items-center md:justify-center pointer-events-none">
                <div className="flex items-center pointer-events-auto">
                  <NavLinks items={navigationItems} variant="desktop" />
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center relative z-20">
                <div className="h-10 w-px bg-slate-50 mx-4" />

                <div className="flex items-center space-x-8 ml-4">
                  <a
                    href="tel:832-236-3930"
                    className="flex flex-col items-end group"
                  >
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 group-hover:text-[#1a365d] transition-colors">Call Support</span>
                    <span className="text-[#1a365d] font-bold text-lg group-hover:text-[#0d9488] transition-colors">832-236-3930</span>
                  </a>

                  <Link
                    href="/contact#contact-form"
                    className="bg-[#1a365d] text-white px-7 py-3 rounded-xl font-bold shadow-xl shadow-blue-900/10 hover:bg-[#2c5282] transition-all duration-300 text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
          <div className="bg-[#1a365d] rounded-2xl border border-white/10 shadow-2xl p-4 backdrop-blur-lg">
            <div className="flex justify-around">
              <NavLinks items={navigationItems} variant="mobile" />
            </div>
          </div>
        </div>

        {/* Page content with proper spacing for fixed header */}
        <div className="pt-24 min-h-screen">{children}</div>

        {/* Professional Footer */}
        <footer className="bg-white border-t border-slate-100 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              {/* Brand Column */}
              <div className="col-span-1 md:col-span-1">
                <Link href="/" className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/logo.png"
                      alt="Storm Technologies Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-[#1a365d]">
                    Storm Technologies
                  </span>
                </Link>
                <p className="text-slate-500 font-light leading-relaxed mb-8">
                  Partnering with medical practices across the nation to deliver
                  operational excellence and maximum reimbursement since 1993.
                </p>
                <div className="flex space-x-4">
                  {[
                    { Icon: Phone, href: "tel:832-236-3930" },
                    { Icon: Mail, href: "mailto:stormtech2008@gmail.com" },
                    { Icon: MapPin, href: "https://maps.google.com/?q=502+Bridge+Crest+Blvd,+Houston,+TX+77082" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/company/storm-technologies-inc/" }
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : "_self"}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0d9488] hover:border-[#0d9488] transition-all cursor-pointer"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-[#1a365d] font-bold text-sm uppercase tracking-widest mb-8">Company</h3>
                <ul className="space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.url} className="text-slate-500 hover:text-[#1a365d] transition-colors font-light">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-[#1a365d] font-bold text-sm uppercase tracking-widest mb-8">Services</h3>
                <ul className="space-y-4">
                  {[
                    { name: "Medical Billing", slug: "medical-billing" },
                    { name: "Revenue Cycle", slug: "revenue-cycle" },
                    { name: "Credentialing", slug: "credentialing" },
                    { name: "Denial Management", slug: "denial-management" }
                  ].map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-slate-500 hover:text-[#1a365d] transition-colors font-light">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/services" className="text-[#0d9488] font-bold text-xs uppercase tracking-widest hover:text-[#0f766e] transition-colors">
                      View All Services →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h3 className="text-[#1a365d] font-bold text-sm uppercase tracking-widest mb-8">Contact</h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <a href="tel:832-236-3930" className="flex items-center space-x-4 group">
                    <div className="icon-standalone teal group-hover:teal transition-colors">
                      <Phone size={18} />
                    </div>
                    <span className="text-slate-500 hover:text-[#1a365d] transition-colors font-light">
                      832-236-3930
                    </span>
                  </a>

                  {/* Email */}
                  <a href="mailto:stormtech2008@gmail.com" className="flex items-center space-x-4 group">
                    <div className="icon-standalone teal group-hover:teal transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-slate-500 hover:text-[#1a365d] transition-colors font-light">
                      stormtech2008@gmail.com
                    </span>
                  </a>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="icon-standalone teal mt-1">
                      <MapPin size={18} />
                    </div>
                    <span className="text-slate-500 font-light text-sm">
                      502 Bridge Crest Blvd.<br />Houston, TX 77082
                    </span>
                  </div>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/storm-technologies-inc/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                    <div className="icon-standalone teal group-hover:navy transition-colors">
                      <Linkedin size={18} />
                    </div>
                    <span className="text-slate-500 hover:text-[#1a365d] transition-colors font-light">
                      LinkedIn Page
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal / Bottom Bar */}
          <div className="bg-slate-50 py-10 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-medium uppercase tracking-widest">
                <span>© 2026 Storm Technologies, Inc.</span>
                <div className="flex space-x-8 mt-4 md:mt-0">
                  <span className="flex items-center"><Shield size={14} className="mr-2 text-[#0d9488]" /> HIPAA Compliant</span>
                  <span>Privacy Policy</span>
                  <span>Terms of Service</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
