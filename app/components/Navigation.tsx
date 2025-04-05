"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: "Accueil", href: "#home" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Contact", href: "#contact" }
];


  export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
  
    const menuVariants = {
      hidden: { 
        opacity: 0, 
        x: "100%",
        transition: { duration: 0.3 }
      },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.4,
          type: "tween"
        }
      }
    };
  
    return (
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-24 flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-primary">
          <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Unetra Tech Logo"
            width={36}
            height={36}
            className="rounded-md"
            priority
            quality={75}
          />
          <span className="text-white font-bold text-lg">Unetra Tech</span>
        </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="text-gray-800 hover:text-primary transition"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800"
            >
              {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className="fixed top-20 right-0 w-full bg-white shadow-lg md:hidden"
              >
                <div className="flex flex-col items-center py-8 space-y-6">
                  {navItems.map((item) => (
                    <a 
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-800 hover:text-primary text-xl"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    );
  }

