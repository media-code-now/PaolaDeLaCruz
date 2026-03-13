"use client";

import { useState } from "react";
import { Download, CheckCircle } from "lucide-react";

export default function DownloadableGuide() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle download/email capture
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="bg-brand-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Guide Preview */}
          <div>
            <div className="border border-brand-gray-800 p-12 bg-brand-gray-900">
              <div className="mb-8">
                <Download className="w-12 h-12 text-brand-gold mb-6" strokeWidth={1.5} />
                <span className="text-brand-gold text-xs font-medium uppercase tracking-[0.2em] block mb-4">
                  Free Download
                </span>
                <h3 className="font-serif text-4xl md:text-5xl font-light mb-4">
                  Las Vegas Real Estate Investment Guide
                </h3>
                <p className="text-brand-gray-400 leading-relaxed">
                  Essential insights for buying, selling, or investing in the Las Vegas market. 
                  Data-driven analysis, neighborhood profiles, and strategic frameworks.
                </p>
              </div>
              
              <ul className="space-y-3 text-sm text-brand-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>Market trends and forecasts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>Neighborhood comparison charts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>Investment strategy framework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span>First-time buyer checklist</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Email Capture Form */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Download Your Free Guide
            </h2>
            <p className="text-brand-gray-400 mb-8 leading-relaxed">
              Get immediate access to strategic insights and market intelligence. 
              No fluff, just actionable information to guide your real estate decisions.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 bg-white text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brand-gold text-brand-black font-medium hover:bg-brand-gold-light transition-colors flex items-center justify-center group"
                >
                  Download Guide
                  <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
                
                <p className="text-xs text-brand-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="border border-brand-gold p-8 text-center">
                <CheckCircle className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <p className="text-lg text-white mb-2">Check your email!</p>
                <p className="text-sm text-brand-gray-400">
                  Your guide is on its way.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
