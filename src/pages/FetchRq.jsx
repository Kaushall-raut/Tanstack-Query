import { NavLink } from "react-router-dom";
import { deleteData, get, updateData } from "../api/axios";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";

export const FetchRq = () => {
  const [pageNumber, setNumber] = useState(0);

  const axiosData = async () => {
    try {
      const res = await get(pageNumber);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["post", pageNumber], //it work as an useState hook  note-after passing pagenumber it will recall the function whenever its value gets changed
    queryFn: axiosData, //it work as an use Effect hook  note- if you are not passing anything then dont use parenthesis with function name
    // gcTime: 10000, //clear local cache after every 10 sec

    // staleTime: 10000, // stale the api data after 10 sec after 10 sec it will again hit the api for new data
    placeholderData: keepPreviousData, //it will keep the previous page data so it will not hit the api again
    // refetchInterval: 2000, //hit api after every 2 seconds known as polling it tanstack query
    refetchIntervalInBackground: 2000, //hit api after 2 second even user is on another tab
  });

  const mutation = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["post", pageNumber], (value) => {
        return value?.filter((current) => {
          return current.id !== id;
        });
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: (id) => updateData(id),
    onSuccess: (data, id) => {
      console.log(data);

      queryClient.setQueryData(["post", pageNumber], (value) => {
        return value?.map((updateValue) => {
          return updateValue.id === id
            ? { ...updateValue, title: data.data.title } //updating front end
            : updateValue;
        });
      });
    },
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
              <NavLink to={`/reactquery/${id}`}>
                <h1>{id}</h1>
                <p>{title}</p>
              </NavLink>
              <div>
                <button className="dlt" onClick={() => mutation.mutate(id)}>
                  delete
                </button>
                <button
                  className="dlt"
                  onClick={() => updateMutation.mutate(id)}
                >
                  update
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="section-btn">
        <button
          disabled={pageNumber == 0 ? true : false}
          onClick={() => setNumber((prev) => prev - 3)}
        >
          Prev
        </button>

        <h3>{pageNumber / 3 + 1}</h3>
        <button onClick={() => setNumber((prev) => prev + 3)}> Next</button>
      </div>
    </section>
  );
};
