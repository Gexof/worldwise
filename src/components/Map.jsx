import { useNavigate, useSearchParams } from "react-router";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div onClick={() => navigate("form")}>
      <h1>MAP</h1>
      <h1>
        Posistion: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
