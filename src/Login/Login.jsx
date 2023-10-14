import React, { useContext, useEffect, useState } from 'react';
import "../Styles/Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Authcontext } from '../Contexts/Context/AuthContext'; 

export default function Login() {
  let navigate = useNavigate();
  let [errorMsg, setErrormsg] = useState('');
  let [isLoading, setisLoading] = useState(false);

  let { setLogged } = useContext(Authcontext); 

  async function login() {
    setErrormsg('');
    setisLoading(true);

    try {
      let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', formik.values);
      
      if (data.message === "success") {
        setisLoading(true);
        localStorage.setItem("token", data.token);
        setLogged(true); 
        navigate("/home");
      }
    } catch (error) {
      setErrormsg(error.response.data.message);
      setisLoading(false);
    }
  }

  let validate = Yup.object({
    email: Yup.string().required("Email is required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
    password: Yup.string().required("Password is required").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/,
      "Password must meet the criteria"
    ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: login,
    validationSchema: validate,
  });

  return (
    <section className='p-5 my-5 bg-light' >
            <h2>Login Now</h2>

      {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : null}
      <form onSubmit={formik.handleSubmit} className='my-4'>
        <div className="mb-1 p-2 ">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="email" name='email' placeholder="name@example.com" />
        </div>
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : null}
        <div className="mb-1 p-2 ">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="password" name='password' placeholder="" />
        </div>
        {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div> : null}

          <div className="d-flex align-items-center justify-content-between mx-3">
          <Link className="no-decoration" to={'/reset'}>Forgot Password?</Link>
          {!isLoading ? (
            <button
              disabled={!formik.isValid || !formik.dirty}
              className="btn btn-success ms-auto mb-2 d-block bgss"
              type="submit"
            >
              Login
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
