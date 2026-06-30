import { useEffect, useState } from "react";
import { CloudSun } from "lucide-react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    image: "/IMG-20260620-WA0028.jpg",
    alt: "Charam Travel vehicle",
    eyebrow: "Executive Travel",
    title: "Welcome",
    subtitle: "To",
    highlight: "Charam Travel",
    description:
      "Professional airport transfers, executive transport, and private travel support across Johannesburg and Gauteng.",
  },
  {
    image: "/highway.webp",
    alt: "Executive travel route",
    eyebrow: "Corporate Mobility",
    title: "Reliable",
    subtitle: "Travel For",
    highlight: "Business",
    description:
      "Dependable transfer coordination for meetings, airport pickups, hospitality guests, and time-sensitive business schedules.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&w=1600&q=80",
    alt: "Scenic South African route",
    eyebrow: "Private Tours",
    title: "Discover",
    subtitle: "More Of",
    highlight: "Gauteng",
    description:
      "Pre-booked guided routes for Johannesburg, Soweto, Pretoria, and selected North West destinations with experienced drivers.",
  },
];

const aboutPillars = [
  "Safety",
  "Reliability",
  "Comfort",
  "Expertise",
];

const aboutHighlights = [
  "Registered in May 2010 and based in Illovo, Sandton, Johannesburg",
  "Proudly family-run and 100% black-owned",
  "Executive sedans and mini-buses with passenger liability cover",
  "Pre-booked 24-hour service for private, corporate, and international travellers",
];

const services = [
  {
    title: "Airport Transfers",
    description:
      "Reliable transfers to and from OR Tambo International Airport and Lanseria International Airport, with punctual pickup planning for peace of mind.",
  },
  {
    title: "Executive Transfers",
    description:
      "Safe, comfortable transport for corporate clients and private travellers across Gauteng and neighbouring provinces.",
  },
  {
    title: "Guided Tours",
    description:
      "Private sightseeing experiences covering Johannesburg, Soweto, Pretoria, and the North West with a focus on history, culture, and landmarks.",
  },
];

const tours = [
  {
    name: "Johannesburg Highlights",
    image: "/apartheid-museum.jpg",
    places: [
      "Hillbrow Tower",
      "Ponte Building",
      "Mandela Bridge",
      "Apartheid Museum",
      "Gold Reef City",
    ],
  },
  {
    name: "Soweto Heritage Tour",
    image: "/soweto.jpg",
    places: [
      "Welcome to Soweto sign",
      "Orlando Towers",
      "Regina Mundi Church",
      "Vilakazi Street",
      "Mandela House",
    ],
  },
  {
    name: "Pretoria Landmarks",
    image: "/statue-of-nelson-mandela.jpg",
    places: [
      "Union Buildings",
      "Church Square",
      "Voortrekker Monument",
      "Historic city centre",
      "Government precinct",
    ],
  },
  {
    name: "North West Escapes",
    image: "/sun-city-day-tour-large.jpg",
    places: [
      "Maropeng",
      "Rhino and Lion Park",
      "Lesedi Cultural Village",
      "Pilanesberg",
      "Sun City",
    ],
  },
];

const weatherStops = [
  { place: "Johannesburg", temp: "14.8°C" },
  { place: "Pretoria", temp: "15.2°C" },
  { place: "Soweto", temp: "14.5°C" },
  { place: "Sandton", temp: "13.9°C" },
  { place: "Lanseria", temp: "12.8°C" },
  { place: "Sun City", temp: "16.1°C" },
];

export default function Home() {
  const [cookieVisible, setCookieVisible] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const currentHeroSlide = heroSlides[activeSlide];

  return (
    <div className="bg-white">
      <section className="relative min-h-[470px] overflow-hidden bg-maroon lg:min-h-[660px]">
        <img
          key={currentHeroSlide.image}
          src={currentHeroSlide.image}
          alt={currentHeroSlide.alt}
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-maroon/38" />
        <div className="relative z-10 mx-auto flex min-h-[470px] max-w-[1440px] items-center justify-center px-6 py-16 text-center text-white md:px-10 lg:min-h-[660px]">
          <div className="max-w-[900px]">
            <p className="mb-6 font-display text-sm uppercase tracking-[0.28em] text-white/75">
              {currentHeroSlide.eyebrow}
            </p>
            <h1 className="uppercase leading-[0.9] text-white">
              <span className="hero-line hero-line-1 block font-[var(--font-hero)] text-6xl tracking-[0.04em] md:text-[7rem] lg:text-[8.5rem]">
                {currentHeroSlide.title}
              </span>
              <span className="hero-line hero-line-2 mt-3 block font-display text-xl tracking-[0.28em] md:text-2xl">
                {currentHeroSlide.subtitle}
              </span>
              <span className="hero-line hero-line-3 mt-4 block font-display text-3xl font-semibold tracking-[0.1em] md:text-5xl lg:text-6xl">
                {currentHeroSlide.highlight}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/88 md:text-lg md:leading-8">
              {currentHeroSlide.description}
            </p>
            <div className="mt-8 flex justify-center gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.highlight}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show hero slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-10 bg-white"
                      : "w-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-black/18 px-6 py-5 backdrop-blur-[2px] md:px-10">
          <p className="mx-auto max-w-[1440px] text-center font-display text-[0.86rem] font-semibold uppercase tracking-[0.24em] text-white/92 md:text-[1rem]">
            YOUR TRUSTED EXECUTIVE TRANSPORT AND TOURS PARTNER IN JOHANNESBURG SINCE 2010
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="relative overflow-hidden border border-maroon/12 bg-[#f7f2f5] p-8 shadow-[0_18px_48px_rgba(76,13,48,0.08)] md:p-12">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-maroon/8 blur-2xl" />
              <p className="font-display text-sm uppercase tracking-[0.24em] text-maroon">
                About Charam Travel
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold uppercase tracking-[0.04em] text-neutral-900 md:text-5xl">
                Executive travel shaped by family ownership, local knowledge, and dependable service.
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {aboutPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex border border-maroon/20 bg-white px-4 py-2 text-[0.72rem] font-display font-semibold uppercase tracking-[0.18em] text-maroon"
                  >
                    {pillar}
                  </span>
                ))}
              </div>

              <div className="mt-10 max-w-4xl space-y-6 text-base leading-8 text-neutral-700 md:text-lg">
                <p>
                  Registered in May 2010, Charam Travel is a proudly family-run,
                  100% black-owned business based in Illovo, Sandton,
                  Johannesburg.
                </p>
                <p>
                  We provide executive transportation including Johannesburg
                  airport transfers, general transfers, and tours across
                  Gauteng and the North West Province. We serve private clients,
                  corporate accounts, and international tourists, with a
                  five-star service experience from the moment you book with us
                  until the end of your trip or tour.
                </p>
                <p>
                  Charam Travel stands for safety, reliability, comfort, and
                  expertise: vetted drivers with professional driving permits,
                  well-maintained and fully insured executive sedans and
                  mini-buses with passenger liability cover, on-time pickups,
                  and pre-booked 24-hour service to fit your schedule.
                  Knowledgeable drivers ensure seamless journeys, while
                  experienced guides deliver unforgettable sightseeing
                  experiences.
                </p>
                <p>
                  We are trusted and proud to work with leading local and
                  international partners. See “Reviews”.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <article className="overflow-hidden border border-maroon/12 bg-white shadow-[0_18px_42px_rgba(76,13,48,0.12)]">
                <div className="relative aspect-[4/4.5] overflow-hidden">
                  <img
                    src="/IMG-20260620-WA0028.jpg"
                    alt="Charam Travel executive vehicle"
                    className="h-full w-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/45 via-maroon/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-white/75">
                      Based In Illovo, Sandton
                    </p>
                    <p className="mt-3 text-2xl font-semibold uppercase tracking-[0.04em] text-white">
                      Executive transport with a local foundation.
                    </p>
                  </div>
                </div>
              </article>

              <article className="border border-neutral-200 bg-white p-8 shadow-[0_12px_32px_rgba(76,13,48,0.06)]">
                <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-neutral-500">
                  Operating Profile
                </p>
                <div className="mt-6 space-y-4">
                  {aboutHighlights.map((item) => (
                    <div
                      key={item}
                      className="border-l-2 border-maroon pl-4 text-base leading-7 text-neutral-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="bg-maroon p-8 text-white shadow-[0_18px_38px_rgba(76,13,48,0.24)]">
                <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-white/70">
                  Our Mission
                </p>
                <p className="mt-5 text-xl leading-9 text-white/92 md:text-2xl">
                  To deliver safe, reliable executive transportation and
                  unforgettable day tours across Gauteng and the North West
                  Province.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f2f5] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
          <svg
            viewBox="0 0 1600 700"
            aria-hidden="true"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M230 510 C380 560, 560 590, 720 520 S1020 360, 950 260 S1180 150, 1320 220"
              fill="none"
              stroke="#111111"
              strokeWidth="7"
              strokeDasharray="18 18"
              strokeLinecap="round"
            />
            <circle cx="230" cy="510" r="10" fill="#4c0d30" />
            <circle cx="1320" cy="220" r="10" fill="#4c0d30" />
            <path
              d="M230 448c-35 0-64 28-64 63 0 51 64 121 64 121s64-70 64-121c0-35-29-63-64-63Zm0 88c-14 0-25-11-25-25s11-25 25-25 25 11 25 25-11 25-25 25Z"
              fill="#4c0d30"
            />
            <path
              d="M1320 85c-46 0-83 37-83 82 0 66 83 157 83 157s83-91 83-157c0-45-37-82-83-82Zm0 114c-18 0-32-14-32-32s14-32 32-32 32 14 32 32-14 32-32 32Z"
              fill="#4c0d30"
            />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm uppercase tracking-[0.24em] text-maroon">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.04em] text-neutral-900 md:text-5xl">
              Travel support built for transfers, tours, and business trips
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col border border-maroon/15 bg-white p-8 shadow-[0_12px_32px_rgba(76,13,48,0.06)]"
              >
                <div className="h-1 w-14 bg-maroon" />
                <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-4">
        <div className="weather-marquee">
          <div className="weather-marquee-track">
            {[...weatherStops, ...weatherStops].map((stop, index) => (
              <div
                key={`${stop.place}-${index}`}
                className="flex shrink-0 items-center gap-3 px-8"
              >
                <span className="text-sm font-display font-semibold uppercase tracking-[0.12em] text-slate-600">
                  {stop.place}
                </span>
                <CloudSun size={18} className="text-[#f2b640]" />
                <span className="text-[1.05rem] font-semibold text-[#2aa361]">
                  {stop.temp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-maroon py-16 text-white md:py-20">
        <img
          src="/highway.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-maroon/60" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-display text-sm uppercase tracking-[0.24em] text-white/70">
                Popular Tours
              </p>
              <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.04em] md:text-5xl">
                Explore the routes clients ask for most
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                From airport pickups to private day tours, Charam Travel covers
                Johannesburg, Soweto, Pretoria, and North West attractions with
                pre-booked scheduling and experienced drivers.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/50 px-8 py-4 text-sm font-display uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-maroon"
            >
              Plan A Booking
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {tours.map((tour) => (
              <article
                key={tour.name}
                className="relative overflow-hidden border border-white/15 bg-white/8"
              >
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/48 to-black/20" />
                <div className="relative z-10 p-8">
                  <h3 className="font-display text-2xl font-semibold uppercase">
                    {tour.name}
                  </h3>
                  <ul className="mt-5 space-y-3 pl-5 text-base leading-7 text-white/90 marker:text-white/75">
                    {tour.places.map((place) => (
                      <li key={place} className="list-disc">
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {cookieVisible && (
        <div className="fixed bottom-6 right-6 z-40 max-w-sm rounded-md bg-maroon p-6 text-white shadow-2xl shadow-black/20">
          <p className="font-display text-2xl font-medium">This website uses cookies.</p>
          <p className="mt-4 text-base leading-7 text-white/90">
            We use cookies to analyze traffic and improve your website
            experience. By accepting, your data will be aggregated with all
            other user data.
          </p>
          <button
            type="button"
            onClick={() => setCookieVisible(false)}
            className="mt-6 w-full border border-white/60 px-4 py-3 text-sm font-display uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-maroon"
          >
            Accept
          </button>
        </div>
      )}
    </div>
  );
}
