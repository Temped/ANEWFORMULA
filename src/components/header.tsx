"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Learn", href: "/learn" },
  { label: "News", href: "/news" },
  { label: "Take Action", href: "/take-action" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-white/60 backdrop-blur-md border-b border-white/20"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            <Image
              src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/674ef062be92c542b52a2821_A%20New%20Formula%20logo%20Novnu%20nov.png"
              alt="A New Formula"
              width={140}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop auth */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/sign-in"
              className="px-3.5 py-2 text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/join"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ocean-600 px-5 py-2 text-[13px] font-semibold text-white shadow-sm shadow-ocean-600/20 hover:bg-ocean-700 hover:shadow-md hover:shadow-ocean-600/25 transition-all duration-200"
            >
              Join
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-slate-700 rounded-lg hover:bg-slate-100/60 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block px-3 py-2.5 text-[15px] font-medium text-slate-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="/sign-in"
                  className="px-3 py-2.5 text-[15px] font-medium text-slate-600 text-center rounded-lg hover:bg-slate-50"
                >
                  Sign in
                </Link>
                <Link
                  href="/join"
                  className="rounded-full bg-ocean-600 px-6 py-2.5 text-[15px] font-semibold text-white text-center shadow-sm"
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
