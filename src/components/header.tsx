"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Learn", href: "/learn" },
  { label: "News", href: "/news" },
  { label: "Take Action", href: "/take-action" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/674ef062be92c542b52a2821_A%20New%20Formula%20logo%20Novnu%20nov.png"
              alt="A New Formula"
              width={180}
              height={48}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate hover:text-ocean transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-slate hover:text-ocean transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/join"
              className="rounded-full bg-ocean px-6 py-2.5 text-sm font-semibold text-white hover:bg-ocean-dark transition-colors"
            >
              Join
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-slate hover:text-ocean transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link href="/sign-in" className="text-base font-medium text-slate">
                  Sign in
                </Link>
                <Link
                  href="/join"
                  className="rounded-full bg-ocean px-6 py-2.5 text-sm font-semibold text-white text-center"
                >
                  Join
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
