import { motion } from "motion/react";
import { Camera, Map, Users as UsersIcon, Heart } from "lucide-react";

const gallery = [
  {
    title: "Nelson Mandela Bridge",
    category: "Sightseeing",
    image: "https://images.unsplash.com/photo-1541019056037-7509cf6e9e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Architectural wonders in the heart of Johannesburg city tours."
  },
  {
    title: "Executive Group Comfort",
    category: "In-Vehicle Experience",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Clients enjoying the spacious interior and premium amenities of our fleet."
  },
  {
    title: "Scenic Coastal Drive",
    category: "Day Tours",
    image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Breathtaking landscapes captured during our long-distance transfers."
  },
  {
    title: "Cultural Immersion",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Connecting travelers with the vibrant heart of Soweto and beyond."
  },
  {
    title: "Corporate Group Travel",
    category: "Clients",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Seamless logistics for large teams arriving at OR Tambo International."
  },
  {
    title: "The Urban Bridge Path",
    category: "Tour Routes",
    image: "https://images.unsplash.com/photo-1541019177114-16a7f7fac149?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Modern infrastructure meeting historical roots on our city sightseeing tours."
  }
];

export default function ExperienceGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-maroon font-display text-xs uppercase tracking-[0.4em] mb-4 font-bold"
          >
            Memorable Experiences
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6">
            Witness the <span className="italic text-maroon">Art</span> of Travel.
          </h2>
          <p className="text-slate-grey max-w-2xl mx-auto font-light">
            From the urban bridges of Johannesburg to the scenic wonders of our tours, see how we bring excellence to every mile of your journey.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-[2.5rem] overflow-hidden bg-cream"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="text-maroon font-display text-[10px] uppercase tracking-widest font-bold mb-2">{item.category}</span>
                <h4 className="text-2xl font-serif text-white mb-2">{item.title}</h4>
                <p className="text-neutral-300 text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: UsersIcon, label: "Happy Clients", value: "5000+" },
            { icon: Map, label: "Tour Routes", value: "85+" },
            { icon: Camera, label: "Sightseeing Points", value: "200+" },
            { icon: Heart, label: "Service Rating", value: "5.0/5" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 bg-cream rounded-[2rem] border border-maroon/5">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-maroon mx-auto mb-4 shadow-sm">
                <stat.icon size={20} />
              </div>
              <p className="text-3xl font-serif text-neutral-900 mb-1">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-grey font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
