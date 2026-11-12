import { Link } from "react-router";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  const isActive = id === currentCity?.id;

  return (
    <li
      className={`group flex items-center gap-3 rounded-xl border bg-[#2D3439] px-4 py-3 text-white transition-all hover:bg-[#343C42] ${
        isActive
          ? "border-[#00C46A]"
          : "border-white/10 border-l-4 border-l-[#00C46A]"
      }`}
    >
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className="flex min-w-0 flex-1 items-center gap-3"
      >
        <span className="text-2xl">{emoji}</span>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold">{cityName}</h3>

          <time className="mt-1 block text-xs text-gray-400">
            {formatDate(date)}
          </time>
        </div>
      </Link>

      <button
        type="button"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg text-gray-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
        aria-label={`Delete ${cityName}`}
      >
        &times;
      </button>
    </li>
  );
}

export default CityItem;
