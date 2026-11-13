import { useNavigate, useSearchParams } from "react-router";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useGeolocation } from "../hooks/useGeoLocation";
import { LocateFixed, LoaderCircle } from "lucide-react";
import { useUrlPosition } from "../hooks/useUrlPosition";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geoLocationPosition)
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
  }, [geoLocationPosition]);

  return (
    <div className="relative h-full min-w-0 flex-1 overflow-hidden bg-[#242A2E] p-3">
      {!geoLocationPosition && (
        <button
          onClick={getPosition}
          disabled={isLoadingPosition}
          className="absolute bottom-7 left-1/2 z-1000 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-white/10 bg-[#242A2E]/95 px-4 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur-md transition-all hover:border-[#00C46A]/50 hover:bg-[#2D3439] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoadingPosition ? (
            <LoaderCircle size={18} className="animate-spin text-[#00C46A]" />
          ) : (
            <LocateFixed size={18} className="text-[#00C46A]" />
          )}

          {isLoadingPosition ? "Getting location..." : "Use my position"}
        </button>
      )}

      <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        <MapContainer
          center={mapPosition}
          zoom={6}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
              icon={customIcon}
            >
              <Popup>
                <div className="text-sm font-medium text-[#242A2E]">
                  <span>{city.cityName}</span>
                </div>
              </Popup>
            </Marker>
          ))}

          <ChangeCenter position={mapPosition} />
          <DetectClick />
        </MapContainer>
      </div>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, 8);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
