import { get } from "../api/axios";
import { useQuery } from "@tanstack/react-query";

export const FetchRq = () => {
  const axiosData = async () => {
    try {
      const res = await get();

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };



  const { data, isLoading } = useQuery({
    queryKey: ["post"], //it work as an useState hook
    queryFn: axiosData, //it work as an use Effect hook
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
