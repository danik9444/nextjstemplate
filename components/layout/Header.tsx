import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="font-bold text-xl">Brand</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
              Home
            </Link>
            <Link href="/features" className="hover:text-gray-600 dark:hover:text-gray-300">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-gray-600 dark:hover:text-gray-300">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">
              Contact
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="rounded-full bg-foreground text-background py-2 px-4 hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 py-4">
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
              Home
            </Link>
            <Link href="/features" className="hover:text-gray-600 dark:hover:text-gray-300">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-gray-600 dark:hover:text-gray-300">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="rounded-full bg-foreground text-background py-2 px-4 text-center hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
