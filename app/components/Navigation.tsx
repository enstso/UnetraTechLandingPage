'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'À Propos', href: '#about' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className="fixed w-full z-50">
        <nav className={`transition-all duration-300 ${
            isScrolled
                ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
                : 'bg-white/90 backdrop-blur-md'
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                    src="/images/logo.png"
                    alt="Unetra Tech"
                    width={32}
                    height={32}
                    className="rounded-lg group-hover:scale-105 transition-transform"
                    priority
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Unetra Tech
              </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                    </a>
                ))}

                <Link
                    href="#contact"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
                >
                  Devis Gratuit
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                  onClick={toggle}
                  className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isOpen ? (
                    <XMarkIcon className="w-6 h-6" />
                ) : (
                    <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-100 z-40"
              >
                <div className="py-6 px-4">
                  <div className="space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                        >
                          {item.label}
                        </a>
                    ))}

                    <div className="pt-4 border-t border-gray-200">
                      <Link
                          href="#contact"
                          onClick={() => setIsOpen(false)}
                          className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-all duration-300"
                      >
                        Devis Gratuit
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
}
