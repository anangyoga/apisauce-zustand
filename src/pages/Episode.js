import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import api from "../config/api";

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    api.get("episode").then((res) => setEpisodes(res.data?.results));
  }, []);

  console.log(episodes, "yuk");
  return (
    <>
      <h1
        className="text-3xl font-bold  text-emerald-500 text-center
      mt-2 "
      >
        Episodes
      </h1>

      <MainLayout>
        {episodes.map((item) => (
          <div className="border rounded-lg max-w-md shadow-md p-4">
            <p>Episode: {item.episode}</p>
            <p>Title: {item.name}</p>
          </div>
        ))}
      </MainLayout>
    </>
  );
};

export default Episode;
