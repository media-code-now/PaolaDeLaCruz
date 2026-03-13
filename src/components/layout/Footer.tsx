import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Home,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Work With Pay", href: "/work-with-pay" },
    { name: "Explore Homes", href: "/explore-homes" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const listingLinks = [
    { name: "All Listings", href: "/listings" },
    { name: "Summerlin", href: "/listings?location=summerlin" },
    { name: "Henderson", href: "/listings?location=henderson" },
    { name: "The Lakes", href: "/listings?location=the-lakes" },
    { name: "Seven Hills", href: "/listings?location=seven-hills" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/paytherealtor" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/PaytheRealtor" },
    { name: "Google My Business", icon: MapPin, href: "https://share.google/dnKfpIq6vktKMzU0W" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/paola-delacruz" },
  ];

  return (
    <footer className="bg-luxury-black text-white">
      {/* Main Footer Content */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1 - Logo & About */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-white group-hover:text-luxury-gold transition-colors">
                    Paola De La Cruz
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Strategic Real Estate Advisor
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Strategic Real Estate Advisor helping clients navigate relocation, 
              investment opportunities, and market positioning across Las Vegas. 
              Affiliated with Just Realty.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-luxury-gold transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-luxury-gold transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Listings */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">
              Featured Listings
            </h3>
            <ul className="space-y-3">
              {listingLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-luxury-gold transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-luxury-gold transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17025551234"
                  className="flex items-start space-x-3 text-gray-400 hover:text-luxury-gold transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm">
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <div>(702) 555-1234</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pay@justrealtylv.com"
                  className="flex items-start space-x-3 text-gray-400 hover:text-luxury-gold transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm">
                    <div className="font-semibold text-white mb-1">Email</div>
                    <div className="break-all">pay@justrealtylv.com</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-white mb-1">Office</div>
                    <div>Just Realty</div>
                    <div>Las Vegas, NV</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Elite Realty. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-luxury-gold transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Made with love */}
            <div className="text-gray-400 text-sm">
              Made with{" "}
              <span className="text-luxury-gold inline-block animate-pulse">
                ♥
              </span>{" "}
              in Las Vegas
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
