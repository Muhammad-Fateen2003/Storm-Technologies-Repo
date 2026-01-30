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

  return (
    <>
      {items.map((item) => {
        const active = pathname === item.url || (item.children?.some(child => pathname === child.url));

        if (variant === "mobile") {
          return (
            <div key={item.name} className="flex flex-col items-center">
              <Link
                href={item.url}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors duration-200 ${active
                  ? "bg-[#1a365d] text-white"
                  : "text-gray-300 hover:bg-white/10"
                  }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-tighter">{item.name}</div>
              </Link>
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
              className={`px-10 py-2 text-xs font-semibold transition-all duration-300 flex items-center justify-center group/link ${active
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
              <div className={`absolute top-full left-0 w-64 bg-white border border-slate-100 rounded-xl shadow-2xl p-4 mt-2 transition-all duration-200 origin-top ${openDropdown === item.name ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
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
    </>
  );
}
