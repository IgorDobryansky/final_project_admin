import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import AddCategory from "./pages/AddCategory";
import Categories from "./pages/Categories";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("final_project_admin/login");
  }, [token, navigate]);
  return (
    <Routes>
      <Route path="/final_project_admin" element={<Home />}>
        <Route path="login" element={<Login />} />
        <Route path="add_category" element={<AddCategory />} />
        <Route path="categories" element={<Categories />} />
        <Route path="add_product" element={<AddProduct />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
