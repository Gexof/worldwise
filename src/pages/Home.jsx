import { Link } from "react-router";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main
      className="relative flex min-h-screen flex-col bg-cover bg-center bg-no-repeat px-6 text-white"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          You travel the world.
          <br />
          Worldwise keeps track of your adventures.
        </h1>

        <h2 className="mb-10 max-w-2xl text-base leading-relaxed text-gray-200 md:text-xl">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Link
          to="/app"
          className="rounded-lg bg-[#00C46A] px-8 py-4 font-semibold text-[#2D3439] transition-all duration-300 hover:bg-[#00A85A] hover:shadow-lg hover:shadow-green-500/20"
        >
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}

export default Home;
