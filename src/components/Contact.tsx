import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-maroon font-display text-sm uppercase tracking-[0.3em] mb-4 font-semibold"
            >
              Get In Touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif mb-8 text-neutral-900"
            >
              Request a Bespoke <br /> 
              <span className="italic text-maroon">Service Inquiry.</span>
            </motion.h2 >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-grey mb-12 max-w-md leading-relaxed"
            >
              Available 24/7 for booking assistance and urgent transfer requests. Our team is ready to curate your ideal travel experience.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-maroon/5 rounded-2xl flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-grey/60 mb-1 font-bold">Call Specialists</p>
                  <p className="text-xl font-serif text-neutral-900">+27 (0) 82 713 9660</p>
                  <p className="text-sm text-slate-grey">+27 (0) 71 325 5675</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-maroon/5 rounded-2xl flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-grey/60 mb-1 font-bold">Email Inquiry</p>
                  <p className="text-xl font-serif text-neutral-900">info@charamtravel.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-maroon/5 rounded-2xl flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-grey/60 mb-1 font-bold">Office Location</p>
                  <p className="text-xl font-serif text-neutral-900">Regus Johannesburg</p>
                  <p className="text-sm text-slate-grey">35 Fricker Road, Illovo, Sandton, 2196</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-slate-grey hover:border-maroon hover:text-maroon transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-cream p-10 rounded-[2.5rem] border border-maroon/5 shadow-2xl shadow-maroon/5 relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-grey font-bold ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 focus:outline-none focus:border-maroon transition-all placeholder:text-neutral-300" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-grey font-bold ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 focus:outline-none focus:border-maroon transition-all placeholder:text-neutral-300" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-grey font-bold ml-1">Service Type</label>
                <select className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3 focus:outline-none focus:border-maroon transition-all appearance-none cursor-pointer">
                  <option>Airport Transfer</option>
                  <option>Executive Transfer</option>
                  <option>Johannesburg Sightseeing</option>
                  <option>Custom Tour Package</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-grey font-bold ml-1">Special Requirements</label>
                <textarea rows={4} className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-4 focus:outline-none focus:border-maroon transition-all resize-none placeholder:text-neutral-300" placeholder="Let us know your travel details..."></textarea>
              </div>

              <button className="w-full bg-maroon hover:bg-maroon/90 text-white font-display text-sm uppercase tracking-widest font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-maroon/20">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
