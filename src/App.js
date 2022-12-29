import { useEffect, useState } from "react";
import Card from "./component/Card";
import api from "./config/api";
import "./index.css";

const App = () => {
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
        apisauce & zustand
      </h1>
      <main className="mt-4 p-6 grid grid-cols-5 gap-4">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </main>
    </>
  );
};

export default App;
