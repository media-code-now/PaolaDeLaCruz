import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Market Insights",
    title: "Las Vegas Real Estate Market Outlook 2026",
    excerpt: "Key trends shaping the Las Vegas market this year, from inventory shifts to buyer demographics.",
    date: "March 10, 2026",
    readTime: "6 min read",
    slug: "las-vegas-market-outlook-2026",
  },
  {
    id: 2,
    category: "Relocation",
    title: "Moving to Las Vegas: What Out-of-State Buyers Need to Know",
    excerpt: "Essential considerations for relocating to Nevada, from lifestyle adjustments to financial benefits.",
    date: "March 5, 2026",
    readTime: "8 min read",
    slug: "moving-to-las-vegas-guide",
  },
  {
    id: 3,
    category: "Investment Strategy",
    title: "Building Wealth Through Strategic Real Estate Investment",
    excerpt: "How to approach real estate as a long-term investment vehicle rather than speculation.",
    date: "February 28, 2026",
    readTime: "10 min read",
    slug: "strategic-real-estate-investment",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold text-[10px] font-medium uppercase tracking-[0.3em] mb-4 block">
              Insights &amp; Analysis
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-black mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-brand-gray-600 leading-relaxed">
              Strategic perspectives on the Las Vegas market, investment insights, and real estate guidance.
            </p>
          </div>
          
          {/* Desktop CTA */}
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center text-brand-black hover:text-brand-gold transition-colors font-medium whitespace-nowrap group"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Category Label */}
              <div className="mb-4">
                <span className="inline-block text-[10px] font-medium uppercase tracking-[0.3em] text-brand-gold">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-serif text-2xl md:text-3xl text-brand-black leading-tight group-hover:text-brand-gold transition-colors block"
                >
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-brand-gray-600 leading-relaxed mb-6 text-[15px]">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-brand-gray-500 pb-6 border-b border-brand-gray-200">
                <time dateTime={post.date} className="text-xs uppercase tracking-wider">
                  {post.date}
                </time>
                <div className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5" strokeWidth={2} />
                  <span className="text-xs">{post.readTime}</span>
                </div>
              </div>

              {/* Read More Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-brand-black hover:text-brand-gold transition-colors mt-6 group"
              >
                Read Article
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-16 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-brand-black text-white font-medium tracking-wide hover:bg-brand-gray-800 transition-colors group"
          >
            View All Articles
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
