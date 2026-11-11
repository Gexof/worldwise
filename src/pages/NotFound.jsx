import { Link } from "react-router";
import { Compass, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#242A2E] text-white">
      <Navbar />

      <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
        <div className="relative mb-6">
          <span className="text-[140px] font-bold leading-none tracking-tighter text-[#2D3439]">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#00C46A]/20 bg-[#00C46A]/10 text-[#00C46A]">
              <Compass size={42} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <h1 className="mb-3 text-2xl font-bold sm:text-3xl">Lost your way?</h1>

        <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
          Looks like this page doesn't exist. Don't worry, there's still a whole
          world waiting for you to explore.
        </p>

        <Link
          to="/"
          className="flex items-center gap-2 rounded-lg bg-[#00C46A] px-6 py-3 text-sm font-semibold text-[#242A2E] transition-colors hover:bg-[#00A85A]"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </main>
    </div>
  );
}

export default NotFound;
