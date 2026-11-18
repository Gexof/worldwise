// App.jsx
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useNavigation,
} from "react-router";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import Loader from "./components/Loader";
import NavigationLoader from "./components/NavigationLoader";

const page = (importFn) => async () => ({
  Component: (await importFn()).default,
});

function Root() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <NavigationLoader />}
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Root />,
    hydrateFallbackElement: <Loader />,
    children: [
      { index: true, lazy: page(() => import("./pages/Home")) },
      { path: "product", lazy: page(() => import("./pages/Product")) },
      { path: "pricing", lazy: page(() => import("./pages/Pricing")) },
      { path: "login", lazy: page(() => import("./pages/Login")) },
      {
        path: "app",
        lazy: async () => {
          const AppLayout = (await import("./pages/AppLayout")).default;
          return {
            Component: () => (
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            ),
          };
        },
        children: [
          { index: true, element: <Navigate to="cities" replace /> },
          { path: "cities", element: <CityList /> },
          { path: "cities/:id", element: <City /> },
          { path: "countries", element: <CountryList /> },
          { path: "form", element: <Form /> },
        ],
      },
      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <RouterProvider router={router} />
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
