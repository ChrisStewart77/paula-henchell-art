'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#fdfcfa]">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Your Cart
            </h1>
            <p className="font-sans text-lg text-gray-600 mb-8">
              Your cart is currently empty.
            </p>
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors"
            >
              Browse Gallery
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Your Cart
          </h1>

          <div className="space-y-6 mb-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 flex gap-6 items-start"
              >
                <div className="w-32 h-32 relative flex-shrink-0 rounded overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-serif text-2xl text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 mb-2">
                    {item.category} • {item.dimensions}
                  </p>
                  <p className="font-sans text-xl text-gray-900">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="font-sans text-lg w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-600 transition-colors text-2xl"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-2xl text-gray-900">Total</span>
              <span className="font-serif text-3xl text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Link
              href="/checkout"
              className="block w-full px-8 py-4 bg-gray-900 text-white font-sans rounded hover:bg-gray-800 transition-colors text-center text-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
