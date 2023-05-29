import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

function Home() {
  return (
    <Grid container spacing={2} columns={30}>
      <Grid
        item
        // xs={1} // 0
        // sm={2} // 1
        // md={3} // 2
        // lg={4} // 3
        xl={5} // 4
        style={{ textAlign: "center" }}
      >
        <NavLink to="/final_project_admin">Home</NavLink>
      </Grid>
      <Grid
        item
        // xs={1} // 0
        // sm={2} // 1
        // md={3} // 2
        // lg={4} // 3
        xl={5} // 4
        style={{ textAlign: "center" }}
      >
        <NavLink to="/final_project_admin/login">Log in</NavLink>
      </Grid>
      <Grid
        item
        // xs={1} // 0
        // sm={2} // 1
        // md={3} // 2
        // lg={4} // 3
        xl={5} // 4
        style={{ textAlign: "center" }}
      >
        <NavLink to="/final_project_admin/products">Products</NavLink>
      </Grid>
      <Grid
        item
        // xs={1} // 0
        // sm={2} // 1
        // md={3} // 2
        // lg={4} // 3
        xl={5} // 4
        style={{ textAlign: "center" }}
      >
        <NavLink to="/final_project_admin/add_product">Add product</NavLink>
      </Grid>
      <Grid
        item
        // xs={1} // 0
        // sm={2} // 1
        // md={3} // 2
        // lg={4} // 3
        xl={5} // 4
        style={{ textAlign: "center" }}
      >
        <NavLink to="/final_project_admin/categories">Categories</NavLink>
      </Grid>
      <Grid
        item
        // xs={1} // 0
        // sm={2} // 1
        // md={3} // 2
        // lg={4} // 3
        xl={5} // 4
        style={{ textAlign: "center" }}
      >
        <NavLink to="/final_project_admin/add_category">Add category</NavLink>
      </Grid>
      <Grid item xs={30}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Home;
