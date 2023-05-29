import * as Yup from "yup";

const nameRegExp = /^[A-Z]/;

const validationSchema = Yup.object({
  id: Yup.string().min(3, "3 letters min").required("Id is required"),
  name: Yup.string()
    .min(3, "3 letters min")
    .required("Name is required")
    .matches(nameRegExp, "First letter must be capital"),
  parentId: Yup.string().nullable().min(3, "3 letters min")
});

export default validationSchema;
