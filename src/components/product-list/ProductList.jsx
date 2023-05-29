import React from "react";
import { useQuery } from "@tanstack/react-query";

import Product from "../product/Product";
import api from "../../http";

function ProductList() {
  // const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("/products"),
    keepPreviousData: true
  });

  if (isLoading) return "Loading...";

  if (isError) return "Error";

  return data.data.length ? (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Current price</th>
          <th>Categori</th>
          <th>Images</th>
          <th>Quantity</th>
          <th>Prev. price</th>
          <th>Color</th>
          <th>Sizes</th>
          <th>Brand</th>
          <th>Manufacturer</th>
          <th>Manufacturer country</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </tbody>
    </table>
  ) : (
    "No products found"
  );
}

export default ProductList;
