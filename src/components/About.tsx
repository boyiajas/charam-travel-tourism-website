import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Sandton cityscape"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-maroon/5 rounded-full z-0"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 border border-maroon/20 rounded-full z-0"></div>
          
          <div className="absolute bottom-10 left-10 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-neutral-100 max-w-xs">
            <p className="text-maroon font-serif text-4xl mb-2">100%</p>
            <p className="text-slate-grey text-sm font-display uppercase tracking-widest leading-snug">
              Black-Owned & Level 1 B-BBEE Compliant
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <p className="text-maroon font-display text-sm uppercase tracking-widest mb-4 font-semibold">Our Identity</p>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
            Heritage of reliability. <br />
            Passion for <span className="italic">service.</span>
          </h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-slate-grey leading-relaxed">
              Registered in 2010 and based in Kew, Sandton, Charam Travel (formerly Summit Travel) was founded by Charles Ramalitse with a singular vision: to provide premier, safe, and reliable executive transportation within South Africa.
            </p>
            <p className="text-slate-grey leading-relaxed">
              We pride ourselves on 5-star service delivery, having been entrusted with VIP transfers for global dignitaries and corporate leaders. Our mission is to bridge the gap between transportation and a true South African hospitality experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Registered & Professional",
              "VIP & Executive Focus",
              "Johannesburg Specialists",
              "Reliable 24/7 Support",
              "Cultural Sightseeing Experts",
              "Punctuality Guaranteed"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-maroon shrink-0" size={18} />
                <span className="text-neutral-700 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 space-y-6">
             <p className="text-slate-grey text-xs uppercase tracking-widest font-bold">Leadership Team</p>
             <div className="flex flex-col md:flex-row gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-maroon flex items-center justify-center font-serif text-maroon text-lg italic bg-maroon/5">CR</div>
                  <div>
                    <p className="text-neutral-900 font-bold text-sm">Charles Ramalitse</p>
                    <p className="text-slate-grey text-[10px] uppercase tracking-widest">Founder & Managing Director</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-grey flex items-center justify-center font-serif text-slate-grey text-lg italic bg-slate-grey/5">MR</div>
                  <div>
                    <p className="text-neutral-900 font-bold text-sm">Mohapi Ramalitse</p>
                    <p className="text-slate-grey text-[10px] uppercase tracking-widest">Operations & Hospitality</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
