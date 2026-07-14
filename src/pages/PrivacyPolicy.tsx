import { motion } from "motion/react";
import { useEffect } from "react";

import Breadcrumbs from "../components/Breadcrumbs";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-maroon font-display text-xs uppercase tracking-widest mb-4 font-bold">Privacy</p>
          <h1 className="text-5xl font-serif text-neutral-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-grey">Last updated: May 2026</p>
        </motion.div>

        <div className="prose prose-neutral max-w-none rounded-[2rem] border border-neutral-200 bg-[#fcfaf7] p-8 md:p-10 space-y-10 text-slate-grey leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">1. Data Collection</h2>
            <p>
              We collect personal information necessary to provide our transportation services, including your name, email address, phone number, and flight/pick-up details. We also collect payment information through secure third-party processors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">2. Use of Information</h2>
            <p>
              Your information is used solely for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing and confirming your bookings.</li>
              <li>Communicating with you regarding your travel.</li>
              <li>Improving our customer service experience.</li>
              <li>Complying with legal and regulatory requirements (POPIA).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. We do not sell or rent your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">4. Third-Party Services</h2>
            <p>
              We may share necessary details (such as pick-up location and name) with our professional drivers or subcontracted partners to fulfill your booking. These partners are bound by confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">5. Your Rights</h2>
            <p>
              Under South Africa's Protection of Personal Information Act (POPIA), you have the right to access, correct, or request the deletion of your personal information held by us. To exercise these rights, please contact us at info@charamtravel.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses minimal cookies to enhance site navigation and analyze site usage. You can disable cookies through your browser settings, though this may affect site functionality.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
