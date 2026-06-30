import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-16 text-center md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-sm text-neutral-600">
          Copyright © 2026 Charam Travel. All Rights Reserved.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[0.7rem] font-display uppercase tracking-[0.16em] text-neutral-500">
          <Link to="/privacy" className="hover:text-maroon">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-maroon">
            Terms of Service
          </Link>
          <Link to="/faq" className="hover:text-maroon">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}
