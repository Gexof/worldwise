import { useEffect, useState } from "react";
import {
  CalendarDays,
  MapPin,
  StickyNote,
  Globe2,
  LoaderCircle,
} from "lucide-react";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [lat, lng] = useUrlPosition();

  const { createCity, isLoading } = useCities();

  const navigate = useNavigate();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [geoCodingError, setGeoCodingError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji: countryCode,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate("/app");
  }

  useEffect(() => {
    const fetchCityData = async () => {
      if (!lat && !lng) return;

      try {
        setIsLoadingGeoCoding(true);
        setGeoCodingError("");

        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);

        const data = await res.json();

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else.",
          );

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setCountryCode(data.countryCode);
      } catch (error) {
        setGeoCodingError(error.message);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    };

    fetchCityData();
  }, [lat, lng]);

  if (!lat || !lng) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#2D3439] px-6 py-12 text-center text-white shadow-lg">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00C46A]/10">
          <MapPin size={26} className="text-[#00C46A]" />
        </div>

        <h3 className="mb-2 text-lg font-semibold">Select a location</h3>

        <p className="max-w-xs text-sm leading-relaxed text-gray-400">
          Click anywhere on the map to select a city and start adding it to your
          visited places.
        </p>

        <div className="mt-5"></div>
      </div>
    );
  }

  if (geoCodingError) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-[#2D3439] p-6 text-center text-white shadow-lg">
        <p className="mb-2 text-sm font-semibold text-red-400">
          Location not found
        </p>

        <p className="mb-5 text-sm text-gray-400">{geoCodingError}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#2D3439] p-6 text-white shadow-lg"
    >
      {/* City */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="cityName"
          className="text-xs font-semibold uppercase tracking-wider text-gray-400"
        >
          City name
        </label>

        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00C46A]"
          />

          <input
            id="cityName"
            type="text"
            placeholder="Enter city name..."
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#242A2E] py-3 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#00C46A] focus:ring-1 focus:ring-[#00C46A]/30"
            required
          />
        </div>

        {isLoadingGeoCoding && (
          <p className="flex items-center gap-2 text-xs text-gray-500">
            <LoaderCircle size={13} className="animate-spin text-[#00C46A]" />
            Detecting location...
          </p>
        )}
      </div>

      {/* Country */}
      {country && (
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Country
          </label>

          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#242A2E] px-4 py-3">
            <span
              className={`fi fi-${countryCode.toLowerCase()} text-xl`}
            ></span>

            <span className="text-sm font-medium text-gray-300">{country}</span>

            <Globe2 size={16} className="ml-auto text-gray-500" />
          </div>
        </div>
      )}

      {/* Date */}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="date"
          className="text-xs font-semibold uppercase tracking-wider text-gray-400"
        >
          When did you go to {cityName || "this city"}?
        </label>

        <div className="relative w-full">
          <CalendarDays
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-[#00C46A]"
          />

          <DatePicker
            id="date"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
            calendarClassName="worldwise-calendar"
            wrapperClassName="w-full"
            className="w-full rounded-lg border border-white/10 bg-[#242A2E] py-3 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-[#00C46A] focus:ring-1 focus:ring-[#00C46A]/30"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="notes"
          className="text-xs font-semibold uppercase tracking-wider text-gray-400"
        >
          Notes about your trip to {cityName || "this city"}
        </label>

        <div className="relative">
          <StickyNote
            size={18}
            className="absolute left-3 top-3 text-[#00C46A]"
          />

          <textarea
            id="notes"
            placeholder="What did you enjoy about this place?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full resize-none rounded-lg border border-white/10 bg-[#242A2E] py-3 pl-10 pr-4 text-sm leading-relaxed text-white outline-none transition-all placeholder:text-gray-600 focus:border-[#00C46A] focus:ring-1 focus:ring-[#00C46A]/30"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 border-t border-white/10 pt-5">
        <button
          type="submit"
          disabled={isLoading}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#00C46A] px-5 py-3 text-sm font-semibold text-[#242A2E] transition-all hover:bg-[#00A85A] hover:shadow-lg hover:shadow-[#00C46A]/10 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <LoaderCircle size={16} className="animate-spin" />
              Adding...
            </>
          ) : (
            "Add to visited cities"
          )}
        </button>

        <BackButton />
      </div>
    </form>
  );
}

export default Form;
