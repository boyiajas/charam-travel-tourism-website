import { useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight, Camera, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const attractions = [
  {
    number: "01",
    title: "Constitution Hill",
    description:
      "Visit a living museum that tells the story of South Africa's journey to democracy. The former prison complex housed world-renowned political leaders like Nelson Mandela and Mahatma Gandhi.",
    highlights: [
      "Constitutional Court",
      "Old Fort",
      "Women's Gaol",
      "Number Four prison",
    ],
  },
  {
    number: "02",
    title: "Gold Reef City",
    description:
      "Experience the excitement of Gold Reef City, an amusement park located on an old gold mine in Johannesburg. Learn about the gold rush and enjoy thrilling attractions.",
    highlights: [
      "Underground mine tour",
      "Gold pouring demonstration",
      "Thrilling theme park rides",
      "Historical mining town replica",
    ],
  },
  {
    number: "03",
    title: "Walter Sisulu National Botanical Garden",
    description:
      "Relax in this stunning 300-hectare nature reserve featuring a magnificent waterfall, landscaped gardens, and diverse birdlife including a breeding pair of Verreaux's Eagles.",
    highlights: [
      "Witpoortjie Waterfall",
      "Verreaux's Eagle viewing",
      "Guided eco-walks & picnic lawns",
    ],
  },
  {
    number: "04",
    title: "Johannesburg Inner City Landmarks",
    description:
      "Explore the architectural wonders and historical milestones across the bustling urban core of Johannesburg, bridging historic mining roots with contemporary South African energy.",
    highlights: [
      "Hillbrow Tower & Ponte Building panoramic views",
      "Mandela Bridge & Newtown cultural precinct",
      "Apartheid Museum historical journey",
    ],
  },
];

export default function JohannesburgHighlightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden bg-maroon lg:min-h-[620px]">
        <img
          src="/apartheid-museum.jpg"
          alt="Johannesburg Highlights Tour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1440px] flex-col justify-end px-6 pb-16 pt-24 text-white md:px-12 lg:min-h-[620px] lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Compass size={14} className="text-[#f2b640]" />
              <span className="font-display text-xs uppercase tracking-[0.28em] text-white/90 font-medium">
                Full Day & Half Day Guided Tour
              </span>
            </div>
            <h1 className="mt-6 uppercase leading-[0.9] text-white">
              <span className="block font-[var(--font-hero)] text-6xl tracking-[0.04em] md:text-8xl lg:text-9xl">
                Johannesburg Highlights
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 md:text-xl md:leading-9">
              Discover South African history on a full day tour of Johannesburg and the Apartheid Museum. Experience the vibrant transition from the dawn of freedom in 1994 to the beating heart of Gauteng’s metropolis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Banner */}
      <section className="border-b border-neutral-200 bg-[#f7f2f5] py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-maroon text-white">
                <Clock size={22} />
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.18em] text-slate-grey font-semibold">
                  Tour Duration
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  8 Hours (Pre-booked 24/7)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-maroon text-white">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.18em] text-slate-grey font-semibold">
                  Pickup & Drop-off
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  Anywhere in Greater Johannesburg / Sandton
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-maroon text-white">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.18em] text-slate-grey font-semibold">
                  Executive Standard
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  Vetted Drivers & Passenger Liability Cover
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tour Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            {/* Attractions List */}
            <div className="space-y-12">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.24em] text-maroon font-bold">
                  Detailed Itinerary & Highlights
                </p>
                <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.04em] text-neutral-900 md:text-5xl">
                  Curated Johannesburg Experiences
                </h2>
                <p className="mt-4 text-base leading-8 text-neutral-600 md:text-lg">
                  Explore iconic monuments, living museums of democracy, and scenic nature reserves tailored to give you an unforgettable perspective of Gauteng.
                </p>
              </div>

              <div className="space-y-8">
                {attractions.map((attraction, i) => (
                  <motion.article
                    key={attraction.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition hover:border-maroon/40 hover:shadow-[0_18px_48px_rgba(76,13,48,0.09)] md:p-10"
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="space-y-3 max-w-xl">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-maroon/70">
                            Stop {attraction.number}
                          </span>
                          <span className="h-1 w-6 bg-maroon/30 rounded-full" />
                        </div>
                        <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-neutral-900 group-hover:text-maroon transition-colors md:text-3xl">
                          {attraction.title}
                        </h3>
                        <p className="text-base leading-7 text-neutral-700">
                          {attraction.description}
                        </p>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f7f2f5] text-maroon group-hover:bg-maroon group-hover:text-white transition-colors">
                        <Camera size={24} />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-100">
                      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate-grey mb-4">
                        Key Highlights Included:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {attraction.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-800 font-medium">
                            <CheckCircle2 size={16} className="text-maroon shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Booking Sidebar Panel */}
            <div className="sticky top-28 space-y-8">
              <div className="overflow-hidden rounded-[2.5rem] bg-maroon p-8 text-white shadow-[0_24px_56px_rgba(76,13,48,0.28)] md:p-10">
                <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                  Private & Executive Booking
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold uppercase text-white">
                  Reserve This Tour
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/85">
                  Our guided tours are pre-booked with experienced, professional drivers. Enjoy private, luxury transportation across Johannesburg with personalized scheduling.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://wa.me/27827139660?text=Hello%20Charam%20Travel,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20Johannesburg%20Highlights%20Tour."
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-maroon transition hover:bg-cream hover:shadow-lg"
                  >
                    <span>Book via WhatsApp</span>
                    <ArrowRight size={18} />
                  </a>
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/50 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
                  >
                    <span>Request Custom Quote</span>
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 space-y-3 text-xs text-white/75 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#f2b640]" />
                    <span>100% Black-Owned & Level 1 B-BBEE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#f2b640]" />
                    <span>Complimentary bottled water onboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#f2b640]" />
                    <span>Flexible pickup from Sandton / OR Tambo</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-neutral-200 bg-[#f7f2f5] p-8">
                <h4 className="font-display text-lg font-bold uppercase tracking-wider text-neutral-900">
                  Need Help Planning?
                </h4>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Speak directly to our operations and hospitality team in Illovo, Sandton for group rates or multi-day itineraries.
                </p>
                <div className="mt-6 space-y-2 text-sm font-semibold text-maroon">
                  <p>Direct: +27 (0) 82 713 9660</p>
                  <p>Email: bookings@charamtravel.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
