import Link from "next/link";
import { Search, Download, MessageSquare, Calendar } from "lucide-react";

const actions = [
  {
    icon: Search,
    label: "Search Homes",
    href: "/explore-homes",
  },
  {
    icon: Calendar,
    label: "Book Consultation",
    href: "/contact",
  },
  {
    icon: Download,
    label: "Download Guide",
    href: "/resources",
  },
  {
    icon: MessageSquare,
    label: "Get In Touch",
    href: "/contact",
  },
];

export default function QuickActions() {
  return (
    <section className="bg-brand-black py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="group flex flex-col items-center justify-center py-8 px-4 border border-brand-gray-800 hover:border-brand-gold transition-all"
            >
              <action.icon className="w-6 h-6 text-brand-gold mb-3" strokeWidth={1.5} />
              <span className="text-white text-sm font-medium tracking-wide group-hover:text-brand-gold transition-colors">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
