import { motion } from "motion/react";
import { Shield, CheckCircle, Clock, Heart } from "lucide-react";
import { useEffect } from "react";

import Breadcrumbs from "../components/Breadcrumbs";

export default function SafetyPolicy() {
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
          <div className="w-16 h-16 bg-maroon/5 rounded-2xl flex items-center justify-center text-maroon mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-5xl font-serif text-neutral-900 mb-6 tracking-tight">Our Safety Commitment</h1>
          <p className="text-xl text-slate-grey font-light leading-relaxed">
            At Charam Travel, your safety is our ultimate priority. We have implemented rigorous standards to ensure every journey is secure, comfortable, and reliable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-neutral-900 flex items-center gap-3">
              <CheckCircle className="text-maroon" size={24} />
              Vehicle Maintenance
            </h3>
            <p className="text-slate-grey text-sm leading-relaxed">
              Our fleet undergoes regular mechanical inspections and professional cleaning. Every vehicle is equipped with standard safety features including airbags, ABS, and tracking systems.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-neutral-900 flex items-center gap-3">
              <Heart className="text-maroon" size={24} />
              Driver Professionalism
            </h3>
            <p className="text-slate-grey text-sm leading-relaxed">
              All our drivers are background-checked, professionally trained, and possess specialized tourist guide certification. They are trained in defensive driving and emergency protocols.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-neutral-900 flex items-center gap-3">
              <Clock className="text-maroon" size={24} />
              Real-time Monitoring
            </h3>
            <p className="text-slate-grey text-sm leading-relaxed">
              We utilize advanced GPS tracking for all vehicles. Our central operations team monitors every transfer in real-time to ensure delays are managed and safety is maintained.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-neutral-900 flex items-center gap-3">
              <Shield className="text-maroon" size={24} />
              Insurance & Compliance
            </h3>
            <p className="text-slate-grey text-sm leading-relaxed">
              Charam Travel is fully registered and compliant with South African transport regulations. We carry comprehensive passenger liability insurance for your total peace of mind.
            </p>
          </div>
        </div>

        <div className="bg-cream p-12 rounded-[3rem] border border-maroon/5">
          <h2 className="text-3xl font-serif text-neutral-900 mb-6">COVID-19 & Health Protocols</h2>
          <p className="text-slate-grey leading-relaxed mb-8">
            While regulations have relaxed, we continue to maintain high hygiene standards. Each vehicle is sanitized between trips, and hand sanitizer is available for all passengers. Our drivers adhere strictly to your personal health preferences.
          </p>
          <button className="text-maroon font-display text-xs uppercase tracking-widest font-bold border-b-2 border-maroon pb-1">
            Download Full Safety PDF
          </button>
        </div>
      </div>
    </div>
  );
}
