'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label:'Accueil',          href:'#home'      },
  { label:'Fonctionnalités',  href:'#features'  },
  { label:'Tarifs',           href:'#pricing'   },
  { label:'Contact',          href:'#contact'   }
];

export default function Navigation(){
  const [open,setOpen]=useState(false);
  const toggle = ()=>setOpen(!open);

  return(
    <header className="fixed w-full z-50">
      {/* navbar */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 lg:px-24 flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={36} height={36} className="rounded-md" priority />
            <span className="nav-brand text-lg">Unetra Tech</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map(({label,href})=>(
              <li key={href}>
                <a href={href} className="nav-link text-slate-300 hover:text-white">{label}</a>
              </li>
            ))}
          </ul>

          {/* Burger */}
          <button onClick={toggle} aria-label="Menu"
                  className="md:hidden text-slate-200 hover:text-indigo-400 transition">
            {open? <XMarkIcon className="w-8 h-8"/>:<Bars3Icon className="w-8 h-8"/>}
          </button>
        </div>
        {/* glow line */}
        <span className="nav-glow pointer-events-none" />
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-20}} transition={{duration:.3}}
            className="md:hidden fixed top-20 left-0 right-0 bg-slate-900/95 backdrop-blur border-t border-slate-700 z-40"
          >
            <ul className="flex flex-col items-center py-10 space-y-8">
              {navItems.map(({label,href})=>(
                <li key={href}>
                  <a href={href}
                     onClick={()=>setOpen(false)}
                     className="text-xl font-medium text-slate-200 hover:text-indigo-400 transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
