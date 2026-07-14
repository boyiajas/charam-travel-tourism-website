import { motion } from "motion/react";
import { useEffect } from "react";

import Breadcrumbs from "../components/Breadcrumbs";

export default function TermsOfService() {
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
          <p className="text-maroon font-display text-xs uppercase tracking-widest mb-4 font-bold">Legal</p>
          <h1 className="text-5xl font-serif text-neutral-900 mb-6">Terms of Service</h1>
          <p className="text-slate-grey">Last updated: May 2026</p>
        </motion.div>

        <div className="prose prose-neutral max-w-none rounded-[2rem] border border-neutral-200 bg-[#fcfaf7] p-8 md:p-10 space-y-10 text-slate-grey leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Charam Travel (PTY) Ltd, you agree to comply with and be bound by the following terms and conditions. These terms apply to all bookings and service interactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">2. Booking and Payment</h2>
            <p>
              All bookings are subject to availability. Bookings are confirmed only upon receipt of a confirmation email/message from Charam Travel. Payment must be made in full before or at the time of service as agreed during the booking process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">3. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations more than 24 hours in advance: 100% refund.</li>
              <li>Cancellations between 12 and 24 hours: 50% cancellation fee.</li>
              <li>Cancellations less than 12 hours or 'No-Shows': 100% cancellation fee.</li>
              <li>Flight delays will not incur extra charges if flight details were provided.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">4. Passenger Conduct</h2>
            <p>
              Passengers are expected to behave in a respectful manner. Charam Travel reserves the right to refuse service to any individual who is deemed a safety risk, intoxicated, or behaving inappropriately. Smoking is strictly prohibited in all vehicles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">5. Liability</h2>
            <p>
              While we take every precaution, Charam Travel is not responsible for any loss or damage to personal items left in the vehicle. In the event of unforeseen mechanical failure, we will endeavor to provide a replacement vehicle, but our liability is limited to the refund of the booking fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-neutral-900 mb-4">6. Jurisdiction</h2>
            <p>
              These terms are governed by the laws of the Republic of South Africa. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the South African courts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
