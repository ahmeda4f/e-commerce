import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { useParams } from 'react-router-dom'
import swal from 'sweetalert';
import "../Styles/main.css";
export default function Productdetails() {
    const settings = {
        dots: false,
        infinite: true,
        arrows : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      async   function Addproduct(id) {
        let res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
          productId:id
        },{
          headers:{
            token: localStorage.getItem('token'),
          }
        }).catch((err)=>{
          swal("", res.data.message, "error")
    
        })

            console.log(id);
            console.log(res);
            if(res){
          
              console.log(res.data.message)
              swal("", res.data.message, "success")
    
    
            }
            
  }
   async   function AddProductToWish(id) {
    let response = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
      productId:id
    },{
      headers:{
        token: localStorage.getItem('token'),
      }
    }).catch((err)=>{
      swal("", response.data.message, "error")

    })

        console.log(id);
        console.log(response);
        if(response){
      
          console.log(response.data.message)
          swal("", response.data.message, "success")


        }
        
      }
          
    let [pdeatils,setPdetails] = useState([])
    let [loading,setLoading] = useState(false)
    let params = useParams();
    useEffect( ()=>{
        getProductDetails(params.id)
    },[])
    async function getProductDetails(id){
        setLoading(true)
        let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products/' + id);
        setPdetails(data.data)
        setLoading(false)
        console.log(pdeatils);
    }
  return (
    <>
   {loading?<>
   <div className="container d-flex align-items-center bg-light justify-content-center my-5 p-5 ">
    <i className='fas fa-spin fa-spinner fa-2x p-5'></i>
   </div>
   </>:<>
   <section className='bg-light p-2'>

   <div className='container my-2'>
      <div className='row'>
        <div className='col-md-3 my-1'>
          <Slider {...settings}>
        {pdeatils.images?.map((img)=>{
         return <img className='img-fluid' src={img} alt="Product Image" />
        })}
        </Slider>

        </div>
        <div className='col-md-9 p-5 mt-4'>
          <h3>{pdeatils?.title}</h3>
          <p className='fw-light'>{pdeatils?.description}</p>
          <h6>{pdeatils?.category?.name}</h6> {/* Use optional chaining here */}
          <div className='d-flex justify-content-between'>
            <p className=''>{pdeatils?.price} EGP</p>
            <p className=''>{pdeatils?.ratingsAverage}<i className='fas fa-star text-warning'></i></p>
          </div>
          {/* <p>{pdeatils?.quantity * pdeatils?.price}</p> */}
                    <div className='d-flex justify-content-between'>
                    <i className="fa-solid fa-heart mx-1 my-2 ho" style={{ order: 2 }} onClick={(e) => {
                      e.preventDefault();
                      AddProductToWish(pdeatils._id)
                    }}></i>
                    <button
                      className='btn btn-success w-100 btn-sm my-1'
                      onClick={(event) => {
                        event.preventDefault();
                        Addproduct(pdeatils._id);
                      }}
                      style={{ order: 1 }}
                    >
                      <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                    </button>
                  </div>
                </div>
      </div>
    </div>
    </section>

   </>}
   </>

  )
}
