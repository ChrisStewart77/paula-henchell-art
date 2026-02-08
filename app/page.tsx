import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredPaintings = [
    {
      id: '10',
      title: 'Desert Twilight',
      image: '/desert-sunset.jpg',
    },
    {
      id: '17',
      title: 'Sunflowers in Crystal',
      image: '/sunflowers-crystal-vase.jpg',
    },
    {
      id: '13',
      title: 'Mountain Path',
      image: '/mountain-path.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Paula Henchell
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Original Oil & Watercolor Paintings
          </p>
          <p className="font-sans text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Capturing the beauty of nature through vibrant landscapes, delicate florals, 
            and wildlife portraits in rich oils and expressive watercolors.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/gallery"
              className="px-8 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
            >
              View Gallery
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-gray-300 text-gray-900 font-sans rounded hover:border-gray-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featuredPaintings.map((painting) => (
            <Link
              key={painting.id}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={painting.image}
                alt={painting.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-serif text-lg">{painting.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
