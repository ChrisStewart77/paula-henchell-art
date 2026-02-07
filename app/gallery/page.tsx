import { paintings } from '@/lib/paintings';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-12">
            Browse our collection of original oil paintings
          </p>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintings.map((painting) => (
              <div key={painting.id} className="group cursor-pointer">
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
        </div>
      </div>
    </main>
  );
}
