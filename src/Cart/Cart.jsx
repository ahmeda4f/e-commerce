import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// export let userid = ''


export default function Cart() {
  const [errorMsg, setError] = useState('');
  const [cartProducts, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState();
  const [totalcart, setTotalcart] = useState('');
  const [cartId, setCartId] = useState('');


  const [userId, setUserId] = useState();
  






  let res ;
  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    setLoading(true);
   
    try {
      const res = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      // console.log(res.data);

      // console.log(res.data.data.totalCartPrice);
      setCartId(res.data.data._id)
      setUserId(res.data.data.cartOwner)
      console.log(userId);
      setCart(res.data.data.products);
      setTotalcart(res.data.data.totalCartPrice)
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
    let res = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart/'+id,{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    if(res){
      setTotalcart(res.data.data.totalCartPrice)
      setCart(res.data.data.products);
      setLoading(false)
      // setTotalcart(res.data.data.totalCartPrice)
    }
  }

  async function updateCount(id,count,index){
  
    let newProducts =[...cartProducts]
    newProducts[index].count = count;
    setCart(newProducts)

    clearTimeout(request)
    setRequest(
      setTimeout( async ()=>{
        res = await axios.put('https://ecommerce.routemisr.com/api/v1/cart/'+id,{
 
       count:count}, 
       {
       headers:{
         token:localStorage.getItem('token')
       }
     })
     if(res){
      setTotalcart(res.data.data.totalCartPrice)
      setCart(res.data.data.products);
      // setLoading(false)
    }
     },300)
    )       

    // setTotalcart(res.data.data.totalCartPrice)

     

     
  
    }
  

  

  async function clearCart(){
    setLoading(true)
    let res = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    if(res){
      setTotalcart(0)
      setCart([]);
      setError('a')
      setLoading(false)


    }
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
{cartProducts.length===0 ? <h2 className='alert alert-warning my-5 text-center p-4'>No products in your cart</h2> : 
<>
<div className='scorllable-container'>
  <button className='btn btn-outline-danger d-block ms-auto' onClick={()=>clearCart()}>Clear Cart</button>
  {cartProducts?.map((product,index)=>{
  return (
    <div className='cartproduct p-3 shadow ' key={index}>
      <div className='row bg-body'>
        <div className='col-md-2'>
        <img src={product.product.imageCover} alt='product' className='img-fluid mb-2' />
          </div>

          <div className='col-md-8 my-5  '>
       <h4 className=''>{product.product.title}</h4>
       {/* <h5>{product.product.category.name}</h5> */}
       <div className='d-flex justify-content-between p-5'>
              <p className=''>{product?.price} EGP</p>
              <p className=''>{product?.product.ratingsAverage}<i className='fas fa-star text-warning'></i></p>

            </div>
            <h6 className='text-success mx-4 '>Total Price : <span className='text-black'>{product?.count * product?.price} EGP</span>  </h6>

          </div> 
         
            <div className='col-md-2 my-4'>
              <div className='d-flex '>
                <button className='btn btn-outline-success btn-sm mx-2' onClick={()=>updateCount(product?.product._id , product?.count+1 ,index)} >+</button>
                {product?.count}
                <button className='btn btn-outline-warning btn-sm mx-2' onClick={()=>updateCount(product?.product._id , product?.count-1 , index)} >-</button>
              </div>
              <button className='btn btn-danger btn-sm  my-2' onClick={()=>removeItem(product.product._id)}><i class="fa-solid mx-1 fa-trash"></i>Remove</button>


            </div>
            

      </div>


      </div>
  )

  })}

</div>
<div className='d-flex justify-content-between container'>
  <Link to={'/address/'+ cartId} className='btn btn-success'> Check Out</Link>
  <p className='fw-bold'>Total Cart Price : <span className='fw-normal'>{totalcart} EGP</span> </p>
</div>
</>}
</section>

</> }
</section>
    </>
    
           
   
  );
}








