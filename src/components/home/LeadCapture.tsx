"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock } from "lucide-react";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Lead captured:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-black mb-6 leading-tight">
            Let&apos;s Find Your Dream Home
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Get in touch today and let&apos;s discuss how I can help you achieve your
            real estate goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-luxury-black mb-2">
                Send Me a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and I&apos;ll get back to you within 24 hours
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-luxury-black mb-3">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    Your message has been sent successfully. I&apos;ll be in touch soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all text-gray-800 placeholder-gray-400"
                        placeholder="(310) 555-1234"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all resize-none text-gray-800 placeholder-gray-400"
                        placeholder="Tell me about your real estate needs..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-3 py-5 luxury-gradient text-white text-lg font-bold rounded-xl hover:opacity-90 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our Terms of Service and
                    Privacy Policy
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Contact Information & Map */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <a
                href="tel:+17025551234"
                className="flex items-start space-x-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1 uppercase tracking-wide font-semibold">
                    Call Me
                  </div>
                  <div className="text-2xl font-bold text-luxury-black group-hover:text-luxury-gold transition-colors">
                    (702) 555-1234
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Available 7 days a week
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:pay@justrealtylv.com"
                className="flex items-start space-x-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1 uppercase tracking-wide font-semibold">
                    Email Me
                  </div>
                  <div className="text-xl font-bold text-luxury-black group-hover:text-luxury-gold transition-colors break-all">
                    pay@justrealtylv.com
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Response within 24 hours
                  </div>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-start space-x-5 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1 uppercase tracking-wide font-semibold">
                    Office Address
                  </div>
                  <div className="text-lg font-bold text-luxury-black">
                    Just Realty
                  </div>
                  <div className="text-lg font-bold text-luxury-black">
                    Las Vegas, NV
                  </div>
                  <div className="text-sm text-gray-500 mt-2 flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Fri: 9AM-6PM | Sat-Sun: 10AM-4PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-[400px] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.757145282479!2d-115.22517990000001!3d36.1724639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c158ed597031%3A0x5fe999ddb7a43f47!2sPaola%20De%20La%20Cruz%20REALTOR%20at%20Toro%20Realty%20Las%20Vegas!5e0!3m2!1sen!2sus!4v1773439118901!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paola De La Cruz REALTOR at Toro Realty Las Vegas Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
