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

          {/* Placeholder for gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-gray-200 rounded mb-3"></div>
                <h3 className="font-serif text-xl text-gray-900">Painting Title</h3>
                <p className="font-sans text-sm text-gray-500">Category</p>
                <p className="font-sans text-lg text-gray-900 mt-1">$XXX</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
