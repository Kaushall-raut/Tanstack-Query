import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteApi } from "../api/axios";
import { useEffect } from "react";

export const InfiniteScrolling = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["user"],
    queryFn: InfiniteApi,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length == 10 ? allPages.length + 1 : undefined; //in simple words if users has reached to the bottom of the data then increase the number of pages with 1 so that it will fetch another 10 data to make the page scrollable
    },
  });

  //adding infinite scrolling feature with js
  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  return (
    <div className="section-infinite">
      <h1>Infinite Scroll section </h1>

      <ul>
        {data?.pages?.map((page, index) => {
          return (
            <ul key={index}>
              {page.map((users) => {
                return (
                  <li key={index}>
                    <p>User Name :{users.login}</p>
                    <img
                      src={users.avatar_url}
                      alt="profile"
                      width={50}
                      height={50}
                    />
                  </li>
                );
              })}
            </ul>
          );
        })}
      </ul>
    </div>
  );
};
