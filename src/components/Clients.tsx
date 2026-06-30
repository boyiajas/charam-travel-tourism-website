import { motion } from "motion/react";

const allClients = [
  { name: "Absa", color: "#E0212E" },
  { name: "Adansi Travels", color: "#007A33" },
  { name: "Corporate Cabs", color: "#00A99D" },
  { name: "Buja Tours", color: "#F7941D" },
  { name: "The Syrene Boutique Hotel", color: "#8C7156" },
  { name: "Welcome Pickups", color: "#1CB5B5" }
];

export default function Clients() {
  return (
    <section className="py-24 bg-white overflow-hidden border-y border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-maroon font-display text-[10px] uppercase tracking-[0.4em] mb-4 font-bold"
        >
          Our Partner Network
        </motion.p>
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">
          Trusted by Leaders in <span className="italic text-maroon">Global Mobility.</span>
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden py-12 bg-cream/30">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...allClients, ...allClients, ...allClients].map((client, i) => (
            <div 
              key={i} 
              className="mx-16 flex items-center gap-6 group cursor-default"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-serif text-xl font-bold shadow-lg shadow-black/5"
                style={{ backgroundColor: client.color }}
              >
                {client.name.charAt(0)}
              </div>
              <span className="text-neutral-900 font-display font-bold uppercase tracking-widest text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
