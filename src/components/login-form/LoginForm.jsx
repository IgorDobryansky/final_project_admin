import React from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";

import api from "../../http";
import validationSchema from "./validationSchema";
import styles from "./LoginForm.module.scss";

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values) => {
      api
        .post("/customers/login", {
          loginOrEmail: values.email,
          password: values.password
        })
        .then((res) => console.log(res));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.LoginForm}>
      <div>
        <TextField
          type="text"
          name="email"
          label="Email *"
          variant="outlined"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>
      <div>
        <TextField
          type="password"
          name="password"
          label="Password *"
          variant="outlined"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>
      <Button variant="contained" type="submit" size="large">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
