import { CalendarDays, MapPin, StickyNote } from "lucide-react";
import { useParams } from "react-router";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function City() {
  const { id } = useParams();

  //   const { cityName, emoji, date, notes } = currCity;

  return <p>{id}</p>;

  //   return (
  //     <div className="rounded-xl border border-white/10 bg-[#2D3439] p-6 text-white">
  //       {/* City Header */}
  //       <div className="mb-6 flex items-center gap-4">
  //         <span className="text-5xl">{emoji}</span>

  //         <div>
  //           <p className="mb-1 text-xs font-medium uppercase tracking-widest text-gray-500">
  //             City
  //           </p>

  //           <h2 className="text-2xl font-bold">{cityName}</h2>
  //         </div>
  //       </div>

  //       {/* Visit Date */}
  //       <div className="mb-6 flex items-start gap-3">
  //         <CalendarDays size={20} className="mt-0.5 text-[#00C46A]" />

  //         <div>
  //           <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
  //             You went to {cityName} on
  //           </p>

  //           <time className="text-sm font-medium text-gray-200">
  //             {formatDate(date)}
  //           </time>
  //         </div>
  //       </div>

  //       {/* Notes */}
  //       <div className="flex items-start gap-3">
  //         <StickyNote size={20} className="mt-0.5 text-[#00C46A]" />

  //         <div className="min-w-0">
  //           <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
  //             Your notes
  //           </p>

  //           <p className="text-sm leading-relaxed text-gray-300">
  //             {notes || "No notes added for this city yet."}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default City;
