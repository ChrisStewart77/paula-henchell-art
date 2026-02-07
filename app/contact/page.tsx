export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-12">
            Interested in purchasing a painting or discussing a commission? 
            I'd love to hear from you.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-gray-200 text-center">
            <p className="font-sans text-gray-600">
              Or email directly at:{" "}
              <a href="mailto:paula@paulahenchell.com" className="text-gray-900 underline">
                paula@paulahenchell.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
