import { MapPin } from "lucide-react";
import CityItem from "./CityItem";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return (
      <p className="py-8 text-center text-sm text-gray-400">
        Loading cities...
      </p>
    );
  }

  if (!cities.length) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <MapPin size={36} className="mb-4 text-gray-500" />

        <h3 className="mb-2 text-base font-semibold text-white">
          No cities yet
        </h3>

        <p className="max-w-xs text-sm leading-relaxed text-gray-400">
          Add your first city by clicking on a city on the map.
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
