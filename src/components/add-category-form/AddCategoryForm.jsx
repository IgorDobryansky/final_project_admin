import React, { useState } from "react";
import { useFormik } from "formik";

import validationSchema from "./validationSchema";
import styles from "./Form.module.scss";

import api from "../../http";

function AddCategoryForm() {
  const [requestError, setReequestError] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      parentId: ""
    },
    validationSchema,
    onSubmit: (values) => {
      setReequestError(null);
      const newValues = { ...values };
      if (!newValues.parentId) newValues.parentId = "null";
      api
        .post("/catalog", { ...newValues })
        .then((res) => {
          if (res.status === 200) {
            formik.resetForm();
            setReequestError(null);
          }
        })
        .catch((err) => {
          setReequestError(err.response.data.message);
        });
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.Form}>
      <div className={styles.Input}>
        <input
          type="id"
          name="id"
          value={formik.values.id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.id && formik.errors.id) || "Id *"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.name && formik.errors.name) || "Name *"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="parentId"
          name="parentId"
          value={formik.values.parentId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.parentId && formik.errors.parentId) || "Parent id"}
        </span>
      </div>

      <button type="submit" size="large">
        Add product
      </button>
      <button type="button" onClick={() => formik.resetForm()}>
        Clear
      </button>
      <span className={styles.RequestError}>
        {requestError && requestError}
      </span>
    </form>
  );
}

export default AddCategoryForm;
