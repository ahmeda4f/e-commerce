import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  let[userId,setUserId]=useState('')

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    setLoading(true);
    try {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
        headers: {
          token: localStorage.getItem('token')
        }
      });

      const cartOwner = response.data.data.cartOwner;
      setUserId(cartOwner);
      getOrders(cartOwner);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      let x = err.response.data.message;
      console.log(x);
      const parts = x.split(':');
      const cartId = parts[1].trim();
      console.log(cartId); 
      getOrders(cartId);
      setLoading(false);
    }

  }

  async function getOrders(userId) {
    setLoading(true);
    try {
      const res = await axios.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${userId}`);
      console.log(res.data);
      setOrders(res.data);
      setLoading(false)
    } catch (err) {
      setLoading(true)
      console.error(err.response.data.message);
      setLoading(false)
    }
  }


  return (
    <section className='bg-light my-4'>
      <div className='container'>
        {loading ? <>
          <div className="container d-flex align-items-center justify-content-center my-5 p-5 ">
            <i className='fas fa-spin fa-spinner fa-2x my-5'></i>
          </div>
        </> :
          
          <div className='row g-3 my-5 p-5'>
            <h3 className='text-center text-success'>All Orders</h3>
            {orders?.map((order, i) => (
              <div key={order.id} className='col-md-3 text-center'>
                <div className='product text-center card p-2'>
                  <h6 className='text-success mx-auto label'>Order Number :</h6>
                  <span className='text-black mb-1'>{i + 1}</span>
                  <div className='text-center container'>
                    <h6 className='text-success mx-auto label'>Details :</h6>
                    <span className='text-black mb-1'>{order.shippingAddress.details}</span>
                    <h6 className='text-success mx-auto label'>Phone :</h6>
                    <span className='text-black mb-1'>{order.shippingAddress.phone}</span>
                    <h6 className='text-success label'>City :</h6>
                    <span className='text-black mb-1'>{order.shippingAddress.city}</span>
                    <h6 className='text-success label'>Total Price :</h6>
                    <span className='text-black mb-1'>{order.totalOrderPrice} EGP</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }</div>
    </section>
  );
}

export default Orders;




    // async function getOrders() {
    //     let res = await axios.get('https://route-ecommerce.onrender.com/api/v1/orders/user/6514bf2453280499b745e945')
    //     console.log(res.data);
    // }
    // const [userId, setUserId] = useState('');
//     async function getCart() {
//         const res = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
//             headers: {
//                 token: localStorage.getItem('token')
//             }
//         });
//         console.log(res.data);

//         console.log(res.data.data.totalCartPrice);
//         // setCartId(res.data.data._id)

//         setUserId(res.data.cartOwner)
//         console.log(userId);
// }
    //  useEffect(() => {
    //     getCart();
    //     // getOrders()
    // }, []);

    //  async function getCart() {
//          return await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
//             headers: {
//                 token: localStorage.getItem('token')
//             }
//         });

//     //   return await axios.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${userId}`);
//       }

    //   let{data1}= useQuery('cart',getCart,{
    //     cacheTime:5000
    //   })
    // console.log(data1?.data);