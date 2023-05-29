import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "3 letters min").required("Name is required"),
  currentPrice: Yup.number()
    .positive("Price must be greater than zero")
    .required("Current price is required"),
  categories: Yup.string()
    .min(3, "3 letters min")
    .required("Categori is required"),
  imageUrls: Yup.string()
    .min(3, "3 letters min")
    .required("Image url is required"),
  quantity: Yup.number().required("Current price is required"),
  previousPrice: Yup.number(),
  color: Yup.string().min(3, "3 letters min"),
  sizes: Yup.string().min(2, "2 letters min"),
  brand: Yup.string().min(3, "3 letters min"),
  manufacturer: Yup.string().min(3, "3 letters min"),
  manufacturerCountry: Yup.string().min(3, "3 letters min")
});

export default validationSchema;
