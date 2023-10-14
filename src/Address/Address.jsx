import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useParams } from 'react-router-dom';
import * as     Yup from "yup"
function Address() {
    let {cartId} = useParams()

  async function order(values) {
 
    try {
      const res = await axios.post(
        `https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=https://ahmeda4f.github.io/e-commerce`,
        {
          shippingAddress: values
        },
        {
          headers: {
            token: localStorage.getItem('token')
          } 
        }
      );

      console.log(values);
      console.log(res.data);
  
      window.location.href = res.data.session.url;
    } catch (error) {
      console.error(error);
    }
  }
   let validate = Yup.object({
     details: Yup.string().required("Details is required").min(3, "at least 3 characters").max(15, "at most 15 characters"),
     city: Yup.string().required("City is required").min(3,"at least 4 characters").max(15,"at most 15 characters"),
    phone: Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/gm,"enter a valid egyptian phone number"),
})
    let formik = useFormik({
        initialValues: {
          details: "",
          phone: "",
          city: "",
        },
      onSubmit: order,
      validationSchema : validate
      });
    

  return (
    <>
    <section className='bg-light my-4 p-4'>

     <form onSubmit={formik.handleSubmit} className='my-4'>
        <div className="mb-1 p-2 ">
          <label htmlFor="details" className="form-label">Details </label>
          <input type="text" value={formik.values.details} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="details" name='details'  />
          </div>
          {formik.errors.details && formik.touched.details ? <div className='alert alert-danger'>{formik.errors.details}</div> : null}

        <div className="mb-1 p-2 ">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="phone" name='phone' placeholder="" />
          </div>
          {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div> : null}

        <div className="mb-1 p-2 ">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="city" name='city' placeholder="" />
          </div>
          {formik.errors.city && formik.touched.city ? <div className='alert alert-danger'>{formik.errors.city}</div> : null}


        
        <button disabled={!(formik.isValid&&formik.dirty)} className="btn btn-success  ms-auto d-block bgss" type='submit'>Order</button>  
        
      </form>
      </section>

    </>
      
   
  )
}

export default Address
