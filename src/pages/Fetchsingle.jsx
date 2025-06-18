import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingle } from "../api/axios";

export const FetchSingle = () => {
  const { id } = useParams();
  console.log(id);

  //   const fetch = () => {};
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getSingle(id),
  });

  console.log(data);

  return (
    <section className="axios-section">
      <h1 style={{ margin: "1rem" }}>Hello user {id}</h1>
      <div className="grid">
        <h2>user id:{data.id}</h2>
        <p>Title : {data.title} </p>
      </div>
    </section>
  );
};
