"use client";

import { Award, Home, Calendar, Star, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AgentProfile() {
  const stats = [
    {
      icon: Calendar,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: Home,
      value: "500+",
      label: "Homes Sold",
    },
    {
      icon: Star,
      value: "$2.5B+",
      label: "Total Sales Volume",
    },
  ];

  const awards = [
    "Top 1% Real Estate Agent in Nevada",
    "Platinum Real Estate Award 2025",
    "Best of Las Vegas 2024",
    "Million Dollar Guild Member",
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-luxury">
        {/* Agent Portrait */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <div className="relative group">
            {/* Portrait Container */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/img/profile/profile.jpg"
                alt="Paola 'Pay' De La Cruz - Las Vegas Luxury Real Estate Agent"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-luxury-gold/30 group-hover:scale-110 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Headline & Title */}
        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <h1 className="text-5xl lg:text-6xl font-bold text-luxury-black mb-4 font-serif">
            Paola De La Cruz
          </h1>
          <p className="text-xl lg:text-2xl text-luxury-gold font-medium mb-2">
            Strategic Real Estate Advisor
          </p>
          <p className="text-lg text-gray-600">
            Las Vegas & Surrounding Areas
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-luxury-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Biography */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-luxury-black mb-6 text-center font-serif">
              About Paola
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p className="text-center text-lg">
                With over 15 years of experience in luxury real estate, I specialize
                in helping discerning clients find their perfect homes in the most
                prestigious neighborhoods of Las Vegas.
              </p>
              <p className="text-center">
                My approach is built on trust, integrity, and an unwavering commitment
                to excellence. I believe that buying or selling a home is one of life&apos;s
                most significant decisions, and I&apos;m dedicated to making the process
                seamless, stress-free, and successful for every client.
              </p>
              <p className="text-center">
                Having closed over $2.5 billion in luxury property transactions, I bring
                deep market knowledge, sophisticated marketing strategies, and a vast
                network of high-net-worth buyers and sellers. Whether you&apos;re looking for
                a contemporary architectural masterpiece, a classic estate, or a stunning
                oceanfront property, I have the expertise and resources to exceed your
                expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="bg-gradient-to-br from-luxury-gold/5 to-luxury-gold/10 rounded-2xl p-10 border border-luxury-gold/20">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Award className="w-8 h-8 text-luxury-gold" />
              <h2 className="text-3xl font-bold text-luxury-black font-serif">
                Awards & Recognition
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="tel:+17025551234"
              className="flex items-center space-x-3 text-gray-700 hover:text-luxury-gold transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/10 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Call Direct
                </div>
                <div className="text-lg font-bold">(702) 555-1234</div>
              </div>
            </a>
            <a
              href="mailto:pay@justrealtylv.com"
              className="flex items-center space-x-3 text-gray-700 hover:text-luxury-gold transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/10 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  Email
                </div>
                <div className="text-lg font-bold">pay@justrealtylv.com</div>
              </div>
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Link
            href="/contact"
            className="group px-10 py-5 luxury-gradient text-white text-lg font-bold rounded-full hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-3"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/listings"
            className="group px-10 py-5 bg-white text-luxury-black text-lg font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-luxury-gold flex items-center space-x-3"
          >
            <span>View Properties</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
