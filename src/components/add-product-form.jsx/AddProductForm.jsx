import React from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { useFormik } from "formik";

import useAxios from "../../hooks/useAxios";
import api from "../../http";
import validationSchema from "./validationSchema";
import styles from "./LoginForm.module.scss";

function LoginForm() {
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
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.LoginForm}>
      <div>
        <TextField
          size="small"
          type="text"
          name="name"
          //   label="Name *"
          variant="outlined"
          //   margin="dense"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={(formik.touched.name && formik.errors.name) || "Name *"}
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="currentPrice"
          //   label="Current price *"
          variant="outlined"
          //   margin="dense"
          value={formik.values.currentPrice}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.currentPrice && Boolean(formik.errors.currentPrice)
          }
          helperText={
            (formik.touched.currentPrice && formik.errors.currentPrice) ||
            "Current price *"
          }
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="categories"
          //   label="Categories *"
          variant="outlined"
          //   margin="dense"
          value={formik.values.categories}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.categories && Boolean(formik.errors.categories)}
          helperText={
            (formik.touched.categories && formik.errors.categories) ||
            "Categories *"
          }
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="imageUrls"
          //   label="Image urls *"
          variant="outlined"
          //   margin="dense"
          value={formik.values.imageUrls}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.imageUrls && Boolean(formik.errors.imageUrls)}
          helperText={
            (formik.touched.imageUrls && formik.errors.imageUrls) ||
            "Image urls *"
          }
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="quantity"
          //   label="Quantity *"
          variant="outlined"
          //   margin="dense"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.quantity && Boolean(formik.errors.quantity)}
          helperText={
            (formik.touched.quantity && formik.errors.quantity) || "Quantity *"
          }
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="previousPrice"
          //   label="Previous price"
          variant="outlined"
          //   margin="dense"
          value={formik.values.previousPrice}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.previousPrice && Boolean(formik.errors.previousPrice)
          }
          helperText={
            (formik.touched.previousPrice && formik.errors.previousPrice) ||
            "Previous price"
          }
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="color"
          //   label="Color"
          variant="outlined"
          //   margin="dense"
          value={formik.values.color}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={(formik.touched.color && formik.errors.color) || "Color"}
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="sizes"
          //   label="Size"
          variant="outlined"
          //   margin="dense"
          value={formik.values.sizes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.sizes && Boolean(formik.errors.sizes)}
          helperText={(formik.touched.sizes && formik.errors.sizes) || "Size"}
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="brand"
          //   label="Brand"
          variant="outlined"
          //   margin="dense"
          value={formik.values.brand}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.brand && Boolean(formik.errors.brand)}
          helperText={(formik.touched.brand && formik.errors.brand) || "Brand"}
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="manufacturer"
          //   label="Manufacturer"
          variant="outlined"
          //   margin="dense"
          value={formik.values.manufacturer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.manufacturer && Boolean(formik.errors.manufacturer)
          }
          helperText={
            (formik.touched.manufacturer && formik.errors.manufacturer) ||
            "Manufacturer"
          }
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="manufacturerCountry"
          //   label="Manufacturer country"
          variant="outlined"
          //   margin="dense"
          value={formik.values.manufacturerCountry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.manufacturerCountry &&
            Boolean(formik.errors.manufacturerCountry)
          }
          helperText={
            (formik.touched.manufacturerCountry &&
              formik.errors.manufacturerCountry) ||
            "Manufacturer country"
          }
        />
      </div>
      <div>
        <TextField
          size="small"
          type="text"
          name="date"
        //   label="Date"
          variant="outlined"
          //   margin="dense"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={(formik.touched.date && formik.errors.date) || "Date"}
        />
      </div>
      <ButtonGroup>
        <Button variant="contained" type="submit" size="large">
          Add product
        </Button>
        <Button
          variant="contained"
          type="reset"
          size="large"
          onClick={() => formik.resetForm()}
        >
          Clear
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default LoginForm;
