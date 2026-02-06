"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Item = {
  name: string;
  url: string;
  children?: { name: string; url: string }[];
};

export default function NavLinks({
  items,
  variant = "desktop",
}: {
  items: Item[];
  variant?: "desktop" | "mobile";
}) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <div className={variant === "mobile" ? "flex flex-col space-y-1" : "flex items-center"}>
      {items.map((item) => {
        const active = pathname === item.url || (item.children?.some(child => pathname === child.url));
        const isExpanded = mobileExpanded === item.name;

        if (variant === "mobile") {
          return (
            <div key={item.name} className="flex flex-col">
              <div className="flex items-center">
                <Link
                  href={item.url}
                  className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-200 ${active
                    ? "bg-slate-50 text-[#0d9488]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#1a365d]"
                    }`}
                >
                  <span className="text-sm font-bold uppercase tracking-widest">{item.name}</span>
                </Link>
                {item.children && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileExpanded(isExpanded ? null : item.name);
                    }}
                    className="p-4 text-slate-400 hover:text-[#0d9488] transition-colors"
                  >
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>

              {item.children && (
                <div className={`overflow-hidden transition-all duration-300 h-auto ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
                  <div className="pl-10 pr-6 pb-4 grid gap-4 mt-2 border-l-2 border-slate-50 ml-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.url}
                        href={child.url}
                        className={`text-sm font-semibold tracking-wider transition-colors ${pathname === child.url ? "text-[#0d9488]" : "text-slate-500 hover:text-[#1a365d]"}`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(item.name)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={item.url}
              className={`px-6 py-2 text-xs font-semibold transition-all duration-300 flex items-center justify-center group/link ${active
                ? "text-[#0d9488]"
                : "text-[#1a365d]/70 hover:text-[#0d9488]"
                }`}
            >
              <div className="relative flex items-center space-x-1.5 py-1 uppercase tracking-[0.15em]">
                <span className="mr-[-0.15em]">{item.name}</span>
                {item.children && <ChevronDown size={11} className={`transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""}`} />}

                {/* Refined Underline Indicator - Spans content (text + icon) */}
                <div
                  className={`absolute -bottom-1 -left-2 -right-2 h-0.5 bg-[#0d9488] rounded-full transition-all duration-300 origin-center ${active
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0 group-hover/link:opacity-40 group-hover/link:scale-x-75"
                    }`}
                />
              </div>
            </Link>

            {item.children && (
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-100 rounded-xl shadow-2xl p-4 mt-2 transition-all duration-200 origin-top ${openDropdown === item.name ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                <div className="grid gap-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.url}
                      href={child.url}
                      className="px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-lg transition-colors font-medium"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
