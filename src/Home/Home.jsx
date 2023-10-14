import React, { useEffect, useState } from 'react';
import "../Styles/main.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import MainSlider from '../MainSlider/MainSlider';
import CategorySlider from '../CategorySlider/CategorySlider';
import swal from 'sweetalert';
import { useQuery } from 'react-query';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterProducts = (products, query) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  async function AddProductToCart(id) {
    let res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
      productId: id
    }, {
      headers: {
        token: localStorage.getItem('token'),
      }
    }).catch((err) => {
      swal("", res.data.message, "error");
    });

    console.log(id);
    console.log(res);
    if (res) {
      console.log(res.data.message);
      swal("", res.data.message, "success");
    }
  }

  async function AddProductToWish(id) {
    let response = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
      productId: id
    }, {
      headers: {
        token: localStorage.getItem('token'),
      }
    }).catch((err) => {
      swal("", response.data.message, "error");
    });

    console.log(id);
    console.log(response);
    if (response) {
      console.log(response.data.message);
      swal("", response.data.message, "success");
    }
  }

  async function getAllProducts() {
    return await axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  let { data, isLoading, isFetched, isFetching } = useQuery('products', getAllProducts, {
    cacheTime: 5000
  });

  useEffect(() => {
    if (isFetched) {
      setFilteredProducts(filterProducts(data.data.data, searchQuery));
    }
  }, [searchQuery, isFetched, data]);

  return (
    <section className='p-5 bg-light '>
      
      {isLoading ? (
        <div className="container d-flex align-items-center justify-content-center my-5 p-5">
          <i className='fas fa-spin fa-spinner fa-2x'></i>
        </div>
      ) : (
        <div className='container'>
          <MainSlider />
            <CategorySlider />
            <div className="container">
        <input
          className="form-control my-2"
          type="text"
          placeholder="Search.."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
          <div className='row g-3'>
            {isFetched && filteredProducts.map((product) => {
              return (
                <div className='col-md-3' key={product._id}>
                  <Link to={'/Productdetails/' + product._id} className='no-decoration'>
                    <div className='product'>
                      <img className='img-fluid' src={product.imageCover}></img>
                      <h6 className='text-success'>{product.category.name}</h6>
                      <h5 className=''>{product.title.split(" ").slice(0, 2).join(" ")}</h5>
                      <div className='d-flex justify-content-between'>
                        <p className=''>{product.price} EGP</p>
                        <p className=''>{product.ratingsAverage}<i className='fas fa-star text-warning'></i> </p>
                      </div>
                      <div className='d-flex justify-content-between text-center'>
                        <i className="fa-solid fa-heart mx-1 my-2 ho " style={{ order: 2 }} onClick={(e) => {
                          e.preventDefault();
                          console.log("heart");
                          AddProductToWish(product._id);
                        }}></i>
                        <button
                          className='btn btn-success w-100 btn-sm my-1'
                          onClick={(event) => {
                            event.preventDefault();
                            AddProductToCart(product._id);
                          }}
                          style={{ order: 1 }}
                        >
                          <i class="fa-solid fa-cart-shopping "></i> Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}


    // let[products,setProducts]=useState()
      // let [loading,setLoading] = useState(false)
      // useEffect(() => {
      //   getAllProducts();
      // },[] )

      // async function getAllProducts(){
      //   setLoading(true)
      //   let{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      //   setProducts(data.data)
      //   setLoading(false)
      // }