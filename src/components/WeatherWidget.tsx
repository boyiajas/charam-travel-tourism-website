import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Cloud, Sun, CloudRain, Wind, Thermometer, MapPin } from "lucide-react";

const PROVINCES = [
  { name: "Gauteng", city: "Sandton", lat: -26.1076, lng: 28.0567, main: true },
  { name: "Western Cape", city: "Cape Town", lat: -33.9249, lng: 18.4241 },
  { name: "KwaZulu-Natal", city: "Durban", lat: -29.8587, lng: 31.0218 },
  { name: "Eastern Cape", city: "Gqeberha", lat: -33.9608, lng: 25.6022 },
  { name: "Free State", city: "Bloemfontein", lat: -29.1181, lng: 26.2235 },
  { name: "Limpopo", city: "Polokwane", lat: -23.8962, lng: 29.4486 },
  { name: "Mpumalanga", city: "Mbombela", lat: -25.4753, lng: 30.9694 },
  { name: "North West", city: "Mahikeng", lat: -25.856, lng: 25.6403 },
  { name: "Northern Cape", city: "Kimberley", lat: -28.7282, lng: 24.7499 }
];

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateWeather = () => {
      const data = PROVINCES.map(p => {
        const temp = Math.floor(Math.random() * (28 - 18) + 18);
        const conditions = ["Sunny", "Partly Cloudy", "Clear Skies", "Light Breeze"];
        return {
          ...p,
          temp,
          condition: conditions[Math.floor(Math.random() * conditions.length)],
          humidity: Math.floor(Math.random() * (60 - 30) + 30),
          wind: Math.floor(Math.random() * (20 - 5) + 5)
        };
      });
      setWeatherData(data);
      setLoading(false);
    };

    generateWeather();
    const interval = setInterval(generateWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            <p className="text-maroon font-display text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Travel Conditions</p>
            <h2 className="text-3xl font-serif text-neutral-900 leading-tight">
              Regional <span className="italic text-maroon">Weather.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-[10px] uppercase tracking-widest text-slate-grey/60 font-bold">
            <span className="flex items-center gap-2"><MapPin size={10} className="text-maroon" /> Sandton Base</span>
            <span className="flex items-center gap-2 underline decoration-maroon/20 underline-offset-4">Local Time: {new Date().toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {weatherData.map((w, index) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`min-w-[240px] snap-center p-6 rounded-3xl border transition-all ${
                w.main 
                ? "bg-neutral-900 border-neutral-800 text-white shadow-xl shadow-maroon/5 ring-1 ring-maroon/20" 
                : "bg-white border-neutral-100 text-neutral-900 hover:border-maroon/20"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className={`text-[8px] uppercase tracking-[0.2em] font-bold mb-1 ${w.main ? "text-maroon" : "text-slate-grey"}`}>
                    {w.main ? "Primary Base" : w.name}
                  </p>
                  <h4 className="text-xl font-serif">{w.city}</h4>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${w.main ? "bg-white/5" : "bg-neutral-50"}`}>
                  <Sun size={14} className={w.main ? "text-maroon" : "text-neutral-400"} />
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-4xl font-serif mb-1">{w.temp}°</p>
                  <p className={`text-[10px] uppercase tracking-widest font-bold ${w.main ? "text-white/40" : "text-slate-grey/60"}`}>
                    {w.condition}
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex items-center gap-1.5">
                    <Wind size={10} className="text-maroon" />
                    <span className={`text-[10px] font-medium ${w.main ? "text-white/60" : "text-slate-grey"}`}>{w.wind}kph</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cloud size={10} className="text-maroon" />
                    <span className={`text-[10px] font-medium ${w.main ? "text-white/60" : "text-slate-grey"}`}>{w.humidity}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
