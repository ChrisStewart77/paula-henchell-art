'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { paintings } from '@/lib/paintings';
import Image from 'next/image';

export default function ManagePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      alert('Test Mode: Painting would be deleted from database');
      // In production, this would call an API to delete the painting
    }
  };

  const handleEdit = (id: string) => {
    alert('Test Mode: Edit functionality would be implemented');
    // In production, this would navigate to an edit page
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <button
              onClick={() => router.push('/admin')}
              className="font-sans text-gray-600 hover:text-gray-900 mb-4"
            >
              ← Back to Dashboard
            </button>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900">
              Manage Paintings
            </h1>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left font-sans text-sm font-medium text-gray-700">
                      Image
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm font-medium text-gray-700">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm font-medium text-gray-700">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm font-medium text-gray-700">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm font-medium text-gray-700">
                      Dimensions
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm font-medium text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left font-sans text-sm font-medium text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paintings.map((painting) => (
                    <tr key={painting.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="w-16 h-16 relative rounded overflow-hidden bg-gray-100">
                          <Image
                            src={painting.image}
                            alt={painting.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-sans text-sm text-gray-900">
                        {painting.title}
                      </td>
                      <td className="px-6 py-4 font-sans text-sm text-gray-600">
                        {painting.category}
                      </td>
                      <td className="px-6 py-4 font-sans text-sm text-gray-900">
                        ${painting.price}
                      </td>
                      <td className="px-6 py-4 font-sans text-sm text-gray-600">
                        {painting.dimensions}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-sans ${
                            painting.available
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {painting.available ? 'Available' : 'Sold'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(painting.id)}
                            className="px-3 py-1 text-sm font-sans text-blue-600 hover:text-blue-800 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(painting.id, painting.title)}
                            className="px-3 py-1 text-sm font-sans text-red-600 hover:text-red-800 border border-red-600 rounded hover:bg-red-50 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="font-sans text-sm text-gray-500">
              Showing {paintings.length} painting{paintings.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
