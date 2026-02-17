'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl text-gray-900">
            Paula Henchell
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/gallery" className="font-sans text-gray-700 hover:text-gray-900">
              Gallery
            </Link>
            <Link href="/commissions" className="font-sans text-gray-700 hover:text-gray-900">
              Commissions
            </Link>
            <Link href="/about" className="font-sans text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="font-sans text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/cart" className="font-sans text-gray-700 hover:text-gray-900 relative">
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
