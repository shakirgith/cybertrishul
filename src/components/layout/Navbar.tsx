"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-10">
        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group relative block py-8 text-[15px] font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-600"
                style={{
                  color: active ? "#2563eb" : "#1e293b",
                }}
              >
                {item.title}

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}