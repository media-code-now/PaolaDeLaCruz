"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Calendar } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
    <section className="section-padding bg-luxury-gray-light">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 px-5 py-2.5 bg-luxury-gold/10 rounded-full">
            <Mail className="w-4 h-4 text-luxury-gold" />
            <span className="text-luxury-gold text-sm font-bold tracking-wide uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-black mb-6 leading-tight">
            Let's Find Your Dream Home
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Reach out today to start your luxury real estate journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-luxury-black mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a
                  href="tel:+1234567890"
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-luxury-black group-hover:text-luxury-gold transition-colors mb-1">
                      Call Direct
                    </div>
                    <div className="text-gray-600 text-lg">(123) 456-7890</div>
                    <div className="text-sm text-gray-500">Available 7 days a week</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@eliterealty.com"
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-luxury-black group-hover:text-luxury-gold transition-colors mb-1">
                      Email Me
                    </div>
                    <div className="text-gray-600">contact@eliterealty.com</div>
                    <div className="text-sm text-gray-500">24-hour response time</div>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-luxury-black mb-1">
                      Office Location
                    </div>
                    <div className="text-gray-600">
                      Just Realty<br />
                      Las Vegas, NV
                    </div>
                    <div className="text-sm text-gray-500">By appointment only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="w-full h-80">
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

          {/* Lead Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-luxury-black mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all text-gray-800"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all text-gray-800"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all text-gray-800"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all resize-none text-gray-800"
                    placeholder="Tell me about your real estate goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 luxury-gradient text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
