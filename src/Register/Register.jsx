import React, { useState } from 'react'
import "../Styles/Contact.css";
import {useFormik} from "formik"
import * as     Yup from "yup"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Register() {

let navigate = useNavigate()

let [errorMsg,setErrormsg]=useState('')

let[isLoading,setisLoading] = useState(false)


async function register(){
    setErrormsg('')
    setisLoading(true)
    try {
        let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', formik.values);
        
        if (data.message === "success") {
          setisLoading(true);
          navigate("/login");
        }
      } catch (errorMsg) {
        setErrormsg(errorMsg.response.data.message);
        setisLoading(false);
      }

}

let validate = Yup.object({
    name: Yup.string().required("Name is required").min(3,"at least 3 characters").max(15,"at most 15 characters"),
    email: Yup.string().required("Email is required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,"enter a valid email address"),
    password: Yup.string().required("Password is required").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one special character, and one number with a minimum length of 8 characters"  ),    
    rePassword: Yup.string().required("RePassword is required").oneOf([Yup.ref('password')],"passorwd and repasswd must match"),
    phone: Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/gm,"enter a valid egyptian phone number"),
})



let formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        password: "",
        rePassword:"",
        phone:'',

    },
    onSubmit: register,
    validationSchema : validate
})


  return (
    <section className='p-3 bg-light my-1  '>
      <h2>Register Now</h2>
<form onSubmit={formik.handleSubmit}>
       <div className="mb-2 my-1 ">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange}  className="form-control" id="name" name='name' placeholder=""></input>
        </div>
        {formik.errors.name&&formik.touched.name ?<div className='alert alert-danger'>{formik.errors.name}</div> : null}
        <div className="">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email"  value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="email" name='email' placeholder="name@example.com"></input>
        </div>
        {formik.errors.email&&formik.touched.email ?<div className='alert alert-danger'>{formik.errors.email}</div> : null}
         <div className="">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password"  value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="password" name='password' placeholder=""></input>
        </div>
        {formik.errors.password&&formik.touched.password ?<div className='alert alert-danger'>{formik.errors.password}</div> : null}
         <div className="">
        <label htmlFor="rePassword" className="form-label">RePassword</label>
        <input type="password" value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="rePassword" name='rePassword' placeholder=""></input>
        </div>
        {formik.errors.rePassword&&formik.touched.rePassword ?<div className='alert alert-danger'>{formik.errors.rePassword}</div> : null}
        <div className="mb-2">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input type="text"  value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="phone" name='phone' placeholder=""></input>
        </div>
        {formik.errors.phone&&formik.touched.phone ?<div className='alert alert-danger'>{formik.errors.phone}</div> : null}
        {!(isLoading) ?<button disabled={!(formik.isValid&&formik.dirty)} className="btn btn-success  ms-auto d-block bgss" type='submit'>Register</button> : <button disabled className="btn btn-success ms-auto d-block "><i className='fa-solid fa-spinner fa-spin'></i></button> }
        
       </form>
     </section>
  )
}
