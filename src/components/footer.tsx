import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Explore",
    links: [
      { label: "Learn", href: "/learn" },
      { label: "Teach", href: "/learn" },
      { label: "Take Action", href: "/courses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/674ef062be92c542b52a2821_A%20New%20Formula%20logo%20Novnu%20nov.png"
              alt="A New Formula"
              width={130}
              height={34}
              className="h-7 w-auto"
            />
            <p className="mt-5 max-w-xs text-[14px] text-slate-500 leading-relaxed">
              Learn, Teach and Take Action on Contaminants of Emerging Concern.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  label: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  label: "Twitter",
                  path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                },
                {
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                  aria-label={social.label}
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {sections.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-slate-400">
                {section.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* EU disclaimer */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Image
              src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/675834826aa272ab7d971026_eu.svg"
              alt="European Union flag"
              width={40}
              height={28}
              className="flex-shrink-0"
            />
            <p className="text-[12px] text-slate-400 leading-relaxed">
              Funded by the European Union. Views and opinions expressed are
              however those of the author(s) only and do not necessarily reflect
              those of the European Union or Horizon Europe.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-slate-400">
            <span>
              Powered by{" "}
              <a
                href="https://contrastproject.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                CONTRAST
              </a>
            </span>
            <span className="text-slate-300">|</span>
            <span>
              Built by{" "}
              <a
                href="https://shire.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                Shire Creatives
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
