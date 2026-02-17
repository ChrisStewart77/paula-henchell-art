'use client';

import { paintings, Painting } from '@/lib/paintings';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';

export default function CommissionsPage() {
  const [selectedDrawing, setSelectedDrawing] = useState<Painting | null>(null);
  const pencilDrawings = paintings.filter((painting) => painting.category === 'Pencil Drawings');

  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Commissions
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-4">
            Pencil drawings are available as custom commissions and make meaningful keepsake gifts.
          </p>
          <p className="font-sans text-base text-gray-600 mb-10">
            Wedding dress drawings are especially popular gifts, giving couples a unique reminder they can treasure for years.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pencilDrawings.map((drawing) => (
              <div
                key={drawing.id}
                className="group cursor-pointer"
                onClick={() => setSelectedDrawing(drawing)}
              >
                <div className="aspect-square relative overflow-hidden rounded mb-3 bg-gray-100">
                  <Image
                    src={drawing.image}
                    alt={drawing.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl text-gray-900">{drawing.title}</h3>
                <p className="font-sans text-sm text-gray-500">Commission Pencil Drawing</p>
              </div>
            ))}
          </div>

          {pencilDrawings.length === 0 && (
            <p className="text-center text-gray-500 font-sans py-12">
              No commission samples are available yet.
            </p>
          )}
        </div>
      </div>

      {selectedDrawing && (
        <Lightbox
          painting={selectedDrawing}
          onClose={() => setSelectedDrawing(null)}
        />
      )}
    </main>
  );
}
