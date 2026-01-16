// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Shield, TrendingUp, Users } from "lucide-react";
import NavLinks from "./nav-links";

// If you want per-page titles/descriptions, you can adjust this.
export const metadata: Metadata = {
  title: "Storm Technologies — Medical Billing Excellence",
  description:
    "Trusted partner in medical billing for over 30 years, delivering precise and efficient billing services with integrity and transparency.",
};

const navigationItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen relative overflow-x-hidden">
        {/* Background with gradients */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-teal-800 to-blue-900" />
        <div className="fixed inset-0 bg-gradient-to-tr from-teal-600/20 via-transparent to-amber-500/20" />

        {/* Floating orbs for depth */}
        <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl opacity-60" />
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-teal-500/20 rounded-full blur-3xl opacity-50" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-teal-600/20 rounded-full blur-3xl opacity-40" />

        {/* Main content */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                    {/* <TrendingUp className="w-6 h-6 text-white" /> */}
                    {/* logo image */}
                    <Image
                      src="/logo.png"
                      alt="Storm Technologies Logo"
                      width={1000}
                      height={1000}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">
                      Storm Technologies
                    </div>
                    <div className="text-xs text-blue-200">
                      Medical Billing Excellence
                    </div>
                  </div>
                </Link>

                {/* Desktop nav (client component to highlight active route) */}
                <div className="hidden md:flex space-x-1">
                  <NavLinks items={navigationItems} variant="desktop" />
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="tel:+18322363930"
                    className="hidden sm:flex items-center space-x-2 text-blue-100 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">832-236-3930</span>
                  </a>
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-amber-500 to-amber-400 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-amber-300/30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-4">
              <div className="flex justify-around">
                <NavLinks items={navigationItems} variant="mobile" />
              </div>
            </div>
          </div>

          {/* Page content */}
          <div className="pt-16 pb-20 md:pb-8">{children}</div>

          {/* Footer */}
          <footer className="relative z-10 backdrop-blur-xl bg-white/5 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">
                        Storm Technologies, Inc.
                      </div>
                      <div className="text-sm text-blue-200">
                        Medical Billing Excellence
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Trusted partner in medical billing for over 30 years,
                    delivering precise and efficient billing services with a
                    commitment to integrity and transparency.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-blue-200">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">
                        502 Bridge Crest Blvd., Houston, TX 77082
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-200">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+1 832-236-3930</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-200">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">stormtech2008@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Our Promise</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-blue-200">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">
                        98% Collection Success Rate
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-200">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">30+ Years of Experience</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="text-amber-400 font-semibold text-sm">
                      “Let&apos;s Optimize Your Revenue Cycle Today!”
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 mt-8 pt-8">
                <div className="text-center text-blue-200 text-sm">
                  © 2024 Storm Technologies, Inc. All rights reserved. | Medical
                  Billing & Revenue Cycle Management
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
