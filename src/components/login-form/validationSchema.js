import * as Yup from "yup";

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .min(3, "3 letters min")
    .required("Email is required")
    .matches(emailRegExp, "Email not correct"),
  password: Yup.string()
    .min(3, "3 letters min")
    .required("Password is required")
});

export default validationSchema;
