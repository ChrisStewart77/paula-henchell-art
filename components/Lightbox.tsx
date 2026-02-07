'use client';

import { Painting } from '@/lib/paintings';
import Image from 'next/image';
import { useEffect } from 'react';

interface LightboxProps {
  painting: Painting;
  onClose: () => void;
}

export default function Lightbox({ painting, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
        aria-label="Close"
      >
        ×
      </button>

      <div
        className="max-w-5xl w-full bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square bg-gray-100">
            <Image
              src={painting.image}
              alt={painting.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl text-gray-900 mb-2">
                {painting.title}
              </h2>
              <p className="font-sans text-sm text-gray-500 mb-4">
                {painting.category}
              </p>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">
                {painting.description}
              </p>
              <p className="font-sans text-sm text-gray-600 mb-6">
                {painting.dimensions}
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-serif text-3xl text-gray-900">
                ${painting.price}
              </p>
              <button className="w-full px-6 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
