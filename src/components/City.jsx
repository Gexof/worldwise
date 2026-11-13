import { CalendarDays, StickyNote } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useCities } from "../contexts/CitiesContext";
import BackButton from "./BackButton";

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d)) return "";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
};

function City() {
  const { id } = useParams();

  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id]);

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) {
    return (
      <p className="py-8 text-center text-sm text-gray-400">Loading city...</p>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#2D3439] p-6 text-white shadow-lg">
      {/* City Header */}
      <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#242A2E]">
          <span className={`fi fi-${emoji?.toLowerCase()} text-4xl`}></span>
        </div>

        <div className="min-w-0">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C46A]">
            City
          </p>

          <h2 className="truncate text-2xl font-bold tracking-tight">
            {cityName}
          </h2>
        </div>
      </div>

      {/* Visit Date */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00C46A]/10">
          <CalendarDays size={19} className="text-[#00C46A]" />
        </div>

        <div className="min-w-0 pt-0.5">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            You visited {cityName} on
          </p>

          <time className="text-sm font-semibold text-gray-200">
            {formatDate(date)}
          </time>
        </div>
      </div>

      {/* Notes */}
      <div className="mb-8 flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00C46A]/10">
          <StickyNote size={19} className="text-[#00C46A]" />
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            Your notes
          </p>

          <p className="rounded-lg border border-white/5 bg-[#242A2E]/60 p-4 text-sm leading-7 text-gray-300">
            {notes || "No notes added for this city yet."}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-5">
        <BackButton />
      </div>
    </div>
  );
}

export default City;
