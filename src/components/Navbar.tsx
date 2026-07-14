import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Fares", to: "/specials" },
    {
      name: "POPULAR Tours",
      items: [
        { name: "Johannesburg Highlights", to: "/tours/johannesburg-highlights" },
        { name: "Soweto Heritage Tour", to: "/tours/soweto-heritage" },
        { name: "Pretoria Landmarks", to: "/tours/pretoria-landmarks" },
        { name: "North West Escapes", to: "/tours/north-west-escapes" },
      ],
    },
    { name: "Bookings", href: "https://wa.me/27827139660" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <>
      <div className="bg-[#1f1f1f] px-4 py-3 text-center text-sm text-white md:text-[1.05rem]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-1 md:flex-row md:gap-2">
          <a href="mailto:bookings@charamtravel.com" className="hover:text-white/80">
            bookings@charamtravel.com
          </a>
          <span className="hidden md:inline text-white/60">or</span>
          <a href="tel:+27827139660" className="hover:text-white/80">
            +27 (0) 82 713 9660
          </a>
        </div>
      </div>
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.transparent.png"
              alt="Charam Travel logo"
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = link.to ? location.pathname === link.to : false;

              return link.items ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setToursOpen(true)}
                  onMouseLeave={() => setToursOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setToursOpen((open) => !open)}
                    className="inline-flex items-center gap-2 border-b-2 border-transparent pb-1 text-sm font-display uppercase tracking-[0.16em] text-neutral-900 hover:border-maroon hover:text-maroon"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${toursOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {toursOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full z-50 mt-4 min-w-[260px] rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_18px_44px_rgba(17,17,17,0.12)]"
                      >
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className="block px-4 py-3 text-sm font-display uppercase tracking-[0.14em] text-neutral-900 transition hover:bg-[#f7f2f5] hover:text-maroon"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`border-b-2 pb-1 text-sm font-display uppercase tracking-[0.16em] ${
                    active
                      ? "border-maroon text-neutral-900"
                      : "border-transparent text-neutral-900 hover:border-maroon hover:text-maroon"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-transparent pb-1 text-sm font-display uppercase tracking-[0.16em] text-neutral-900 hover:border-maroon hover:text-maroon"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            className="rounded-md p-2 text-neutral-900 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-white p-8"
          >
            <div className="mb-12 flex items-center justify-between">
              <img
                src="/logo.transparent.png"
                alt="Charam Travel logo"
                className="h-14 w-auto object-contain"
              />
              <button
                className="rounded-md border border-neutral-200 p-2 text-neutral-900"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                link.items ? (
                  <div key={link.name} className="border-b border-neutral-200 pb-4">
                    <p className="text-2xl font-display uppercase tracking-[0.12em] text-neutral-900">
                      {link.name}
                    </p>
                    <div className="mt-4 flex flex-col gap-4 pl-1">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-display uppercase tracking-[0.1em] text-neutral-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : link.to ? (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-neutral-200 pb-4 text-2xl font-display uppercase tracking-[0.12em] text-neutral-900"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-b border-neutral-200 pb-4 text-2xl font-display uppercase tracking-[0.12em] text-neutral-900"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            <div className="mt-12 space-y-3 text-sm text-neutral-600">
              <a href="mailto:bookings@charamtravel.com" className="block hover:text-maroon">
                bookings@charamtravel.com
              </a>
              <a href="tel:+27827139660" className="block hover:text-maroon">
                +27 (0) 82 713 9660
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
