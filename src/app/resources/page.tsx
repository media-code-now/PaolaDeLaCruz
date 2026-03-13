import Link from "next/link";
import { FileText, Download, TrendingUp, Home, Calculator, BookOpen, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Resources | Paola De La Cruz | Las Vegas Real Estate Guides",
  description: "Free real estate resources, guides, and tools for Las Vegas home buyers, sellers, and investors.",
};

const guides = [
  {
    icon: Home,
    title: "First-Time Buyer's Guide",
    description: "Everything you need to know about buying your first home in Las Vegas",
    downloadSize: "2.5 MB PDF",
    downloadLink: "#",
  },
  {
    icon: TrendingUp,
    title: "Investment Property Guide",
    description: "Strategic insights for building your real estate investment portfolio",
    downloadSize: "3.1 MB PDF",
    downloadLink: "#",
  },
  {
    icon: Calculator,
    title: "Home Selling Checklist",
    description: "Complete checklist to prepare and sell your home for maximum value",
    downloadSize: "1.8 MB PDF",
    downloadLink: "#",
  },
  {
    icon: BookOpen,
    title: "Neighborhood Guide 2026",
    description: "Comprehensive overview of Las Vegas luxury neighborhoods",
    downloadSize: "5.2 MB PDF",
    downloadLink: "#",
  },
];

const tools = [
  {
    title: "Mortgage Calculator",
    description: "Estimate your monthly payments and affordability",
    link: "/tools#mortgage",
  },
  {
    title: "Home Value Estimator",
    description: "Get an instant estimate of your property's worth",
    link: "/tools#home-value",
  },
  {
    title: "Market Reports",
    description: "Access the latest Las Vegas market data and trends",
    link: "/blog",
  },
  {
    title: "Relocation Checklist",
    description: "Complete guide for moving to Las Vegas",
    link: "/contact",
  },
];

const faqs = [
  {
    question: "What is the current Las Vegas real estate market like?",
    answer: "The Las Vegas luxury market is experiencing strong growth with a median price of $1.4M and average days on market of just 32 days. We're seeing significant interest from California relocators and investors.",
  },
  {
    question: "How much should I budget for closing costs?",
    answer: "Typically, buyers should budget 2-5% of the purchase price for closing costs, which includes loan fees, title insurance, escrow fees, and other transaction costs.",
  },
  {
    question: "What documents do I need to buy a home?",
    answer: "You'll need proof of income (pay stubs, tax returns), bank statements, credit history, government ID, and a pre-approval letter from your lender.",
  },
  {
    question: "How long does it take to sell a home in Las Vegas?",
    answer: "In the current market, properly priced luxury homes are averaging 32 days on market, though this can vary by neighborhood, condition, and pricing strategy.",
  },
  {
    question: "Should I buy or rent in Las Vegas?",
    answer: "This depends on your financial situation, timeline, and goals. Generally, if you plan to stay 3+ years and have solid finances, buying builds equity and offers tax benefits.",
  },
  {
    question: "What makes a good investment property?",
    answer: "Look for properties in growing neighborhoods, strong rental demand areas, good school districts, and properties below market value that you can add value to through improvements.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/70" />
        
        <div className="container-luxury relative z-10 text-white text-center">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
            <span className="text-luxury-gold-light text-sm font-semibold">
              FREE RESOURCES
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Real Estate Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Guides, tools, and insights to help you make informed real estate decisions
          </p>
        </div>
      </section>

      {/* Downloadable Guides Section */}
      <section className="section-padding bg-luxury-gray-light">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-luxury-gold/10 rounded-full">
              <span className="text-luxury-gold text-sm font-semibold">DOWNLOAD GUIDES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4 font-serif">
              Free Expert Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources created to guide you through your real estate journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <div
                key={guide.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 luxury-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <guide.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-500">{guide.downloadSize}</span>
                </div>
                <h3 className="text-2xl font-bold text-luxury-black mb-3 font-serif">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {guide.description}
                </p>
                <a
                  href={guide.downloadLink}
                  className="inline-flex items-center text-luxury-gold hover:text-luxury-gold-dark transition-colors font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-luxury-gold/10 rounded-full">
              <span className="text-luxury-gold text-sm font-semibold">ONLINE TOOLS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4 font-serif">
              Interactive Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Helpful calculators and tools to assist with your real estate decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Link
                key={tool.title}
                href={tool.link}
                className="bg-luxury-gray-light rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-luxury-black mb-2 font-serif">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {tool.description}
                </p>
                <span className="inline-flex items-center text-luxury-gold font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Use Tool
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-luxury-gray-light">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-luxury-gold/10 rounded-full">
              <span className="text-luxury-gold text-sm font-semibold">FREQUENTLY ASKED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-4 font-serif">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answers to the most common real estate questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-luxury-black mb-3 flex items-start">
                  <FileText className="w-6 h-6 text-luxury-gold mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Have more questions? I&apos;m here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 luxury-gradient text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Contact Pay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
