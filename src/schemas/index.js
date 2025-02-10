import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("please enter your email").required("required"),
  age: yup.number().integer().positive().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please Create a strong password" })
    .required("required"),
  contfirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "please must match")
    .required(""),
});
