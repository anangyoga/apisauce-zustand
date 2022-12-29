import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import api from "../config/api";

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    api.get("episode").then((res) => setEpisodes(res.data));
  }, []);

  console.log(episodes);
  return (
    <MainLayout>
      {episodes.results.map((item) => (
        <p>{item.name}</p>
      ))}
    </MainLayout>
  );
};

export default Episode;
