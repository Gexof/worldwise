import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

function AppLayout() {
  return (
    <div className="relative flex h-screen overflow-hidden">
      <Sidebar />

      <div className="relative flex-1">
        <Map />

        <div className="absolute right-6 top-6 z-1000">
          <User />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
