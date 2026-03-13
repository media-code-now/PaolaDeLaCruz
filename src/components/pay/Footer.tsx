import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-serif font-light mb-4 tracking-wide">
              <span className="text-white">Paola</span>
              <span className="text-brand-gold ml-2">De La Cruz</span>
            </div>
            <p className="text-brand-gray-400 text-sm leading-relaxed max-w-md">
              Strategic Real Estate Advisor specializing in relocation, investment, and market positioning. 
              Serving discerning clients with intelligent guidance and premium service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-brand-gold">
              Navigate
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/work-with-pay" className="text-brand-gray-400 hover:text-white transition-colors text-sm">
                  Work With Pay
                </Link>
              </li>
              <li>
                <Link href="/explore-homes" className="text-brand-gray-400 hover:text-white transition-colors text-sm">
                  Explore Homes
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-brand-gray-400 hover:text-white transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-brand-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-brand-gold">
              Connect
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/about" className="text-brand-gray-400 hover:text-white transition-colors text-sm">
                  About Pay
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-gray-400 hover:text-white transition-colors text-sm">
                  Get In Touch
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray-400 hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray-400 hover:text-brand-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:pay@example.com" className="text-brand-gray-400 hover:text-brand-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brand-gray-400 text-sm">
              © {new Date().getFullYear()} Paola De La Cruz. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-brand-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-brand-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
