import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:3000";

const CitiesContext = createContext();

const initalState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unkown action type");
  }
}

function CitiesProvider({ children }) {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  const [{ cities, isLoading, currentCity }, disptach] = useReducer(
    reducer,
    initalState,
  );

  useEffect(() => {
    const fetchCities = async () => {
      disptach({
        type: "loading",
      });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        disptach({ type: "cities/loaded", payload: data });
      } catch (error) {
        disptach({
          type: "rejected",
          payload: `${error} failed to fetch data`,
        });
      }
    };

    fetchCities();
  }, []);

  async function getCity(id) {
    if (Number(id) === currentCity.id) return;

    disptach({
      type: "loading",
    });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      disptach({ type: "city/loaded", payload: data });
    } catch (error) {
      disptach({
        type: "rejected",
        payload: `${error} failed to fetch city`,
      });
    }
  }

  async function createCity(newCity) {
    disptach({
      type: "loading",
    });

    try {
      const res = await fetch(`${BASE_URL}/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      disptach({ type: "city/created", payload: data });
    } catch (error) {
      disptach({
        type: "rejected",
        payload: `${error} Error while adding city`,
      });
    }
  }

  async function deleteCity(id) {
    disptach({
      type: "loading",
    });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      disptach({ type: "city/deleted", payload: id });
    } catch (error) {
      disptach({
        type: "rejected",
        payload: `${error} Error for deleting city`,
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("Cities context used outside the cities provider");

  return context;
}

export { CitiesProvider, useCities };
