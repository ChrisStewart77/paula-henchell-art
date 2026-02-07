'use client';

import { paintings, Painting } from '@/lib/paintings';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';

type Category = 'All' | 'Landscapes' | 'Flowers' | 'Animals' | 'Birds' | 'Misc';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  const categories: Category[] = ['All', 'Landscapes', 'Flowers', 'Animals', 'Birds', 'Misc'];

  const filteredPaintings = selectedCategory === 'All'
    ? paintings
    : paintings.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Browse our collection of original oil paintings
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded font-sans transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPaintings.map((painting) => (
              <div
                key={painting.id}
                className="group cursor-pointer"
                onClick={() => setSelectedPainting(painting)}
              >
                <div className="aspect-square relative overflow-hidden rounded mb-3 bg-gray-100">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl text-gray-900">{painting.title}</h3>
                <p className="font-sans text-sm text-gray-500">{painting.category}</p>
                <p className="font-sans text-lg text-gray-900 mt-1">${painting.price}</p>
              </div>
            ))}
          </div>

          {filteredPaintings.length === 0 && (
            <p className="text-center text-gray-500 font-sans py-12">
              No paintings found in this category.
            </p>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPainting && (
        <Lightbox
          painting={selectedPainting}
          onClose={() => setSelectedPainting(null)}
        />
      )}
    </main>
  );
}
