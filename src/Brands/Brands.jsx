import React from 'react'
import "../Styles/footer.css";
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incByMount, increment } from '../CounterSlice/CounterSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/src/sweetalert2.js'
// import Swal from 'sweetalert2/dist/sweetalert2.js';



export default function Brands() {
 
  function clickedBrand() {
    console.log("clickedBrand");
  }
  // const count = useSelector((state)=>state.counter.count)
  // let dispatch = useDispatch()
  
  async function getAllBrands(){
    return  await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  let{data , isLoading, isFetched , isFetching}= useQuery('brands',getAllBrands,{
    cacheTime:5000
  })
  console.log(data);

  return (
    <section className='p-5 bg-light '>
        {isLoading?<>
      <div className="container d-flex align-items-center justify-content-center my-5 p-5">
      <i className='fas fa-spin fa-spinner fa-2x'></i>
      </div>
       </>
    : <>
    <div className='container my-2'>
            <div className='row g-3'>
             <h4 className='text-success text-center '> All Brands</h4>
          {data?.data.data.map((brand) => {
            return <>
            <div className='col-md-3'>
                <Link className='no-decoration1' onClick={() => {
              Swal.fire({
                      title: brand.name,
                      imageUrl: brand.image,
                      imageWidth: 300,
                      imageHeight: 150,
                      confirmButtonColor: "#28a745",
                      confirmButtonText:"Okay",
                      imageAlt: 'brand image',
                background: '#f8f9fa',
                      
              })
                  
                }}>
                 <div className='product text-center'>
                <img  className='img-fluid' src={brand.image}></img>
                  <h5 className='text-success'>{brand.name}</h5>

                  </div></Link>

                  
                </div>
            </>
          })}
        </div>
      </div>
    </>}
      </section>
      /* <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incByMount(50))}>++++++++ payload</button> */


  )
}
