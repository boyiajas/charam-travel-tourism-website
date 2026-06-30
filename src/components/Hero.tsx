import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    tag: "Executive Travel Specialist",
    title: "Distinctive Journeys.",
    italic: "Seamless",
    subtitle: "Arrival.",
    description: "Providing safe, reliable, and executive transportation across South Africa since 2010. Your premier partner for airport transfers.",
  },
  {
    image: "https://images.unsplash.com/photo-1549423155-3291404c244b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    tag: "Bespoke Sightseeing",
    title: "Discover Gauteng.",
    italic: "Private",
    subtitle: "Guided Tours.",
    description: "Experience the heart of Johannesburg and Pretoria with our professional guides. Tailored itineraries for the discerning traveler.",
  },
  {
    image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    tag: "Luxury Corporate Fleet",
    title: "Corporate Logistics.",
    italic: "Elite",
    subtitle: "Service.",
    description: "Efficiency meeting elegance. Reliable multi-day coordination for business delegates and international teams.",
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentIndex];

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-neutral-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover opacity-50 grayscale-[0.2] scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-maroon"></div>
                <span className="text-white font-display text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold">
                  {slide.tag}
                </span>
              </div>

              <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-[0.9] tracking-tight">
                {slide.title} <br />
                <span className="text-maroon italic">{slide.italic}</span> {slide.subtitle}
              </h1>

              <p className="text-neutral-300 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/contact" className="bg-maroon hover:bg-maroon/90 text-white px-10 py-5 rounded-full text-sm font-display uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-maroon/20 font-bold">
                  Book Your Journey
                  <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="border border-white/30 hover:border-white text-white px-10 py-5 rounded-full text-sm font-display uppercase tracking-widest transition-all backdrop-blur-sm font-bold bg-white/5">
                  Our Legacy
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-maroon hover:border-maroon transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % SLIDES.length)}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-maroon hover:border-maroon transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute left-12 bottom-1/2 translate-y-1/2 z-20 flex flex-col gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1 transition-all duration-500 rounded-full ${
              i === currentIndex ? "h-12 bg-maroon" : "h-6 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest font-display font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
