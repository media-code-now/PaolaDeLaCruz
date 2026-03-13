import Link from "next/link";
import { Calendar, User, ArrowRight, TrendingUp, Home, Tag } from "lucide-react";

export const metadata = {
  title: "Blog | Paola De La Cruz | Las Vegas Real Estate Insights",
  description: "Expert insights, market trends, and real estate tips for Las Vegas from Paola 'Pay' De La Cruz.",
};

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Las Vegas Neighborhoods for California Relocators in 2026",
    excerpt: "Discover which Las Vegas neighborhoods are attracting the most California transplants and why they're making the move.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    category: "Market Trends",
    author: "Paola De La Cruz",
    date: "March 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Investment Opportunities: Las Vegas Real Estate Market Analysis",
    excerpt: "A deep dive into the current investment landscape in Las Vegas and where smart money is flowing in 2026.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
    category: "Investment",
    author: "Paola De La Cruz",
    date: "March 5, 2026",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Summerlin vs. Henderson: Which Master-Planned Community is Right for You?",
    excerpt: "Comparing two of Las Vegas's most popular master-planned communities to help you make the right choice.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    category: "Neighborhoods",
    author: "Paola De La Cruz",
    date: "February 28, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Luxury Home Features That Add the Most Value in 2026",
    excerpt: "Learn which upgrades and features are providing the best ROI for luxury homeowners in today's market.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    category: "Home Improvement",
    author: "Paola De La Cruz",
    date: "February 20, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "The Complete Guide to Selling Your Home in a Competitive Market",
    excerpt: "Strategic tips for positioning your property to attract serious buyers and maximize your sale price.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    category: "Selling",
    author: "Paola De La Cruz",
    date: "February 15, 2026",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "What First-Time Buyers Need to Know About the Las Vegas Market",
    excerpt: "Essential insights for navigating your first home purchase in Las Vegas's dynamic real estate landscape.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
    category: "Buying",
    author: "Paola De La Cruz",
    date: "February 10, 2026",
    readTime: "6 min read",
  },
];

const categories = [
  { name: "All Posts", count: 24 },
  { name: "Market Trends", count: 8 },
  { name: "Investment", count: 6 },
  { name: "Neighborhoods", count: 5 },
  { name: "Buying", count: 7 },
  { name: "Selling", count: 6 },
  { name: "Home Improvement", count: 4 },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2400')",
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/70" />
        
        <div className="container-luxury relative z-10 text-white text-center">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full">
            <span className="text-luxury-gold-light text-sm font-semibold">
              INSIGHTS & TRENDS
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Real Estate Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert insights, market analysis, and strategic guidance for Las Vegas real estate
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-luxury-gray-light">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-luxury-black mb-4 font-serif">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-luxury-gray-light transition-colors text-left group"
                    >
                      <span className="text-gray-700 group-hover:text-luxury-gold transition-colors">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-luxury-black mb-4 font-serif">
                    Subscribe
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Get the latest real estate insights delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                  />
                  <button className="w-full px-4 py-2 luxury-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-12">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div
                      className="h-64 md:h-auto bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${blogPosts[0].image})` }}
                    />
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-luxury-gold/10 text-luxury-gold rounded-full text-xs font-semibold">
                          FEATURED
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                          {blogPosts[0].category}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-luxury-black mb-4 font-serif group-hover:text-luxury-gold transition-colors">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {blogPosts[0].date}
                          </span>
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${blogPosts[0].id}`}
                        className="inline-flex items-center text-luxury-gold hover:text-luxury-gold-dark font-semibold group-hover:translate-x-2 transition-transform"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Tag className="w-4 h-4 text-luxury-gold" />
                        <span className="text-xs font-semibold text-gray-600">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-luxury-black mb-3 font-serif group-hover:text-luxury-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-luxury-gold hover:text-luxury-gold-dark font-semibold text-sm group-hover:translate-x-2 transition-transform"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-luxury-gold hover:text-white transition-colors font-medium">
                    Previous
                  </button>
                  <button className="px-4 py-2 luxury-gradient text-white rounded-lg font-medium">
                    1
                  </button>
                  <button className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-luxury-gold hover:text-white transition-colors font-medium">
                    2
                  </button>
                  <button className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-luxury-gold hover:text-white transition-colors font-medium">
                    3
                  </button>
                  <button className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-luxury-gold hover:text-white transition-colors font-medium">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-luxury-black via-luxury-gray-dark to-luxury-black text-white">
        <div className="container-luxury text-center">
          <TrendingUp className="w-12 h-12 text-luxury-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your real estate goals and create a winning strategy together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 luxury-gradient text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Contact Pay
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
