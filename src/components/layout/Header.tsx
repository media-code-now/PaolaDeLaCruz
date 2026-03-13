"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Home, Briefcase, Building2, BookOpen, User, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navigation = [
    { 
      name: "Work With Pay", 
      href: "/work-with-pay",
      hasDropdown: false
    },
    { 
      name: "Explore Homes", 
      href: "/explore-homes",
      hasDropdown: true,
      dropdown: [
        { name: "All Listings", href: "/listings" },
        { name: "Neighborhoods", href: "/neighborhoods" },
      ]
    },
    { 
      name: "Resources", 
      href: "/resources",
      hasDropdown: true,
      dropdown: [
        { name: "Guides & Tools", href: "/resources" },
        { name: "Blog", href: "/blog" },
      ]
    },
    { 
      name: "About", 
      href: "/about",
      hasDropdown: false
    },
    { 
      name: "Contact", 
      href: "/contact",
      hasDropdown: false
    },
  ];

  const mobileNavigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Homes", href: "/explore-homes", icon: Building2 },
    { name: "Work", href: "/work-with-pay", icon: Briefcase },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "About", href: "/about", icon: User },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Floating Navbar */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 pt-6 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Floating Navbar Container */}
          <nav className="bg-luxury-black/95 backdrop-blur-md rounded-full shadow-2xl border border-white/10">
            <div className="flex items-center justify-between h-20 px-6 md:px-8 lg:px-12">
              
              {/* Zone 1 - Logo (Left) */}
              <Link 
                href="/" 
                className="flex items-center flex-shrink-0 group"
              >
                <div className="flex flex-col">
                  <div className="text-base sm:text-lg md:text-xl font-avenir font-bold tracking-tight">
                    <span className="text-white">PAOLA </span>
                    <span className="text-luxury-gold">&quot;PAY&quot;</span>
                    <span className="text-white hidden sm:inline"> DE LA CRUZ</span>
                  </div>
                </div>
              </Link>

              {/* Zone 2 - Navigation (Center) */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                {navigation.map((item) => (
                  <div 
                    key={item.name}
                    className="relative group/dropdown"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1.5 px-4 xl:px-5 py-2.5 text-white hover:text-luxury-gold transition-all duration-300 uppercase tracking-wider text-xs xl:text-sm font-medium group"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-3.5 h-3.5 text-luxury-gold/70 group-hover:text-luxury-gold transition-all" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && item.dropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-0 pt-2 w-56 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-luxury-black backdrop-blur-xl rounded-2xl shadow-2xl border border-luxury-gold/20 overflow-hidden">
                          <div className="py-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-6 py-3 text-white hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-150 text-sm tracking-wide font-medium"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Zone 3 - CTA Button (Right) */}
              <Link
                href="/contact"
                className="hidden lg:flex items-center px-6 xl:px-8 py-3 luxury-gradient text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-xs xl:text-sm whitespace-nowrap"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-luxury-black/95 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center">
            <div className="text-sm font-avenir font-bold tracking-tight">
              <span className="text-white">PAOLA </span>
              <span className="text-luxury-gold">&quot;PAY&quot;</span>
              <span className="text-white"> DE LA CRUZ</span>
            </div>
          </Link>
          
          <Link
            href="/contact"
            className="flex items-center px-4 py-2 luxury-gradient text-white rounded-full font-semibold text-xs uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            Contact
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Navigation - App Style */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe">
        {/* Backdrop with blur */}
        <div className="absolute inset-0 bg-luxury-black/95 backdrop-blur-xl border-t border-white/10"></div>
        
        {/* Navigation Items */}
        <div className="relative px-4 pt-2 pb-4">
          <div className="flex items-center justify-around">
            {mobileNavigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center space-y-1 group relative"
                >
                  {/* Active Indicator */}
                  {active && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-luxury-gold rounded-full"></div>
                  )}
                  
                  {/* Icon Container */}
                  <div className={`
                    relative p-2.5 rounded-2xl transition-all duration-300
                    ${active 
                      ? 'bg-luxury-gold shadow-lg shadow-luxury-gold/30' 
                      : 'bg-white/5 group-hover:bg-white/10'
                    }
                  `}>
                    <Icon className={`
                      w-5 h-5 transition-colors duration-300
                      ${active ? 'text-luxury-black' : 'text-white group-hover:text-luxury-gold'}
                    `} />
                  </div>
                  
                  {/* Label */}
                  <span className={`
                    text-[10px] font-medium uppercase tracking-wider transition-colors duration-300
                    ${active ? 'text-luxury-gold' : 'text-white/70 group-hover:text-white'}
                  `}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Padding Spacer */}
      <div className="lg:hidden h-20"></div>
    </>
  );
}
