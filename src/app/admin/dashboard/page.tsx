'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogOut, FileText, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const adminOptions = [
    {
      title: 'Blog Management',
      description: 'Add, edit, or delete blog posts',
      icon: FileText,
      href: '/studio',
      external: true,
    },
    {
      title: 'Settings',
      description: 'Manage website settings and content',
      icon: Settings,
      href: '/admin/settings',
      external: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-black via-luxury-gray-dark to-luxury-black">
      {/* Header */}
      <header className="bg-luxury-black border-b border-white/10">
        <div className="container-luxury py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif text-white">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm mt-1">Welcome to your content management hub</p>
            </div>
            <button
              onClick={handleLogout}
              disabled={loading}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all disabled:opacity-50 font-medium"
            >
              <LogOut className="w-4 h-4" />
              <span>{loading ? 'Logging out...' : 'Logout'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-luxury py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-white mb-2">Content Management</h2>
          <p className="text-gray-400">
            Manage your website content, blog posts, and settings from here.
          </p>
        </div>

        {/* Admin Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adminOptions.map((option) => {
            const Icon = option.icon;
            const href = option.href;
            const isExternal = option.external;

            const CardContent = (
              <>
                <Icon className="w-10 h-10 text-luxury-gold mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-xl font-semibold text-white mb-2">
                  {option.title}
                </h2>
                <p className="text-gray-400 text-sm">{option.description}</p>
              </>
            );

            return isExternal ? (
              <a
                key={option.title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-white/5 border border-white/10 rounded-xl hover:border-luxury-gold/50 hover:bg-luxury-gold/5 transition-all group cursor-pointer"
              >
                {CardContent}
              </a>
            ) : (
              <Link
                key={option.title}
                href={href}
                className="p-8 bg-white/5 border border-white/10 rounded-xl hover:border-luxury-gold/50 hover:bg-luxury-gold/5 transition-all group"
              >
                {CardContent}
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-6">Quick Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">Total Blog Posts</p>
              <p className="text-3xl font-bold text-luxury-gold">0</p>
              <p className="text-gray-500 text-xs mt-2">Sync with Sanity Studio</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">Drafts</p>
              <p className="text-3xl font-bold text-luxury-gold">0</p>
              <p className="text-gray-500 text-xs mt-2">Awaiting publication</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">Last Updated</p>
              <p className="text-3xl font-bold text-luxury-gold">—</p>
              <p className="text-gray-500 text-xs mt-2">Check Sanity Studio</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
