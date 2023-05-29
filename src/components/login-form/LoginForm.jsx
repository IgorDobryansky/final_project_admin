import React from "react";
import { useFormik } from "formik";

import api from "../../http";
import validationSchema from "./validationSchema";
import styles from "./Form.module.scss";

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
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.token));
        });
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.Form}>
      <div className={styles.Input}>
        <input
          id="email"
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.email && formik.errors.email) || "Email *"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          id="password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.password && formik.errors.password) || "Password *"}
        </span>
      </div>
      <button type="submit" size="large">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
