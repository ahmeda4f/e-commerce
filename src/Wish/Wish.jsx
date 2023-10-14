import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Home from '../Home/Home';
function Wish() {
  const [errorMsg, setError] = useState('');
  const [wishItems, setWish] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
      getWish();
  }, []);
  async function getWish() {
    setLoading(true);
    try {
      const res = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers: {
          token: localStorage.getItem('token')
        }
      });
        console.log(res.data.data);
        setWish(res.data.data)
        setLoading(false)
    } catch (err) {
      setLoading(true)
      console.error(err.response.data.message);
      setError(err.response.data.message);
      setLoading(false)
    
    }
  }

  async function removeItem(id){
    setLoading(true);
    let res = await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/'+id,{
      headers:{
        token:localStorage.getItem('token')
      }
    })

    if(res){
      setWish(res.data.data);
      setLoading(false)
    }
  }

 async function Addproduct(id) {
  try {
    let res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
      productId: id
    }, {
      headers: {
        token: localStorage.getItem('token'),
      }
    });
    console.log("API Response:", res.data);
    console.log(res.data.data.products);
    setWish(res.data.data.products);
    swal("", res.data.message, "success")
  }
  catch (err) {
    console.error(err.response.data.message);
    swal("", err.response.data.message, "error");
   }
   removeItem(id);
}





  return (

     <>
        <section className='bg-light'>
        {loading ? <>
              <div className="container d-flex align-items-center justify-content-center my-5 p-5 ">
        <i className='fas fa-spin fa-spinner fa-2x my-5'></i>
        </div>
            </> : <>
    <section className='bg-light my-5 p-4'>
    {wishItems.length===0 ? <h2 className='alert alert-warning my-5 text-center p-4'>No products in your wish list</h2> : 
      <>
        <div className='scorllable-container'>
        <h5 className='my-3 text-center text-success'>My Wish List</h5>               
        
                                          
      {wishItems?.map((product,index)=>{
        return (
          <>
   
          <div className='cartproduct p-3 shadow ' key={index}>
          
          <div className='row bg-body'>
              
        <div className='col-md-2'>
        <img src={product.imageCover} alt='product' className='img-fluid mb-2' />
          </div>

          <div className='col-md-8 my-5  '>
       <h4 className=''>{product?.title}</h4>
       <h6 className='text-success'>{product?.category?.name}</h6>
       <div className='d-flex justify-content-between p-5'>
              <p className=''>{product?.price} EGP</p>
              <p className=''>{product?.ratingsAverage}<i className='fas fa-star text-warning'></i></p>

                  </div>
                    <button
                      className='btn btn-success w-100 btn-sm my-1'
                      onClick={() => {
                        // event.preventDefault();
                          Addproduct(product.id);
                        //   removeItem(product.id);
                      }}
                    
                    >
                      <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                    </button>

          </div> 
          <div className='col-md-2 my-4'>
             
              <button className='btn btn-danger btn-sm  my-2' onClick={()=>removeItem(product.id)}><i class="fa-solid mx-1 fa-trash"></i>Remove</button>
            </div>
           

      </div>


        </div>
              </>

  )

  })}

</div>

</>}
</section>
</> }
</section>
    </>
   
  );
}

export default Wish


//     <>
//     <section className='bg-light'>
//     {loading ? <>
//           <div className="container d-flex align-items-center justify-content-center my-5 p-5 ">
//     <i className='fas fa-spin fa-spinner fa-2x my-5'></i>
//    </div>
//         </> : <>
// <section className='bg-light my-5 p-4'>
// {cartProducts.length===0 ? <h2 className='alert alert-warning my-5 text-center p-4'>No products in your cart</h2> : 
// <>
// <div className='scorllable-container'>
//   <button className='btn btn-outline-danger d-block ms-auto' onClick={()=>clearCart()}>Clear Cart</button>
//   {cartProducts?.map((product,index)=>{
//   return (
//     <div className='cartproduct p-3 shadow ' key={index}>
//       <div className='row bg-body'>
//         <div className='col-md-2'>
//         <img src={product.product.imageCover} alt='product' className='img-fluid mb-2' />
//           </div>

//           <div className='col-md-8 my-5  '>
//        <h4 className=''>{product.product.title}</h4>
//        {/* <h5>{product.product.category.name}</h5> */}
//        <div className='d-flex justify-content-between p-5'>
//               <p className=''>{product?.price} EGP</p>
//               <p className=''>{product?.product.ratingsAverage}<i className='fas fa-star text-warning'></i></p>

//             </div>
//             <h6 className='text-success mx-4 '>Total Price : <span className='text-black'>{product?.count * product?.price} EGP</span>  </h6>

//           </div> 
         
//             <div className='col-md-2 my-4'>
//               <div className='d-flex '>
//                 <button className='btn btn-outline-success btn-sm mx-2' onClick={()=>updateCount(product?.product._id , product?.count+1 ,index)} >+</button>
//                 {product?.count}
//                 <button className='btn btn-outline-warning btn-sm mx-2' onClick={()=>updateCount(product?.product._id , product?.count-1 , index)} >-</button>
//               </div>
//               <button className='btn btn-danger btn-sm  my-2' onClick={()=>removeItem(product.product._id)}><i class="fa-solid mx-1 fa-trash"></i>Remove</button>


//             </div>
            

//       </div>


//       </div>
//   )

//   })}

// </div>
// <div className='d-flex justify-content-between container'>
//   <Link to={'/address/'+ cartId} className='btn btn-success'> Check Out</Link>
//   <p className='fw-bold'>Total Cart Price : <span className='fw-normal'>{totalcart} EGP</span> </p>
// </div>
// </>}
// </section>

// </> }
// </section>
//     </>