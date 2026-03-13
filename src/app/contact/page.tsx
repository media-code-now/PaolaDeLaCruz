"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Calendar, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/70" />
        
        <div className="container-luxury relative z-10 text-white text-center">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
            <span className="text-luxury-gold-light text-sm font-semibold">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Contact Me
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let&apos;s discuss your real estate goals and find your perfect property
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-luxury-gray-light">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-luxury-black mb-6">
                  Let&apos;s Connect
                </h2>
                
                <div className="space-y-6">
                  <a
                    href="tel:+17025551234"
                    className="flex items-start space-x-4 group hover:text-luxury-gold transition-colors"
                  >
                    <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-luxury-black group-hover:text-luxury-gold mb-1">
                        Call Me
                      </div>
                      <div className="text-gray-600">(702) 555-1234</div>
                      <div className="text-sm text-gray-500">Mon-Sun, 8am-8pm</div>
                    </div>
                  </a>

                  <a
                    href="mailto:pay@justrealtylv.com"
                    className="flex items-start space-x-4 group hover:text-luxury-gold transition-colors"
                  >
                    <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-luxury-black group-hover:text-luxury-gold mb-1">
                        Email Me
                      </div>
                      <div className="text-gray-600">pay@justrealtylv.com</div>
                      <div className="text-sm text-gray-500">24/7 Response</div>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-luxury-black mb-1">
                        Visit Office
                      </div>
                      <div className="text-gray-600">
                        Just Realty<br />
                        Las Vegas, NV
                      </div>
                      <div className="text-sm text-gray-500">By Appointment</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-luxury-black text-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="#schedule"
                    className="flex items-center space-x-3 py-3 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <Calendar className="w-5 h-5 text-luxury-gold" />
                    <span className="group-hover:text-luxury-gold">Schedule a Viewing</span>
                  </a>
                  <a
                    href="#valuation"
                    className="flex items-center space-x-3 py-3 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <MessageSquare className="w-5 h-5 text-luxury-gold" />
                    <span className="group-hover:text-luxury-gold">Get Property Valuation</span>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-luxury-black mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday - Sunday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                <div className="mb-8">
                  <h2 className="text-3xl font-serif font-bold text-luxury-black mb-3">
                    Send a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="viewing">Schedule a Viewing</option>
                      <option value="valuation">Property Valuation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all resize-none"
                      placeholder="Tell me about your real estate needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-8 py-4 luxury-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="relative bg-gray-100">
        <div className="w-full h-[450px] md:h-[500px] lg:h-[600px]">
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
      </section>
    </div>
  );
}
