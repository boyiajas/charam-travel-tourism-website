import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Briefcase, Zap, ChevronLeft, ChevronRight } from "lucide-react";

const fleet = [
  {
    id: "audi-a4",
    name: "Audi A4 Sedan",
    category: "Executive Class",
    passengers: 4,
    luggage: 2,
    image: "https://images.unsplash.com/photo-1606152424101-ad949c4d92eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "The epitome of style and comfort. Perfect for solo executive travel.",
  },
  {
    id: "mercedes-vclass",
    name: "Mercedes-Benz V-Class",
    category: "Ultra Luxury MPV",
    passengers: 6,
    luggage: 6,
    image: "https://images.unsplash.com/photo-1554674600-607f27357026?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Our premier group vehicle featuring reclining leather seats.",
  },
  {
    id: "vw-kombi",
    name: "VW Transporter Kombi",
    category: "Group Luxury",
    passengers: 7,
    luggage: 6,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Spacious and versatile. Ideally suited for large families.",
  }
];

export default function Fleet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + fleet.length) % fleet.length);
  };

  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % fleet.length
  ];

  return (
    <section id="fleet" className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-maroon font-display text-sm uppercase tracking-widest mb-4 font-bold"
          >
            Our Fleet
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6"
          >
            Arrive in <span className="italic text-maroon">Excellence.</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button 
              onClick={() => paginate(-1)}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-400 hover:text-maroon shadow-xl hover:scale-110 transition-all border border-neutral-100"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button 
              onClick={() => paginate(1)}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-400 hover:text-maroon shadow-xl hover:scale-110 transition-all border border-neutral-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1]
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {visibleIndices.map((idx) => {
                  const car = fleet[idx];
                  return (
                    <div key={car.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-maroon/5 group">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img 
                          src={car.image} 
                          alt={car.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="text-[8px] uppercase tracking-[0.3em] font-display font-bold text-maroon mb-2 block">
                              {car.category}
                            </span>
                            <h3 className="text-2xl font-serif text-neutral-900">{car.name}</h3>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex items-center gap-1.5 text-slate-grey">
                              <Users size={14} className="text-maroon" />
                              <span className="text-xs font-medium">{car.passengers}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-grey">
                              <Briefcase size={14} className="text-maroon" />
                              <span className="text-xs font-medium">{car.luggage}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-grey text-sm mb-6 line-clamp-2">{car.description}</p>
                        <button className="w-full py-3 rounded-full border border-maroon/20 text-maroon font-display text-[10px] uppercase tracking-widest font-bold hover:bg-maroon hover:text-white transition-all">
                          Book Now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {fleet.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === currentIndex ? "w-8 bg-maroon" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white p-10 rounded-[2.5rem] border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-maroon">
              <Zap size={32} />
            </div>
            <div>
              <h4 className="text-xl font-serif text-neutral-900">Need specific requirements?</h4>
              <p className="text-slate-grey text-sm">We can source additional vehicles for larger group requirements upon request.</p>
            </div>
          </div>
          <button className="whitespace-nowrap px-8 py-3 rounded-full border border-maroon text-maroon hover:bg-maroon hover:text-white transition-all font-display text-xs uppercase tracking-widest font-bold">
            Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}


