import Link from "next/link";
import { ArrowRight, Award, Shield, Star, CheckCircle } from "lucide-react";

const trustBadges = [
  {
    icon: Award,
    title: "Top 1% Agent",
    description: "Nationwide ranking",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Client reviews",
  },
  {
    icon: Shield,
    title: "Certified Expert",
    description: "Luxury specialist",
  },
  {
    icon: CheckCircle,
    title: "$2B+ Sales",
    description: "Transaction volume",
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-luxury-black text-white overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side - Agent Portrait */}
          <div className="relative lg:order-1">
            <div className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-10 left-10 right-10 grid grid-cols-2 gap-4">
                <div className="glass-effect backdrop-blur-xl px-6 py-4 rounded-xl">
                  <div className="text-3xl font-bold text-luxury-gold mb-1">15+</div>
                  <div className="text-sm text-white/90">Years Experience</div>
                </div>
                <div className="glass-effect backdrop-blur-xl px-6 py-4 rounded-xl">
                  <div className="text-3xl font-bold text-luxury-gold mb-1">500+</div>
                  <div className="text-sm text-white/90">Homes Sold</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:order-2">
            <div className="inline-block mb-6 px-5 py-2.5 bg-luxury-gold/10 rounded-full">
              <span className="text-luxury-gold text-sm font-bold tracking-wide uppercase">
                Strategic Advisor
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Beyond Transactions,
              <span className="block text-gradient mt-2">Strategic Guidance</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-300 mb-10 leading-relaxed">
              <p>
                Real estate isn&apos;t just about buying or selling properties—it&apos;s 
                about making strategic decisions that align with your life goals and 
                financial objectives.
              </p>
              <p>
                Whether you&apos;re relocating to Las Vegas, building an investment 
                portfolio, or positioning your property for maximum value, I provide 
                the market intelligence and strategic guidance you need to succeed.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="bg-luxury-gray-dark p-5 rounded-xl hover:bg-luxury-gray-medium transition-colors"
                >
                  <badge.icon className="w-8 h-8 text-luxury-gold mb-3" />
                  <h3 className="text-base font-semibold mb-1">{badge.title}</h3>
                  <p className="text-sm text-gray-400">{badge.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 px-8 py-5 bg-white text-luxury-black text-lg font-semibold rounded-xl hover:bg-luxury-gray-light transition-all shadow-lg hover:shadow-xl group"
            >
              <span>Learn About My Approach</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
