import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, MessageSquare, TrendingUp, Users, Award, Shield } from "lucide-react";

export const metadata = {
  title: "Work With Pay | Paola De La Cruz | Las Vegas Real Estate",
  description: "Partner with Paola 'Pay' De La Cruz for strategic real estate guidance in Las Vegas. Relocation, investment, and market positioning expertise.",
};

const services = [
  {
    icon: Users,
    title: "Relocation Services",
    description: "Seamless transitions to Las Vegas with comprehensive market knowledge and neighborhood expertise.",
    features: [
      "Market orientation tours",
      "School district information",
      "Community lifestyle matching",
      "Temporary housing coordination",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Strategy",
    description: "Data-driven investment guidance for building and optimizing your real estate portfolio.",
    features: [
      "Market analysis and trends",
      "ROI projections",
      "Portfolio diversification",
      "Property management connections",
    ],
  },
  {
    icon: Award,
    title: "Market Positioning",
    description: "Strategic pricing and marketing to maximize your property's value and appeal.",
    features: [
      "Comparative market analysis",
      "Professional staging consultation",
      "Targeted marketing campaigns",
      "Negotiation expertise",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We'll discuss your goals, timeline, and requirements in detail to create a customized strategy.",
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "I'll develop a comprehensive plan tailored to your specific needs and market conditions.",
  },
  {
    step: "03",
    title: "Active Execution",
    description: "From property tours to negotiations, I'll guide you through every step with expert advice.",
  },
  {
    step: "04",
    title: "Successful Close",
    description: "Seamless transaction management ensuring a smooth closing and continued support afterward.",
  },
];

const benefits = [
  "Top 1% agent in Nevada with 15+ years experience",
  "500+ successful transactions across Las Vegas",
  "Extensive network of industry professionals",
  "Strategic marketing and negotiation expertise",
  "Personalized service and clear communication",
  "Deep knowledge of Las Vegas neighborhoods",
  "Investment and relocation specialist",
  "Available 7 days a week for my clients",
];

export default function WorkWithPayPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/80 to-luxury-black/60" />
        
        <div className="container-luxury relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
              <span className="text-luxury-gold-light text-sm font-semibold">
                STRATEGIC REAL ESTATE ADVISOR
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Let's Make Your <br />
              <span className="text-luxury-gold">Strategic Move</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Whether you're relocating, investing, or positioning your property for sale, 
              I provide the strategic guidance that makes the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 luxury-gradient text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Learn About Pay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-luxury-gray-light">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-luxury-gold/10 rounded-full">
              <span className="text-luxury-gold text-sm font-semibold">SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4 font-serif">
              Strategic Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your unique goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 luxury-gradient rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-luxury-black mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-luxury-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-luxury-gold/10 rounded-full">
              <span className="text-luxury-gold text-sm font-semibold">THE PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4 font-serif">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven process that delivers exceptional results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="flex gap-8 mb-12 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 luxury-gradient rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-luxury-black mb-3 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Pay Section */}
      <section className="section-padding bg-gradient-to-br from-luxury-black via-luxury-gray-dark to-luxury-black text-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
                <span className="text-luxury-gold-light text-sm font-semibold">
                  WHY CHOOSE PAY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Experience That <br />
                <span className="text-luxury-gold">Makes a Difference</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over 15 years of experience and 500+ successful transactions, 
                I bring strategic insight, market expertise, and unwavering dedication 
                to every client relationship.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-luxury-gold hover:text-luxury-gold-light transition-colors text-lg font-semibold"
              >
                Read My Full Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Shield className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-6 font-serif">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's discuss your real estate goals and create a winning strategy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 luxury-gradient text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="tel:+17025551234"
                className="inline-flex items-center justify-center px-8 py-4 bg-luxury-gray-light text-luxury-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Call (702) 555-1234
                <MessageSquare className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
