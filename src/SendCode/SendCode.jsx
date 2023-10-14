import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function SendCode() {
    let [errorMsg, setErrormsg] = useState('');
  let [isLoading, setisLoading] = useState(false);
let navigate = useNavigate()
    async function Verify() {

        setErrormsg('');
        // setisLoading(true);

        try {
            let  res  = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', formik.values);
            console.log(res.data);
            // console.log(res.data.statusMsg);

            
            if (res.data.status === "Success") {
                  setisLoading(false);
                    navigate("/resetdata");
                }
    } catch (error) {
      setErrormsg(error.response.data.message);
      setisLoading(false);
    }
  }
     let validate = Yup.object({
    resetCode: Yup.string().required("Code is required"),
  
  });

  let formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: Verify,
    validationSchema: validate,
  });

  return (
    <section className='p-5 my-5 bg-light' >
            <h2>Enter Code</h2>

      {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : null}
      <form onSubmit={formik.handleSubmit} className='my-4'>
        <div className="mb-1 p-2 ">
          <label htmlFor="resetCode" className="form-label">Verification Code</label>
          <input type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control" id="resetCode" name='resetCode'  />
        </div>
        {formik.errors.resetCode && formik.touched.resetCode ? <div className='alert alert-danger'>{formik.errors.resetCode}</div> : null}
       
          {!isLoading ? (
            <button
              disabled={!formik.isValid || !formik.dirty}
              className="btn btn-success ms-auto mb-2 d-block bgss"
              type="submit"
            >
              Send
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


export default SendCode
