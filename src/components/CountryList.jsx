import { Globe } from "lucide-react";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return (
      <p className="py-8 text-center text-sm text-gray-400">
        Loading countries...
      </p>
    );
  }

  if (!cities.length) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <Globe size={36} className="mb-4 text-gray-500" />

        <h3 className="mb-2 text-base font-semibold text-white">
          No countries yet
        </h3>

        <p className="max-w-xs text-sm leading-relaxed text-gray-400">
          Add your first city by clicking on a city on the map.
        </p>
      </div>
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }

    return arr;
  }, []);

  return (
    <ul className="flex flex-col gap-3">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
