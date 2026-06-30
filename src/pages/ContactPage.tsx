import { useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock3 } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || "";
const hasValidKey = Boolean(API_KEY) && API_KEY !== "YOUR_API_KEY";

const contactCards = [
  {
    icon: Mail,
    title: "Email Bookings",
    detail: "bookings@charamtravel.com",
  },
  {
    icon: Phone,
    title: "Call or WhatsApp",
    detail: "+27 (0) 82 713 9660",
  },
  {
    icon: MapPin,
    title: "Service Base",
    detail: "Johannesburg, Gauteng",
  },
  {
    icon: Clock3,
    title: "Availability",
    detail: "Pre-booked service, 24/7 support",
  },
];

export default function ContactPage() {
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((item) => (
              <article
                key={item.title}
                className="border border-maroon/15 bg-white p-8 shadow-[0_12px_32px_rgba(76,13,48,0.06)]"
              >
                <item.icon size={24} className="text-maroon" />
                <h2 className="mt-5 text-2xl font-semibold uppercase tracking-[0.03em] text-neutral-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-700">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border border-neutral-200 bg-white p-8 md:p-10">
            <p className="font-display text-sm uppercase tracking-[0.24em] text-maroon">
              Send A Message
            </p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.04em] text-neutral-900 md:text-5xl">
              Share your travel details
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-700">
              Include your date, time, pickup point, destination, and passenger
              numbers so we can respond with the right vehicle and timing.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-display uppercase tracking-[0.18em] text-neutral-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-neutral-200 bg-white px-5 py-4 text-neutral-900 outline-none transition focus:border-maroon"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-display uppercase tracking-[0.18em] text-neutral-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-neutral-200 bg-white px-5 py-4 text-neutral-900 outline-none transition focus:border-maroon"
                    placeholder="j.doe@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-display uppercase tracking-[0.18em] text-neutral-500">
                  Service Type
                </label>
                <select className="w-full appearance-none border border-neutral-200 bg-white px-5 py-4 text-neutral-900 outline-none transition focus:border-maroon">
                  <option>Airport Transfer</option>
                  <option>Executive Transfer</option>
                  <option>Private Tour</option>
                  <option>Corporate Contract</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-display uppercase tracking-[0.18em] text-neutral-500">
                  Trip Details
                </label>
                <textarea
                  rows={6}
                  className="w-full resize-none border border-neutral-200 bg-white px-5 py-4 text-neutral-900 outline-none transition focus:border-maroon"
                  placeholder="Pickup date, time, route, passenger count, luggage, or any special requests."
                />
              </div>

              <button className="inline-flex w-full items-center justify-center gap-3 bg-maroon px-6 py-4 text-sm font-display uppercase tracking-[0.18em] text-white transition hover:bg-maroon/90">
                Submit Inquiry
                <Send size={16} />
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="border border-neutral-200 bg-[#f7f2f5] p-8 md:p-10">
              <p className="font-display text-sm uppercase tracking-[0.24em] text-maroon">
                Office and Support
              </p>
              <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.04em] text-neutral-900">
                Easy to reach for pre-booked transport
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-neutral-700">
                <p>
                  Bookings email:
                  <br />
                  <span className="font-semibold text-neutral-900">
                    bookings@charamtravel.com
                  </span>
                </p>
                <p>
                  Phone and WhatsApp:
                  <br />
                  <span className="font-semibold text-neutral-900">
                    +27 (0) 82 713 9660
                  </span>
                </p>
                <p>
                  Operating region:
                  <br />
                  <span className="font-semibold text-neutral-900">
                    Johannesburg, Pretoria, Gauteng, and selected North West routes
                  </span>
                </p>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden border border-neutral-200 bg-white">
              {!hasValidKey ? (
                <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-50 p-10 text-center">
                  <MapPin size={48} className="mb-5 text-maroon/35" />
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.03em] text-neutral-900">
                    Location Map
                  </h3>
                  <p className="mt-4 max-w-sm text-base leading-7 text-neutral-700">
                    Add your `GOOGLE_MAPS_PLATFORM_KEY` to show the interactive
                    office location here.
                  </p>
                  <div className="mt-6 border border-neutral-200 bg-white px-4 py-3 text-[0.72rem] font-display uppercase tracking-[0.18em] text-neutral-700">
                    35 Fricker Road, Illovo, Johannesburg
                  </div>
                </div>
              ) : (
                <APIProvider apiKey={API_KEY} version="weekly">
                  <Map
                    defaultCenter={{ lat: -26.1311, lng: 28.0475 }}
                    defaultZoom={15}
                    mapId="DEMO_MAP_ID"
                    internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
                    style={{ width: "100%", height: "100%" }}
                    disableDefaultUI={true}
                  >
                    <AdvancedMarker position={{ lat: -26.1311, lng: 28.0475 }}>
                      <Pin
                        background="#4c0d30"
                        glyphColor="#fff"
                        borderColor="#3d0a27"
                      />
                    </AdvancedMarker>
                  </Map>
                </APIProvider>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
