import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

function SignIn() {
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(6, "Password should be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((user) => {
          toast.success("Success", { duration: 4000 });
        })
        .catch((error) => {
          toast.error("Something went wrong");
        });
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <h1>Sign In</h1>
      <div>
        <label htmlFor="email">Email&nbsp;</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={form.handleChange}
          value={form.values.email}
        />
        {form.touched.email && form.errors.email ? (
          <div>{form.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password&nbsp;</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={form.handleChange}
          value={form.values.password}
        />
        {form.touched.password && form.errors.password ? (
          <div>{form.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
