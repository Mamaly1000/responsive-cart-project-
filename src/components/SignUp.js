import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./form.module.css";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./Toast";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const [touched, setTouched] = useState({});

  const [Errors, setErrors] = useState({});
  useEffect(() => {
    setErrors(validate(data,"signup"));
  }, [data, touched]);
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(Errors).length) {
      notify("you sign in successfully", "success");
      console.log("you submit successfully");
    } else {
      notify("invalid data", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <h2 className={styles.header}>Sign Up</h2>
        <div className={styles.Username} >
          <label>Name</label>
          <input
            className={Errors.name && touched.name && styles.uncompleted}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {Errors.name && touched.name && <span>{Errors.name}</span>}
        </div>
        <div className={styles.Email} >
          <label>Email</label>
          <input
            className={Errors.email && touched.email && styles.uncompleted}
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {Errors.email && touched.email && <span>{Errors.email}</span>}
        </div>
        <div className={styles.Password} >
          <label>Password</label>
          <input
            className={
              Errors.password && touched.password && styles.uncompleted
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {Errors.password && touched.password && (
            <span>{Errors.password}</span>
          )}
        </div>
        <div className={styles.confirmPassword} >
          <label>Confirm Password</label>
          <input
            className={
              Errors.confirmPassword &&
              touched.confirmPassword &&
              styles.uncompleted
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {Errors.confirmPassword && touched.confirmPassword && (
            <span>{Errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.policies}>
          <label>I accet terms of privacy policy :</label>
          <input
            className={
              Errors.isAccepted && touched.isAccepted && styles.uncompleted
            }
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {Errors.isAccepted && touched.isAccepted && (
            <span>{Errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formBtns}>
          <Link to="/Login">Login</Link>
       <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

// !/\S+@\S+\.\S+/.test(data.email)
