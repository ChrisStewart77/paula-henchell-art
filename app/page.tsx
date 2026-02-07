export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Paula Henchell
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Original Oil Paintings
          </p>
          <p className="font-sans text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Capturing the beauty of nature through vibrant landscapes, delicate florals, 
            and wildlife portraits in rich, expressive oils.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="aspect-square bg-gray-200 rounded"></div>
          <div className="aspect-square bg-gray-200 rounded"></div>
          <div className="aspect-square bg-gray-200 rounded"></div>
        </div>
      </section>
    </main>
  );
}
