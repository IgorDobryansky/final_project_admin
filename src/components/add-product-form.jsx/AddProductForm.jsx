import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";

import api from "../../http";
import validationSchema from "./validationSchema";
import styles from "./Form.module.scss";

function LoginForm() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.get("/catalog"),
    keepPreviousData: true
  });

  const initialValues = {
    name: "",
    currentPrice: "",
    categories: "",
    imageUrls: "",
    quantity: "",
    previousPrice: "",
    color: "",
    sizes: "",
    brand: "",
    manufacturer: "",
    manufacturerCountry: "",
    date: ""
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      api.post("/products", values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.Form}>
      <div className={styles.Input}>
        <input
          type="text"
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
          type="text"
          name="currentPrice"
          value={formik.values.currentPrice}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.currentPrice && formik.errors.currentPrice) ||
            "Current price *"}
        </span>
      </div>
      <div className={styles.Input}>
        {isLoading ? (
          "Loading categories..."
        ) : (
          <select
            name="categories"
            value={formik.values.categories}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">{""}</option>
            {!isLoading &&
              !isError &&
              data.data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        )}
        <span className={styles.InputError}>
          {(formik.touched.categories && formik.errors.categories) ||
            "Categories *"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="text"
          name="imageUrls"
          value={formik.values.imageUrls}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.imageUrls && formik.errors.imageUrls) ||
            "Image urls *"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="text"
          name="quantity"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.quantity && formik.errors.quantity) || "Quantity *"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="text"
          name="previousPrice"
          value={formik.values.previousPrice}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.previousPrice && formik.errors.previousPrice) ||
            "Previous price"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="text"
          name="color"
          value={formik.values.color}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.color && formik.errors.color) || "Color"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="text"
          name="sizes"
          value={formik.values.sizes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.sizes && formik.errors.sizes) || "Size"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="text"
          name="brand"
          value={formik.values.brand}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.brand && formik.errors.brand) || "Brand"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="text"
          name="manufacturer"
          value={formik.values.manufacturer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.manufacturer && formik.errors.manufacturer) ||
            "Manufacturer"}
        </span>
      </div>
      <div className={styles.Input}>
        <input
          type="text"
          name="manufacturerCountry"
          value={formik.values.manufacturerCountry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className={styles.InputError}>
          {(formik.touched.manufacturerCountry &&
            formik.errors.manufacturerCountry) ||
            "Manufacturer country"}
        </span>
      </div>
      <button type="submit">Add product</button>
      <button type="button" onClick={() => formik.resetForm()}>
        Clear
      </button>
    </form>
  );
}

export default LoginForm;
