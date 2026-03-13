"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-brand-gray-50 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-black mb-6">
            Let's discuss your real estate goals.
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Whether you're ready to move forward or just exploring options, 
            I'm here to provide strategic guidance tailored to your situation.
          </p>
        </div>

        {/* Contact Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brand-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-gray-700 mb-2">
                How can I help? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your real estate goals, timeline, or any questions you have..."
                className="w-full px-4 py-3 border border-brand-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
            
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-brand-black text-white font-medium hover:bg-brand-gray-800 transition-colors group"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-brand-gray-500 mt-6">
                Typical response time: within 24 hours
              </p>
            </div>
          </form>
        ) : (
          <div className="bg-white border-2 border-brand-gold p-12 text-center">
            <CheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-6" />
            <h3 className="font-serif text-3xl text-brand-black mb-4">
              Message Received
            </h3>
            <p className="text-lg text-brand-gray-600 mb-2">
              Thank you for reaching out. I'll review your message and respond within 24 hours.
            </p>
            <p className="text-sm text-brand-gray-500">
              Check your email for a confirmation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
