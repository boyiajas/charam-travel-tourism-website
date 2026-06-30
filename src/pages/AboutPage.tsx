import { motion } from "motion/react";
import { CheckCircle2, Award, Users, Target, ShieldCheck } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useEffect } from "react";

const team = [
  {
    name: "Charles Ramalitse",
    role: "Founder & Managing Director",
    bio: "With over 15 years in hospitality and executive transport, Charles drives the vision of Charam Travel with a commitment to 5-star service.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mohapi Ramalitse",
    role: "Operations & Hospitality Director",
    bio: "Specializing in hospitality management and graphic design, Mohapi ensures the seamless execution of every tour and client experience.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-maroon font-display text-xs uppercase tracking-[0.4em] font-bold mb-6">Established 2010</p>
            <h1 className="text-6xl md:text-8xl font-serif text-neutral-900 mb-8 leading-[0.9]">
              Excellence is <br /> our <span className="text-maroon italic">heritage.</span>
            </h1>
            <p className="text-xl text-slate-grey font-light leading-relaxed">
              Based in the heart of Sandton, Charam Travel has spent over a decade redefining executive transportation through reliability, safety, and a deep passion for South African hospitality.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-maroon/5 hidden lg:block"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1549423155-3291404c244b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[3rem] shadow-2xl border border-neutral-100 hidden md:block">
            <ShieldCheck className="text-maroon mb-4" size={48} />
            <p className="text-2xl font-serif text-neutral-900 leading-tight">Level 1 <br /> B-BBEE</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-grey mt-2">100% Black Owned</p>
          </div>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-serif text-neutral-900 mb-6">Our Vision</h2>
            <p className="text-slate-grey leading-relaxed">
              To be the premier choice for executive travel in Africa, recognized globally for our commitment to safety, punctuality, and the delivery of authentic, high-end South African experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-maroon/5 rounded-2xl flex items-center justify-center text-maroon">
                <Target size={24} />
              </div>
              <h4 className="text-lg font-serif">Mission</h4>
              <p className="text-sm text-slate-grey leading-relaxed">Seamlessly bridging the gap between arrival and destination for the discerning traveler.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-maroon/5 rounded-2xl flex items-center justify-center text-maroon">
                <Award size={24} />
              </div>
              <h4 className="text-lg font-serif">Quality</h4>
              <p className="text-sm text-slate-grey leading-relaxed">Maintaining a five-star standard across our fleet, personnel, and service delivery.</p>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-100 space-y-4">
            {[
              "Professional Gauteng Tourist Guides",
              "VIP Service Excellence Protocols",
              "Strategic Illovo/Sandton Base",
              "Full Passenger Liability Insurance"
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-maroon" size={20} />
                <span className="text-neutral-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="text-maroon font-display text-xs uppercase tracking-[0.4em] font-bold mb-4">The Personnel</p>
            <h2 className="text-5xl font-serif mb-6">Meet Our Leadership.</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Driven by decades of combined experience in the travel and hospitality sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 p-12 rounded-[3.5rem] border border-white/5 group hover:bg-white/10 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-maroon/20 group-hover:border-maroon transition-all">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
                    <p className="text-maroon font-display text-[10px] uppercase tracking-widest font-bold mb-4">{member.role}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex justify-center md:justify-start gap-4">
                      {/* Social icons if needed */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Clients as Social Proof */}
      <section className="py-24 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-slate-grey/40 text-xs uppercase tracking-[0.2em] mb-12 italic">Trust verified by leading establishments across Gauteng</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["OR Tambo Intl", "Lanseria", "Corporate Cabs", "Absa", "PPS", "Sandton Hotels"].map(p => (
              <span key={p} className="text-neutral-300 font-serif text-xl tracking-wide">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
