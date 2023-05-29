import React from "react";
import { useQuery } from "@tanstack/react-query";

import Category from "../category/Category";

import api from "../../http";

function CategoriesList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.get("/catalog"),
    keepPreviousData: true
  });

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Some error</h2>;

  return data.data.length ? (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Id</th>
          <th>Parent id</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </tbody>
    </table>
  ) : (
    "No categories found"
  );
}

export default CategoriesList;
