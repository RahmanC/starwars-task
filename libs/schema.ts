import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .label("Email"),
  password: Yup.string()
    .required("Required")
    .min(6)
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      "Password must be a combination of letters and numbers"
    )
    .label("Password"),
});
