import { useState } from "react";
import { ArrowLeft, CalendarDays, MapPin, StickyNote } from "lucide-react";
import { useNavigate } from "react-router";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-xl border border-white/10 bg-[#2D3439] p-5 text-white"
    >
      {/* City */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cityName" className="text-sm font-medium text-gray-300">
          City name
        </label>

        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            id="cityName"
            type="text"
            placeholder="Enter city name..."
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#242A2E] py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[#00C46A]"
            required
          />
        </div>
      </div>

      {/* Country */}
      {country && (
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Country</label>

          <input
            type="text"
            value={country}
            readOnly
            className="w-full rounded-lg border border-white/10 bg-[#242A2E] px-4 py-3 text-sm text-gray-400 outline-none"
          />
        </div>
      )}

      {/* Date */}
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-sm font-medium text-gray-300">
          When did you go to {cityName || "this city"}?
        </label>

        <div className="relative">
          <CalendarDays
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#242A2E] py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors focus:border-[#00C46A] [color-scheme:dark]"
            required
          />
        </div>
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="text-sm font-medium text-gray-300">
          Notes about your trip to {cityName || "this city"}
        </label>

        <div className="relative">
          <StickyNote
            size={18}
            className="absolute left-3 top-3 text-gray-500"
          />

          <textarea
            id="notes"
            placeholder="What did you enjoy about this place?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full resize-none rounded-lg border border-white/10 bg-[#242A2E] py-3 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[#00C46A]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="flex-1 rounded-lg bg-[#00C46A] px-5 py-3 text-sm font-semibold text-[#242A2E] transition-colors hover:bg-[#00A85A]"
        >
          Add
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>
    </form>
  );
}

export default Form;
