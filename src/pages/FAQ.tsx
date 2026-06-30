import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

const faqs = [
  {
    question: "What areas do you cover?",
    answer: "We primarily operate in Johannesburg, Sandton, and surrounding areas in Gauteng. We provide transfers to and from OR Tambo International and Lanseria airports, as well as tours to Soweto, Pretoria, and the North West Province."
  },
  {
    question: "How do I book a transfer?",
    answer: "You can book via our website's contact form, by emailing info@charamtravel.com, or by calling/WhatsApping us at +27 (0) 82 713 9660. We recommend booking at least 24 hours in advance."
  },
  {
    question: "What types of vehicles do you have?",
    answer: "Our standard fleet includes luxury Audi A4 sedans for executive travel (up to 4 passengers) and VW Transporter Kombis for group travel (up to 7 passengers). We can outsource additional vehicles for larger requirements."
  },
  {
    question: "Do you offer meet-and-greet services at the airport?",
    answer: "Yes, all our airport transfers include a professional meet-and-greet service. Our driver will be waiting at the arrivals hall with a clearly marked sign for easy identification."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made more than 24 hours before the scheduled time are free of charge. Cancellations within 24 hours may incur a fee depending on the service type."
  },
  {
    question: "Are your drivers professional?",
    answer: "Absolutely. All our drivers are highly experienced, professional, and have undergone Gauteng Province Tourist Guide training. We pride ourselves on delivering a 5-star VIP service."
  }
];

import Breadcrumbs from "../components/Breadcrumbs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      <Breadcrumbs />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-maroon font-display text-xs uppercase tracking-widest mb-4 font-bold">Support</p>
          <h1 className="text-5xl font-serif text-neutral-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-slate-grey">Everything you need to know about our services and booking process.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-serif text-lg text-neutral-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className="text-maroon" />
                ) : (
                  <Plus size={20} className="text-maroon" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 text-slate-grey text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
