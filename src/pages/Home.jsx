import { Link } from "react-router";
import { ArrowRight, Globe2, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main
      className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#15191C]/65" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center pb-20 text-center  px-6">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00C46A]/30 bg-[#00C46A]/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#00C46A] backdrop-blur-sm">
          <Globe2 size={15} />
          YOUR WORLD, YOUR STORIES
        </div>

        <h1 className="mb-7 max-w-5xl text-4xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl">
          You travel the world.
          <span className="mt-2 block text-[#00C46A]">
            Worldwise keeps track
          </span>
          of your adventures.
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and share the story of
          every place you've explored.
        </p>

        <Link
          to="/login"
          className="group inline-flex items-center gap-3 rounded-xl bg-[#00C46A] px-8 py-4 text-sm font-bold text-[#242A2E] shadow-lg shadow-[#00C46A]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A85A] hover:shadow-xl hover:shadow-[#00C46A]/20"
        >
          Start Tracking Now
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-400">
          <span className="text-[10px] font-semibold tracking-[0.2em]">
            DISCOVER WORLDWISE
          </span>
          <ChevronDown size={18} className="animate-bounce text-[#00C46A]" />
        </div>
      </section>
    </main>
  );
}

export default Home;
