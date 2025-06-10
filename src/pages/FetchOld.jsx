import { useEffect, useState } from "react";
import { get } from "../api/axios";

export const FetchOld = () => {
  const [data, setData] = useState([]);

  const axiosData = async () => {
    try {
      const res = await get();

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosData();
  }, []);
  return (
    <section className="axios-section">
      <ul className="axios-data">
        {data.map((value) => {
          const { id, title } = value;
          return (
            <li className="grid" key={id}>
              <h1>{id}</h1>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
