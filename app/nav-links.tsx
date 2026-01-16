"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { name: string; url: string };

export default function NavLinks({
  items,
  variant = "desktop",
}: {
  items: Item[];
  variant?: "desktop" | "mobile";
}) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const active = pathname === item.url;

        if (variant === "mobile") {
          return (
            <Link
              key={item.name}
              href={item.url}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                active
                  ? "bg-white/20 text-white"
                  : "text-blue-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <div className="text-xs font-medium">{item.name}</div>
            </Link>
          );
        }

        return (
          <Link
            key={item.name}
            href={item.url}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-white/10 ${
              active
                ? "bg-white/20 text-white shadow-lg"
                : "text-blue-100 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}
