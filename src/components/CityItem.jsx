import { Link } from "react-router";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className="group flex items-center gap-3 rounded-xl border border-white/10 border-l-4 border-l-[#00C46A] bg-[#2D3439] px-4 py-3 text-white transition-all hover:bg-[#343C42]"
      >
        <span className="text-2xl">{emoji}</span>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold">{cityName}</h3>

          <time className="mt-1 block text-xs text-gray-400">
            {formatDate(date)}
          </time>
        </div>

        <button
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg text-gray-500 transition-colors hover:bg-red-500/10 hover:text-red-400"
          aria-label={`Delete ${cityName}`}
        >
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
