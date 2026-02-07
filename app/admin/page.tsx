'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (in production, use proper auth)
    if (password === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#fdfcfa] flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-6">
          <h1 className="font-serif text-3xl text-gray-900 mb-6">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            
            {error && (
              <p className="font-sans text-sm text-red-600">{error}</p>
            )}
            
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </form>

          <p className="font-sans text-xs text-gray-500 mt-4 text-center">
            Test password: admin123
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900">
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-6 py-2 border border-gray-300 text-gray-700 font-sans rounded hover:border-gray-400 transition-colors"
            >
              Logout
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h2 className="font-serif text-2xl text-gray-900 mb-4">
                Upload New Painting
              </h2>
              <p className="font-sans text-gray-600 mb-4">
                Add new artwork to the gallery
              </p>
              <a
                href="/admin/upload"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
              >
                Upload Painting
              </a>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h2 className="font-serif text-2xl text-gray-900 mb-4">
                Manage Paintings
              </h2>
              <p className="font-sans text-gray-600 mb-4">
                Edit or remove existing artwork
              </p>
              <a
                href="/admin/manage"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
              >
                View All Paintings
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
