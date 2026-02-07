'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Landscapes' as 'Landscapes' | 'Flowers' | 'Animals' | 'Birds' | 'Misc',
    price: '',
    description: '',
    dimensions: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would upload to a server/storage
    alert('Test Mode: Painting would be uploaded to database');
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <button
              onClick={() => router.push('/admin')}
              className="font-sans text-gray-600 hover:text-gray-900 mb-4"
            >
              ← Back to Dashboard
            </button>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900">
              Upload Painting
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              {imagePreview && (
                <div className="mt-4 aspect-square max-w-xs relative rounded overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              >
                <option value="Landscapes">Landscapes</option>
                <option value="Flowers">Flowers</option>
                <option value="Animals">Animals</option>
                <option value="Birds">Birds</option>
                <option value="Misc">Misc</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            {/* Dimensions */}
            <div>
              <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Dimensions (e.g., 16" x 20")
              </label>
              <input
                type="text"
                value={formData.dimensions}
                onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
            >
              Upload Painting
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
