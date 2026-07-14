import { useEffect } from "react";
import { motion } from "motion/react";
import { Clock, ShieldCheck, CheckCircle2, ArrowRight, Compass, Sun, PawPrint, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const attractions = [
  {
    number: "01",
    title: "Pilanesberg National Park Safari",
    description:
      "Embark on a Big 5 safari adventure in a malaria-free game reserve set within an ancient volcanic crater. Experience morning or evening drives with expert rangers, interactive conservation talks, and breathtaking bushland scenery right next to Sun City.",
    highlights: [
      "Big 5 viewing (Lion, Elephant, Leopard, Rhino, Buffalo)",
      "Morning / Evening game drives & night drive with spotlight",
      "Interactive conservation talks & guided bush walks",
      "Picnic lunches in the bush & sunset viewing over the dam",
    ],
  },
  {
    number: "02",
    title: "Cradle of Humankind & Sterkfontein Caves",
    description:
      "Take a step back in time at this UNESCO World Heritage Site, home to famous fossil discoveries like 'Mrs Ples' and 'Little Foot'. Explore archaeological treasures at the Maropeng Visitor Centre and take an underground boat ride through natural elements that created our world.",
    highlights: [
      "Maropeng Visitor Centre self-guiding journey & interactive exhibits",
      "Underground boat ride through the elements of time",
      "Sterkfontein Caves exploration",
    ],
  },
  {
    number: "03",
    title: "Lesedi Cultural Village",
    description:
      "Experience the diverse traditional cultures of South Africa in an authentic, multi-tribal village setting right in the Cradle region. Enjoy vibrant traditional music, tribal dancing, and an authentic pan-African feast.",
    highlights: [
      "Guided tours of traditional homesteads (Zulu, Xhosa, Pedi, Basotho, Ndebele)",
      "High-energy cultural dances & rhythmic music performances",
      "Pan-African feast featuring local delicacies",
    ],
  },
  {
    number: "04",
    title: "Sun City Resort & Valley of Waves",
    description:
      "Escape to South Africa's premier holiday and entertainment resort right next to the Pilanesberg. Enjoy world-class leisure facilities, thrilling water parks, championship golf courses, and vibrant casino entertainment.",
    highlights: [
      "Valley of Waves legendary wave pool & water slides",
      "Gary Player championship golf courses",
      "Casino, dining & family entertainment complex",
    ],
  },
  {
    number: "05",
    title: "Hartbeespoort Dam & Aerial Cableway",
    description:
      "Take a panoramic aerial cableway ride up the Magaliesberg mountains for breathtaking views across Hartbeespoort Dam and the surrounding valleys. Discover local craft markets, waterside dining, and leisure activities.",
    highlights: [
      "Aerial cableway ride to the mountain summit",
      "Panoramic mountain, valley & dam vistas",
      "Waterside craft markets, restaurants & leisure experiences",
    ],
  },
  {
    number: "06",
    title: "Rhino & Lion Nature Reserve",
    description:
      "Explore this incredible wildlife reserve situated in the Cradle of Humankind. See endangered species, predators, and diverse herbivores in their natural habitat with specialized predator viewing areas.",
    highlights: [
      "Guided game drives across the reserve",
      "Dedicated predator viewing encounters",
      "On-site snake park and wildlife conservation exhibits",
    ],
  },
  {
    number: "07",
    title: "Elephant Sanctuary",
    description:
      "Get up close and personal with African elephants in a peaceful forest setting. Learn about their behavior, complex intelligence, and biology while walking trunk-in-hand with these gentle giants under professional guide supervision.",
    highlights: [
      "Interactive and educational elephant encounters",
      "Guided forest walk trunk-in-hand",
      "In-depth talks on elephant conservation & anatomy",
    ],
  },
  {
    number: "08",
    title: "Ann van Dyk Cheetah Centre",
    description:
      "Visit the world-renowned breeding and research facility dedicated to the conservation of cheetahs, African wild dogs, and other endangered species. Witness incredible wildlife preservation efforts firsthand.",
    highlights: [
      "Comprehensive guided conservation tour",
      "Cheetah run experience (on scheduled days)",
      "African wild dog and rare species viewing",
    ],
  },
  {
    number: "09",
    title: "Lion & Safari Park",
    description:
      "Experience up-close encounters with lions, cheetahs, wild dogs, and various herbivores right in the Cradle area. Enjoy guided game drives in specialized safari vehicles and unforgettable photography moments.",
    highlights: [
      "Specialized predator viewing & guided game drives",
      "Herbivore feeding & animal interactions",
      "Professional wildlife photography opportunities",
    ],
  },
];

export default function NorthWestEscapesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden bg-maroon lg:min-h-[620px]">
        <img
          src="/sun-city-day-tour-large.jpg"
          alt="North West Escapes Tour"
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
                Wildlife, Heritage & Resort Excursions
              </span>
            </div>
            <h1 className="mt-6 uppercase leading-[0.9] text-white">
              <span className="block font-[var(--font-hero)] text-6xl tracking-[0.04em] md:text-8xl lg:text-9xl">
                North West Escapes
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 md:text-xl md:leading-9">
              From malaria-free Big 5 safaris in the Pilanesberg to ancient fossil valleys in the Cradle of Humankind and world-class resort luxury at Sun City, experience our most requested escapes.
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
                  Full Day & Multi-Day Packages
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-maroon text-white">
                <PawPrint size={22} />
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.18em] text-slate-grey font-semibold">
                  Wildlife & Safaris
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  Malaria-Free Big 5 & Reserves
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-maroon text-white">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-[0.18em] text-slate-grey font-semibold">
                  Executive Transport
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  Comfortable Long-Distance Travel
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
                  Detailed Itinerary & Attractions
                </p>
                <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.04em] text-neutral-900 md:text-5xl">
                  Nature, Origins & Adventure
                </h2>
                <p className="mt-4 text-base leading-8 text-neutral-600 md:text-lg">
                  Whether you seek the roar of lions in the wild, the cultural warmth of Lesedi, or the panoramic heights of the Magaliesberg, our North West escapes are crafted for discerning travelers.
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
                            Destination {attraction.number}
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
                        <Mountain size={24} />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-100">
                      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-slate-grey mb-4">
                        Key Features & Activities:
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
                  Reserve This Escape
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/85">
                  Our North West & Cradle excursions are custom-planned with professional drivers and comfortable executive vehicles equipped for longer highway and bush itineraries.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://wa.me/27827139660?text=Hello%20Charam%20Travel,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20North%20West%20Escapes%20Tour."
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
                    <span>Malaria-free Big 5 safari coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#f2b640]" />
                    <span>Direct pickup from Sandton, Illovo or airport</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-neutral-200 bg-[#f7f2f5] p-8">
                <h4 className="font-display text-lg font-bold uppercase tracking-wider text-neutral-900">
                  Multi-Day & Custom Packages
                </h4>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Want to combine Sun City, Pilanesberg overnight stays, and Lesedi cultural evenings into a comprehensive package? Our team can build tailored itineraries.
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
