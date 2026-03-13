"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Search, Heart, User, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {
  const [savedCount] = useState(3); // Mock saved listings count
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      icon: Home,
      href: "/",
      badge: null,
    },
    {
      name: "Search",
      icon: Search,
      href: "/listings",
      badge: null,
    },
    {
      name: "Saved",
      icon: Heart,
      href: "/saved",
      badge: savedCount > 0 ? savedCount : null,
    },
    {
      name: "Profile",
      icon: User,
      href: "/about",
      badge: null,
    },
    {
      name: "More",
      icon: Menu,
      href: "/contact",
      badge: null,
    },
  ];

  return (
    <>
      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-20 md:hidden" />

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden shadow-2xl">
        <div className="grid grid-cols-5 h-20">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center space-y-1 transition-all relative group ${
                  isActive
                    ? "text-luxury-gold"
                    : "text-gray-600 hover:text-luxury-gold"
                }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 luxury-gradient rounded-b-full" />
                )}

                {/* Icon with Badge */}
                <div className="relative">
                  <Icon
                    className={`w-6 h-6 transition-transform ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  {item.badge !== null && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-xs font-medium ${
                    isActive ? "font-bold" : "font-normal"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
