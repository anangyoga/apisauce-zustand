import { useEffect, useState } from "react";
import Card from "../component/Card";
import api from "../config/api";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("character").then((res) => setData(res.data.results));
  }, []);
  return (
    <>
      <h1
        className="text-3xl font-bold  text-emerald-500 text-center
      mt-2 "
      >
        Characters
      </h1>
      <MainLayout>
        {data.map((item) => (
          <Card item={item} />
        ))}
      </MainLayout>
    </>
  );
};

export default Home;
