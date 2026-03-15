'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push('/admin/dashboard');
      } else {
        setError('Invalid password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-black via-luxury-gray-dark to-luxury-black flex items-center justify-center px-4 mt-20">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Admin Access
          </h1>
          <p className="text-gray-400">
            Enter your password to access the admin dashboard
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all outline-none"
              disabled={loading}
              autoFocus
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full px-6 py-3 bg-luxury-gold text-luxury-black font-semibold rounded-lg hover:bg-luxury-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-luxury-gold transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
