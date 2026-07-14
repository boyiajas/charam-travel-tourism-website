import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, MapPinned, WalletCards, Search, ShieldCheck, Car, Users, CheckCircle2, Phone, Mail } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

const airportTransfers = [
  {
    distance: "0 - 15 km",
    destinations: "Benoni, Bruma, Eastgate, Edenvale, Kempton Park",
    sedan: "R 550",
    van: "R 950",
  },
  {
    distance: "16 - 20 km",
    destinations: "Alberton, Houghton",
    sedan: "R 650",
    van: "R 1,150",
  },
  {
    distance: "21 - 25 km",
    destinations: "Joburg CBD, Rosebank, Waterfall, Olifantsfontein",
    sedan: "R 700",
    van: "R 1,250",
  },
  {
    distance: "26 - 30 km",
    destinations: "Midrand CBD, Sandton, Melrose Arch",
    sedan: "R 750",
    van: "R 1,300",
  },
  {
    distance: "31 - 35 km",
    destinations: "Centurion, Irene",
    sedan: "R 850",
    van: "R 1,350",
  },
  {
    distance: "36 - 40 km",
    destinations: "Carlswald, Noordwyk, Montecasino, Southgate",
    sedan: "R 850",
    van: "R 1,390",
  },
  {
    distance: "41 - 45 km",
    destinations: "Randburg CBD, Northgate, Dainfern, Steyn City, Roodepoort Hyper, Maponya Mall, Menlyn, Moreleta",
    sedan: "R 905",
    van: "R 1,490",
  },
  {
    distance: "46 - 50 km",
    destinations: "Roodepoort CBD, Westgate, Pretoria",
    sedan: "R 1,155",
    van: "R 1,570",
  },
  {
    distance: "51 - 55 km",
    destinations: "Lanseria Airport, Roodepoort CBD, Meyerton",
    sedan: "R 1,375",
    van: "R 1,600",
  },
  {
    distance: "56 - 60 km",
    destinations: "Montana, Wonderboom",
    sedan: "R 1,540",
    van: "R 1,800",
  },
  {
    distance: "61 - 70 km",
    destinations: "Vereeniging, Lion & Safari Park, Rhino & Lion Park, Lesedi Cultural Village, Pretoria North",
    sedan: "R 1,760",
    van: "R 2,300",
  },
  {
    distance: "71 - 80 km",
    destinations: "Greater Gauteng Outer Routes & Peripheral Areas",
    sedan: "R 1,925",
    van: "R 2,600",
  },
  {
    distance: "81 - 90 km",
    destinations: "Maropeng, Sterkfontein Caves, Hartbeespoort",
    sedan: "R 2,145",
    van: "R 2,900",
  },
  {
    distance: "91 - 100 km",
    destinations: "Sasolburg",
    sedan: "R 2,420",
    van: "R 3,200",
  },
  {
    distance: "180 km",
    destinations: "Sun City Resort, Pilanesberg National Park",
    sedan: "R 3,600",
    van: "R 4,600",
  },
];

const chauffeurServices = [
  {
    package: "Hourly Chauffeur Service",
    allowance: "Minimum 4 Hours — Maximum 150 km",
    sedan: "R 800 / HR",
    van: "R 1,000 / HR",
  },
  {
    package: "Daily Chauffeur Service",
    allowance: "Maximum 10 Hours — Maximum 200 km",
    sedan: "R 5,500 / DAY",
    van: "R 7,500 / DAY",
  },
];

const serviceNotes = [
  {
    icon: Clock3,
    title: "Pre-Booked Scheduling",
    text: "24-hour executive transfer and chauffeur service is available. Pickups should ideally be booked at least 12 hours in advance.",
  },
  {
    icon: MapPinned,
    title: "Coverage & Destinations",
    text: "Rates cover direct OR Tambo International Airport transfers and chauffeur bookings across Johannesburg, Pretoria, and North West.",
  },
  {
    icon: WalletCards,
    title: "Upfront Payment Required",
    text: "EFT, Card/Debit Cards, and Cash upfront payments are required prior to the start of all passenger transfers or chauffeur tours.",
  },
];

export default function Specials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "transfers" | "chauffeur">("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredTransfers = airportTransfers.filter(
    (item) =>
      item.destinations.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.distance.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      {/* Hero Header */}
      <section className="relative min-h-[300px] overflow-hidden bg-maroon md:min-h-[360px] lg:min-h-[420px] flex items-center justify-center">
        <img
          src="/highway.webp"
          alt="Highway transfer route"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 text-center text-white md:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <Car size={14} className="text-[#f2b640]" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
              Official Tariff Schedule
            </span>
          </div>
          <h1 className="mt-5 uppercase leading-[0.9] text-white">
            <span className="block font-[var(--font-hero)] text-5xl tracking-[0.04em] md:text-7xl lg:text-8xl">
              Transfer & Chauffeur Rates
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/88 md:text-lg">
            Fixed executive transfer rates from OR Tambo International Airport and private chauffeur packages tailored for business and leisure travelers across Gauteng and the North West.
          </p>
        </div>
      </section>

      {/* Main Table Section */}
      <section className="bg-[#f7f2f5] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Controls & Search Bar */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`rounded-full px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] transition ${
                  activeTab === "all"
                    ? "bg-maroon text-white shadow-lg shadow-maroon/25"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                All Rates
              </button>
              <button
                onClick={() => setActiveTab("transfers")}
                className={`rounded-full px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] transition ${
                  activeTab === "transfers"
                    ? "bg-maroon text-white shadow-lg shadow-maroon/25"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                OR Tambo Transfers ({airportTransfers.length})
              </button>
              <button
                onClick={() => setActiveTab("chauffeur")}
                className={`rounded-full px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] transition ${
                  activeTab === "chauffeur"
                    ? "bg-maroon text-white shadow-lg shadow-maroon/25"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                Chauffeur Service ({chauffeurServices.length})
              </button>
            </div>

            {(activeTab === "all" || activeTab === "transfers") && (
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type="text"
                  placeholder="Search destination (e.g. Sandton, Pretoria, Sun City)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-neutral-300 bg-white py-3 pl-11 pr-5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
                />
              </div>
            )}
          </div>

          {/* OR Tambo Airport Transfer Rates Table */}
          {(activeTab === "all" || activeTab === "transfers") && (
            <div className="mb-16">
              <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">
                    OR Tambo International Airport Transfer Rates
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    Rates are per vehicle (one-way). Includes meet & greet at arrivals and luggage assistance.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-maroon md:mt-0">
                  <ShieldCheck size={16} /> Vetted Executive Fleet
                </span>
              </div>

              {/* Desktop Table View */}
              <div className="hidden overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.05)] md:block">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-maroon text-white">
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em] w-36">
                        Distance
                      </th>
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em]">
                        Destinations & Areas Covered
                      </th>
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em] text-right w-44">
                        <div className="flex items-center justify-end gap-2">
                          <Car size={16} className="text-[#f2b640]" />
                          <span>Sedan (1-3 Pax)</span>
                        </div>
                      </th>
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em] text-right w-44">
                        <div className="flex items-center justify-end gap-2">
                          <Users size={16} className="text-[#f2b640]" />
                          <span>Van (1-7 Pax)</span>
                        </div>
                      </th>
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em] text-center w-36">
                        Booking
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-sm">
                    {filteredTransfers.length > 0 ? (
                      filteredTransfers.map((item, i) => (
                        <tr
                          key={item.distance + item.destinations}
                          className={`transition-colors hover:bg-neutral-50 ${
                            i % 2 === 0 ? "bg-white" : "bg-[#fcfafb]"
                          }`}
                        >
                          <td className="px-6 py-5 font-display font-bold text-neutral-900 whitespace-nowrap">
                            <span className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-800 border border-neutral-200">
                              {item.distance}
                            </span>
                          </td>
                          <td className="px-6 py-5 font-medium text-neutral-800 leading-6">
                            {item.destinations}
                          </td>
                          <td className="px-6 py-5 text-right font-display text-base font-bold text-maroon">
                            {item.sedan}
                          </td>
                          <td className="px-6 py-5 text-right font-display text-base font-bold text-neutral-900">
                            {item.van}
                          </td>
                          <td className="px-6 py-5 text-center">
                            <a
                              href={`https://wa.me/27827139660?text=Hello%20Charam%20Travel,%20I%20would%20like%20to%20book%20an%20airport%20transfer%20to%20${encodeURIComponent(item.destinations)}%20(${item.distance}).`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#360821]"
                            >
                              <span>Book</span>
                              <ArrowRight size={12} />
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-neutral-500">
                          No transfer destinations matched "{searchQuery}". Please contact us for custom rates!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card List View */}
              <div className="space-y-4 md:hidden">
                {filteredTransfers.length > 0 ? (
                  filteredTransfers.map((item) => (
                    <div
                      key={item.distance + item.destinations}
                      className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                        <span className="rounded-md bg-neutral-100 px-3 py-1 font-display text-xs font-bold text-neutral-800">
                          {item.distance}
                        </span>
                        <span className="font-display text-xs uppercase tracking-wider text-slate-grey font-semibold">
                          OR Tambo Transfer
                        </span>
                      </div>
                      <p className="mt-3.5 font-medium text-neutral-900 leading-6 text-sm">
                        {item.destinations}
                      </p>
                      <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-[#f7f2f5] p-3.5">
                        <div>
                          <p className="font-display text-[0.68rem] uppercase tracking-wider text-neutral-500 font-semibold">
                            Sedan (1-3 Pax)
                          </p>
                          <p className="mt-0.5 font-display text-lg font-bold text-maroon">
                            {item.sedan}
                          </p>
                        </div>
                        <div>
                          <p className="font-display text-[0.68rem] uppercase tracking-wider text-neutral-500 font-semibold">
                            Van (1-7 Pax)
                          </p>
                          <p className="mt-0.5 font-display text-lg font-bold text-neutral-900">
                            {item.van}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`https://wa.me/27827139660?text=Hello%20Charam%20Travel,%20I%20would%20like%20to%20book%20an%20airport%20transfer%20to%20${encodeURIComponent(item.destinations)}%20(${item.distance}).`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-maroon py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#360821]"
                      >
                        <span>Book via WhatsApp</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-500">
                    No transfer destinations matched "{searchQuery}". Please contact us for custom rates!
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Chauffeur Service Rates Table */}
          {(activeTab === "all" || activeTab === "chauffeur") && (
            <div>
              <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-neutral-900 md:text-3xl">
                    Executive Chauffeur Service
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    Dedicated driver and luxury vehicle at your disposal for business itineraries, meetings, and events.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-maroon md:mt-0">
                  <Clock3 size={16} /> Flexible Scheduling
                </span>
              </div>

              {/* Desktop Table View */}
              <div className="hidden overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.05)] md:block">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-maroon text-white">
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em]">
                        Service Package
                      </th>
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em]">
                        Duration & Distance Allowance
                      </th>
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em] text-right w-44">
                        <div className="flex items-center justify-end gap-2">
                          <Car size={16} className="text-[#f2b640]" />
                          <span>Sedan (1-3 Pax)</span>
                        </div>
                      </th>
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em] text-right w-44">
                        <div className="flex items-center justify-end gap-2">
                          <Users size={16} className="text-[#f2b640]" />
                          <span>Van (1-7 Pax)</span>
                        </div>
                      </th>
                      <th className="px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.18em] text-center w-36">
                        Booking
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-sm">
                    {chauffeurServices.map((item, i) => (
                      <tr
                        key={item.package}
                        className={`transition-colors hover:bg-neutral-50 ${
                          i % 2 === 0 ? "bg-white" : "bg-[#fcfafb]"
                        }`}
                      >
                        <td className="px-6 py-5 font-display font-bold text-neutral-900 text-base">
                          {item.package}
                        </td>
                        <td className="px-6 py-5 font-medium text-neutral-700">
                          {item.allowance}
                        </td>
                        <td className="px-6 py-5 text-right font-display text-base font-bold text-maroon">
                          {item.sedan}
                        </td>
                        <td className="px-6 py-5 text-right font-display text-base font-bold text-neutral-900">
                          {item.van}
                        </td>
                        <td className="px-6 py-5 text-center">
                          <a
                            href={`https://wa.me/27827139660?text=Hello%20Charam%20Travel,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(item.package)}.`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#360821]"
                          >
                            <span>Book</span>
                            <ArrowRight size={12} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card List View */}
              <div className="space-y-4 md:hidden">
                {chauffeurServices.map((item) => (
                  <div
                    key={item.package}
                    className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <span className="font-display text-base font-bold text-neutral-900">
                        {item.package}
                      </span>
                      <span className="rounded-md bg-maroon/10 px-2.5 py-1 font-display text-[0.68rem] font-bold uppercase text-maroon">
                        Chauffeur
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-neutral-700">
                      {item.allowance}
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-[#f7f2f5] p-3.5">
                      <div>
                        <p className="font-display text-[0.68rem] uppercase tracking-wider text-neutral-500 font-semibold">
                          Sedan (1-3 Pax)
                        </p>
                        <p className="mt-0.5 font-display text-lg font-bold text-maroon">
                          {item.sedan}
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-[0.68rem] uppercase tracking-wider text-neutral-500 font-semibold">
                          Van (1-7 Pax)
                        </p>
                        <p className="mt-0.5 font-display text-lg font-bold text-neutral-900">
                          {item.van}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/27827139660?text=Hello%20Charam%20Travel,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(item.package)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-maroon py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#360821]"
                    >
                      <span>Book via WhatsApp</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Booking Notes & Important Terms */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm uppercase tracking-[0.24em] text-maroon font-bold">
              Important Information
            </p>
            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.04em] text-neutral-900 md:text-4xl">
              Terms & Booking Policy
            </h2>
            <div className="mt-4 mx-auto max-w-2xl rounded-2xl border border-maroon/25 bg-maroon/5 p-4 text-left text-sm font-medium text-neutral-800">
              <p className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-maroon shrink-0 mt-0.5" />
                <span>
                  <strong>Approximate Rates:</strong> The transfer rates above are approximate guidelines. The exact amount payable may differ based on specific routing/pickup addresses and will be given when booking.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceNotes.map((note) => (
              <article
                key={note.title}
                className="rounded-[1.75rem] border border-neutral-200 bg-[#fcfafb] p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon text-white">
                  <note.icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wider text-neutral-900">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  {note.text}
                </p>
              </article>
            ))}
          </div>

          {/* Custom Contact Callout Banner */}
          <div className="mt-12 rounded-[2.5rem] bg-maroon p-8 text-white md:p-12 shadow-[0_24px_56px_rgba(76,13,48,0.22)]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-[#f2b640]">
                  Unlisted Destinations & Custom Routes
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
                  Need a transfer destination not listed above?
                </h3>
                <p className="mt-4 text-base leading-7 text-white/85">
                  For all other destinations, corporate daily contracts, multi-passenger delegates, or custom tour itineraries across Southern Africa, please get in touch with our operations desk directly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-end">
                <a
                  href="mailto:bookings@charamtravel.com"
                  className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-white/10 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition hover:bg-white/20 border border-white/25"
                >
                  <Mail size={18} />
                  <span>bookings@charamtravel.com</span>
                </a>
                <a
                  href="https://wa.me/27713255675"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-maroon transition hover:bg-cream hover:shadow-lg"
                >
                  <Phone size={18} />
                  <span>+27 (0)71 325 5675</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
