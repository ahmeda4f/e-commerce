import React, { useContext, useState } from 'react';
import "../Styles/Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Authcontext } from '../Contexts/Context/AuthContext'; // Make sure the import path is correct

function Form2() {
  let navigate = useNavigate();
  let [errorMsg, setErrormsg] = useState('');
  let [isLoading, setisLoading] = useState(false);

  let { setLogged } = useContext(Authcontext); // Make sure the context value matches your context structure

  async function login() {
    setErrormsg('');
    setisLoading(true);

    try {
      let res = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', formik.values);
        console.log(res.data);
        if (res) {
        setisLoading(false);
        localStorage.setItem("token", res.data);
        setLogged(true); // Update the authentication state
        navigate("/home");
        }
    } catch (error) {
      setErrormsg(error.response.data.message);
      setisLoading(false);
    }
  }

  let validate = Yup.object({
    email: Yup.string()
    .required("Email is required")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      "Invalid email"
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/,
      "Password must have at least one lowercase letter, one uppercase letter and one digit. Minimum length 8 char."
    ),
});
  

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    onSubmit: login,
    validationSchema: validate,
  });

  return (
    <section className='p-5 my-5 bg-light' >
            <h2>Reset Data</h2>

      {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : null}
      <form onSubmit={formik.handleSubmit} className='my-4'>
        <div className="mb-1 p-2 ">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="email" name='email' placeholder="name@example.com" />
        </div>
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : null}
        <div className="mb-1 p-2 ">
          <label htmlFor="newPassword" className="form-label">Password</label>
          <input type="password" value={formik.values.newPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="newPassword" name='newPassword' placeholder="" />
        </div>
        {formik.errors.newPassword && formik.touched.newPassword ? <div className='alert alert-danger'>{formik.errors.newPassword}</div> : null}

          <div className="d-flex align-items-center justify-content-between mx-3">
          {!isLoading ? (
            <button
              disabled={!formik.isValid || !formik.dirty}
              className="btn btn-success ms-auto mb-2 d-block bgss"
              type="submit"
            >
              Reset
            </button>
          ) : (
            <button disabled className="btn btn-success ms-auto mb-2 d-block">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </button>
          )}
        </div>

      </form>
    </section>
  );
}

export default Form2
