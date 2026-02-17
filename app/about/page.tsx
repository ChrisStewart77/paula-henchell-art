import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-8">
            About Paula
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="aspect-[3/4] bg-gray-200 rounded overflow-hidden relative">
              <Image
                src="/selfie.jpg"
                alt="Paula Henchell"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            
            <div className="space-y-4 font-sans text-gray-700 leading-relaxed">
              <p>
                Paula was born in Bromley, Kent, England and attended art school in Croydon,
                Surrey, focusing on life drawing and history of art. Paula has been passionate
                about art since early childhood and has carried that passion forward into her
                work today.
              </p>
              <p>
                Watercolour is Paula&apos;s favourite medium but she enjoys working in oils as
                well as acrylics. Her representational style captures the magic of the moment
                for the viewer to enjoy.
              </p>
              <p>
                Paula also instructs art at Swintons Art Supply and studios, Calgary, Alberta
                and offers summer workshops for students in watercolour for beginner and
                intermediate levels. Paula won first place in the landscape category at the
                Calgary Exhibition and Stampede Art Show for 2006 and was asked to paint in
                the Artists Window at the Calgary Exhibition and Stampede for 2007.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="font-serif text-3xl font-light text-gray-900 mb-6">
              Artist Statement
            </h2>
            <p className="font-sans text-gray-700 leading-relaxed mb-6">
              Ever since I was a little girl I used to love to draw and wanted to have a
              career in art. Somewhere when I had finished my training the lure of traveling
              seemed to take over and before I knew it the last thing I ever did was paint.
              In recent years I have gone from student to teacher and now paint in both
              watercolour and oils. I feel so fortunate to have art back in my life and to
              have met the people that I have. There is a huge world of wonder and excitement
              waiting for me out there and I cannot wait to get started on that road.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
            >
              Contact Paula
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
