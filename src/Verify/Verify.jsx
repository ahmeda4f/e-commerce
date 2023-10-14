import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

function Verify() {
    let [errorMsg, setErrormsg] = useState('');
  let [isLoading, setisLoading] = useState(false);
let navigate = useNavigate()
    async function reset() {

        setErrormsg('');
        setisLoading(true);

        try {
            let  res  = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', formik.values);
            console.log(res.data);
            console.log(res.data.statusMsg);

            
            if (res.data.statusMsg === "success") {
                        setisLoading(false);
                    // localStorage.setItem("token", data.token);
                    // setLogged(true); // Update the authentication state
                    navigate("/sendcode");
                }
    } catch (error) {
      setErrormsg(error.response.data.message);
      setisLoading(false);
    }
  }
     let validate = Yup.object({
    email: Yup.string().required("Email is required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,"invalid email"),
  
  });

  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: reset,
    validationSchema: validate,
  });

  return (
    <section className='p-5 my-5 bg-light' >
            <h2>Verify your Email</h2>

      {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : null}
      <form onSubmit={formik.handleSubmit} className='my-4'>
        <div className="mb-1 p-2 ">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="email" name='email' placeholder="name@example.com" />
        </div>
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : null}
       
          {!isLoading ? (
            <button
              disabled={!formik.isValid || !formik.dirty}
              className="btn btn-success ms-auto mb-2 d-block bgss"
              type="submit"
            >
              Verify
            </button>
          ) : (
            <button disabled className="btn btn-success ms-auto mb-2 d-block">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </button>
          )}
        

      </form>
    </section>
  );
}

export default Verify
