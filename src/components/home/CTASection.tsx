import Link from "next/link";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative section-padding bg-luxury-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/90" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-block mb-8 px-6 py-3 glass-effect rounded-full">
              <span className="text-luxury-gold-light text-sm font-bold tracking-wide uppercase">
                Let&apos;s Talk Strategy
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-8 leading-tight">
              Ready to Make Your
              <span className="block text-gradient mt-3">Strategic Move?</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re relocating, investing, or positioning your property 
              for sale, let&apos;s discuss how strategic guidance can maximize your success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Link
                href="/contact"
                className="group px-10 py-5 luxury-gradient text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl"
              >
                <Calendar className="w-6 h-6" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/listings"
                className="px-10 py-5 bg-white text-luxury-black text-lg font-semibold rounded-xl hover:bg-luxury-gray-light transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Browse Properties
              </Link>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="tel:+17025551234"
              className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group"
            >
              <div className="w-16 h-16 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400 mb-1">Call Direct</div>
                <div className="font-bold text-xl text-white group-hover:text-luxury-gold transition-colors">
                  (702) 555-1234
                </div>
              </div>
            </a>

            <a
              href="mailto:pay@justrealtylv.com"
              className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group"
            >
              <div className="w-16 h-16 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400 mb-1">Email Direct</div>
                <div className="font-bold text-lg text-white group-hover:text-luxury-gold transition-colors">
                  pay@justrealtylv.com
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
