"use client";

import { useState } from "react";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

interface ContactAgentProps {
  property: {
    title: string;
    address: string;
    price: number;
  };
}

export default function ContactAgent({ property }: ContactAgentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${property.address}`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to your API/email service
    console.log("Contact form submitted:", formData);
    alert("Thank you! I'll be in touch shortly.");
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
      {/* Agent Info */}
      <div className="text-center mb-8 pb-8 border-b border-gray-200">
        <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold to-luxury-gold/70 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-luxury-black mb-2">
          Contact Agent
        </h3>
        <p className="text-gray-600 mb-4">Elite Luxury Specialist</p>
        <div className="space-y-2">
          <a
            href="tel:+13105551234"
            className="flex items-center justify-center space-x-2 text-gray-700 hover:text-luxury-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">(310) 555-1234</span>
          </a>
          <a
            href="mailto:agent@eliterealty.com"
            className="flex items-center justify-center space-x-2 text-gray-700 hover:text-luxury-gold transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="font-medium">agent@eliterealty.com</span>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
              placeholder="(310) 555-1234"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all resize-none"
              placeholder="I'm interested in this property..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-4 luxury-gradient text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl group"
        >
          <span>Send Message</span>
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </div>
  );
}
