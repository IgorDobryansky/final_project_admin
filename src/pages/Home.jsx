import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <NavLink to="/final_project_admin">Home</NavLink>
        <NavLink to="/final_project_admin/login">Log in</NavLink>
        <NavLink to="/final_project_admin/products">Products</NavLink>
        <NavLink to="/final_project_admin/add_product">Add product</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
