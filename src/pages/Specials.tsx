import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, MapPinned, WalletCards } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

const specials = [
  {
    title: "The Sandton Executive",
    price: "From R650",
    description:
      "Fixed airport transfer from OR Tambo to Sandton, Illovo, and nearby business districts with meet-and-greet support.",
    category: "Airport Transfer",
    tag: "Most Popular",
    features: [
      "Meet and greet included",
      "Luggage assistance",
      "Ideal for executives and visitors",
    ],
  },
  {
    title: "Gauteng Heritage Tour",
    price: "R3,200",
    description:
      "A private day tour covering key Johannesburg and Soweto highlights for guests who want a guided cultural route.",
    category: "Day Tour",
    tag: "Tour Offer",
    features: [
      "Private driver guide",
      "Flexible pickup schedule",
      "Great for small groups",
    ],
  },
  {
    title: "Early Booking Saver",
    price: "15% Off",
    description:
      "Book at least seven days in advance for selected transfer services and secure a better fixed rate.",
    category: "Advance Booking",
    tag: "Best Value",
    features: [
      "Better planning window",
      "Priority scheduling",
      "Applies to selected trips",
    ],
  },
  {
    title: "Pretoria Business Run",
    price: "R1,100",
    description:
      "Fast point-to-point travel from Johannesburg to Pretoria for early meetings, official visits, and same-day return trips.",
    category: "Executive Transfer",
    tag: "Business Travel",
    features: [
      "Direct route planning",
      "Pre-booked pickup",
      "Reliable same-day service",
    ],
  },
];

const serviceNotes = [
  {
    icon: Clock3,
    title: "Pre-Booked Scheduling",
    text: "24-hour service is available, with pickups ideally booked at least 12 hours in advance.",
  },
  {
    icon: MapPinned,
    title: "Coverage Area",
    text: "Transfers and tours across Johannesburg, Pretoria, Gauteng, and selected North West routes.",
  },
  {
    icon: WalletCards,
    title: "Custom Quotes",
    text: "Need a fleet rate, group arrangement, or regular company booking? We can quote directly for it.",
  },
];

export default function Specials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      <section className="relative h-[220px] w-full overflow-hidden md:h-[260px] lg:h-[300px]">
        <img
          src="/highway.webp"
          alt="Highway route background"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-white/12" />
      </section>

      <section className="bg-[#f7f2f5] py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {specials.map((offer) => (
              <article
                key={offer.title}
                className="flex h-full flex-col justify-between border border-maroon/15 bg-white p-8 shadow-[0_12px_32px_rgba(76,13,48,0.06)]"
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex bg-maroon px-4 py-2 text-[0.68rem] font-display uppercase tracking-[0.18em] text-white">
                        {offer.tag}
                      </span>
                      <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[0.03em] text-neutral-900">
                        {offer.title}
                      </h2>
                    </div>
                    <div className="text-left lg:text-right">
                      <p className="text-3xl font-semibold text-maroon">{offer.price}</p>
                      <p className="mt-1 text-[0.72rem] font-display uppercase tracking-[0.18em] text-neutral-500">
                        {offer.category}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-7 text-neutral-700">
                    {offer.description}
                  </p>

                  <ul className="mt-6 space-y-3 pl-5 text-base leading-7 text-neutral-700 marker:text-maroon">
                    {offer.features.map((feature) => (
                      <li key={feature} className="list-disc">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/27827139660"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-3 border border-maroon/30 px-6 py-4 text-sm font-display uppercase tracking-[0.18em] text-maroon transition hover:bg-maroon hover:text-white"
                >
                  Inquire Now
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-18">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm uppercase tracking-[0.24em] text-maroon">
              Booking Notes
            </p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.04em] text-neutral-900 md:text-5xl">
              Useful information before you confirm
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceNotes.map((note) => (
              <article
                key={note.title}
                className="border border-neutral-200 bg-white p-8"
              >
                <note.icon size={24} className="text-maroon" />
                <h3 className="mt-5 text-2xl font-semibold uppercase tracking-[0.03em] text-neutral-900">
                  {note.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-700">
                  {note.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-maroon py-16 text-white md:py-20">
        <img
          src="/highway.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-maroon/70" />
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-8 px-6 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-sm uppercase tracking-[0.24em] text-white/70">
              Custom Requests
            </p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.04em] md:text-5xl">
              Need a route or tour that is not listed here?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/82">
              We also handle tailored airport bookings, corporate movements,
              group travel, and special itineraries built around your pickup
              times and destination list.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-white/50 px-8 py-4 text-sm font-display uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-maroon"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
