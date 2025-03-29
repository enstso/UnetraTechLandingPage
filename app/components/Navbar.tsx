"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Unetra Tech Logo"
            width={36}
            height={36}
            className="rounded-md"
            priority
          />
          <span className="text-white font-bold text-lg">Unetra Tech</span>
        </Link>

        <ul className="hidden md:flex space-x-6 text-sm">
          <li><Link href="#services" className="hover:text-brand">Services</Link></li>
          <li><Link href="#about" className="hover:text-brand">À propos</Link></li>
          <li><Link href="#tarifs" className="hover:text-brand">Tarifs</Link></li>
          <li><Link href="#contact" className="hover:text-brand">Contact</Link></li>
        </ul>
      </div>
    </motion.nav>
  )
}
