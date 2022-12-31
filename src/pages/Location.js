import { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import api from "../config/api";

const Location = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    api.get("location").then((res) => setLocations(res.data?.results));
  }, []);

  return (
    <>
      <h1
        className="text-3xl font-bold  text-emerald-500 text-center
      mt-2 "
      >
        Locations
      </h1>

      <MainLayout>
        {locations.map((item) => (
          <div className="border rounded-lg max-w-md shadow-md p-4">
            <p>Name: {item.name}</p>
            <p>Type: {item.type}</p>
          </div>
        ))}
      </MainLayout>
    </>
  );
};

export default Location;
