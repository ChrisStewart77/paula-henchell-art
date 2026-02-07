export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-8">
            About Paula
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="aspect-[3/4] bg-gray-200 rounded"></div>
            
            <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
              <p>
                Paula Henchell is an accomplished oil painter specializing in landscapes, 
                florals, and wildlife. With over 20 years of experience, her work captures 
                the subtle beauty and vibrant energy of the natural world.
              </p>
              <p>
                Working primarily in oils, Paula's technique emphasizes rich color palettes 
                and expressive brushwork that brings her subjects to life. Each painting is 
                an original work, created with careful attention to light, composition, and 
                emotional resonance.
              </p>
              <p>
                Her paintings are held in private collections throughout the United States 
                and continue to inspire viewers with their warmth and authenticity.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="font-serif text-3xl font-light text-gray-900 mb-6">
              Available for Commission
            </h2>
            <p className="font-sans text-gray-700 leading-relaxed mb-6">
              Paula accepts commission work for custom paintings. Whether you're looking for 
              a specific landscape, a portrait of a beloved pet, or a floral arrangement, 
              she works closely with clients to create meaningful, personalized artwork.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
            >
              Inquire About Commissions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
