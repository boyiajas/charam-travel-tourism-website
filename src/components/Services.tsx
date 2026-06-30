import { motion } from "motion/react";
import { Plane, MapPin, Car, Shield, Navigation, Users } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable transfers to and from OR Tambo and Lanseria airports. We prioritize punctuality for your peace of mind.",
  },
  {
    icon: Navigation,
    title: "Executive Transfers",
    description: "Safe and comfortable transportation for corporate professionals and private individuals across Gauteng.",
  },
  {
    icon: MapPin,
    title: "Sightseeing Tours",
    description: "Guided tours highlighting South African history, landmarks, and culture in Johannesburg, Soweto, and Pretoria.",
  },
  {
    icon: Users,
    title: "Group Travel",
    description: "Comfortable transport for groups up to 7 passengers in our spacious VW Kombi, perfect for events or family trips.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-maroon font-display text-sm uppercase tracking-widest mb-4 font-semibold"
            >
              Our Offerings
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-neutral-900 leading-tight"
            >
              Tailored transportation <br /> for every journey.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="h-px w-32 bg-maroon mb-4"></div>
            <p className="text-slate-grey text-sm max-w-xs">
              From business meetings to scenic adventures, we ensure your arrival is as distinguished as your destination.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-neutral-100 rounded-2xl hover:border-maroon/20 hover:shadow-xl hover:shadow-maroon/5 transition-all group"
            >
              <div className="w-12 h-12 bg-maroon/5 rounded-xl flex items-center justify-center mb-6 text-maroon group-hover:bg-maroon group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-neutral-900">{service.title}</h3>
              <p className="text-slate-grey text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
