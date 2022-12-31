import { useEffect, useState } from "react";
import Card from "../component/Card";
import api from "../config/api";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

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
      <div className="flex justify-center mt-2 ">
        <input className="p-2 ring-2 rounded-sm" type="text" placeholder="Search characters.." onChange={(e) => setQuery(e.target.value)} />
      </div>
      <MainLayout>
        {data
          .filter((item) => item.name.toLowerCase().includes(query))
          .map((item) => (
            <Card item={item} />
          ))}
      </MainLayout>
    </>
  );
};

export default Home;
