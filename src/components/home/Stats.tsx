import { TrendingUp, Users, Award, Home } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "500+",
    label: "Properties Sold",
    description: "Luxury homes successfully matched",
    color: "from-luxury-gold to-luxury-gold-dark",
  },
  {
    icon: TrendingUp,
    value: "$2B+",
    label: "Sales Volume",
    description: "Total transaction value",
    color: "from-luxury-gold-dark to-luxury-gold",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Clients",
    description: "Satisfied homeowners",
    color: "from-luxury-gold to-luxury-gold-light",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Excellence in real estate",
    color: "from-luxury-gold-light to-luxury-gold",
  },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-luxury-black via-luxury-gray-dark to-luxury-black text-white relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-luxury-gold transition-colors">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-luxury-gold-light mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400">{stat.description}</p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-luxury-gold/10 rounded-full blur-2xl group-hover:bg-luxury-gold/20 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
