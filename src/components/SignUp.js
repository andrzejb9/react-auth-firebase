import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { registerSuccess, registerFail } from "../slices/registerSlice";

function SignUp() {
  const msg = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(6, "Password should be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((user) => {
          dispatch(registerSuccess(user));
          toast.success("Success", { duration: 4000 });
        })
        .catch((error) => {
          dispatch(registerFail(error));
          toast.error("Something went wrong");
        });
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <h1>Sign Up</h1>
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
      <div>
        <label htmlFor="confirmPassword">Confirm password&nbsp;</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={form.handleChange}
          value={form.values.confirmPassword}
        />
        {form.touched.confirmPassword && form.errors.confirmPassword ? (
          <div>{form.errors.confirmPassword}</div>
        ) : null}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
