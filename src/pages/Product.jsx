import { ArrowRight, MapPin, Globe2, CalendarDays } from "lucide-react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

function Product() {
  return (
    <div className="min-h-screen bg-[#242A2E] text-white">
      <Navbar />

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00C46A]/20 bg-[#00C46A]/10 px-4 py-2 text-xs font-semibold text-[#00C46A]">
              <Globe2 size={15} />
              YOUR PERSONAL TRAVEL COMPANION
            </span>

            <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
              Explore the world,
              <span className="block text-[#00C46A]">one city at a time.</span>
            </h1>

            <p className="mb-8 max-w-lg text-base leading-8 text-gray-400">
              Keep track of every city you've visited, save your travel
              memories, and build your own personal map of adventures around the
              world.
            </p>

            <Link
              to="/login"
              className="inline-flex items-center gap-3 rounded-xl bg-[#00C46A] px-6 py-3.5 text-sm font-bold text-[#242A2E] transition-all hover:bg-[#00A85A] hover:shadow-lg hover:shadow-[#00C46A]/10"
            >
              Start exploring
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Preview */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#00C46A]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2D3439] p-3 shadow-2xl">
              <img
                src="/worldwise-preview.jpg"
                alt="Worldwise travel map preview"
                className="h-100 w-full rounded-xl object-cover"
              />

              <div className="absolute right-7 bottom-7 left-7 flex items-center gap-3 rounded-xl border border-white/10 bg-[#242A2E]/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#00C46A]/10">
                  <MapPin className="text-[#00C46A]" size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold">Your travel history</p>
                  <p className="mt-1 text-xs text-gray-400">
                    Every journey has a story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mt-28">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#00C46A]">
              DISCOVER WORLDWISE
            </p>

            <h2 className="text-3xl font-bold tracking-tight">
              Your journeys, all in one place.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
              A simple way to remember where you've been and keep your travel
              experiences organized.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Feature
              icon={<MapPin size={22} />}
              title="Track your cities"
              description="Mark every city you've visited and see all your adventures on one interactive map."
            />

            <Feature
              icon={<Globe2 size={22} />}
              title="Explore countries"
              description="Discover your travel footprint and keep track of the countries you've explored."
            />

            <Feature
              icon={<CalendarDays size={22} />}
              title="Save your memories"
              description="Add visit dates and personal notes to remember every special trip."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#2D3439] p-6 transition-all hover:-translate-y-1 hover:border-[#00C46A]/40">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00C46A]/10 text-[#00C46A]">
        {icon}
      </div>

      <h3 className="mb-3 text-lg font-semibold">{title}</h3>

      <p className="text-sm leading-7 text-gray-400">{description}</p>
    </div>
  );
}

export default Product;
