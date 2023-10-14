import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const { data, isLoading, isFetched, isFetching } = useQuery(
    'products',
    getAllProducts,
    {
      cacheTime: 5000,
    }
  );

  const filterProducts = (products, query) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    if (isFetched) {
      setFilteredProducts(filterProducts(data.data.data, searchQuery));
    }
  }, [searchQuery, isFetched, data]);

  async function getAllProducts() {
    return await axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  return (
    <section className="p-5 bg-light">
      <div className="container">
        <input
           className="form-control my-2"
          type="text"
          placeholder="Search.."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      {isLoading ? (
        <>
          <div className="container d-flex align-items-center justify-content-center my-5 p-5">
            <i className="fas fa-spin fa-spinner fa-2x"></i>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            {/* ... (your sliders) */}
            <div className="row g-3">
              {isFetched && filteredProducts.map((product) => {
                return (
                  <div className="col-md-3" key={product._id}>
                    <Link to={`/Productdetails/${product._id}`} className="no-decoration">
                      <div className="product">
                        <img className="img-fluid" src={product.imageCover} alt={product.title} />
                        <h6 className="text-success">{product.category.name}</h6>
                        <h5>{product.title.split(" ").slice(0, 2).join(" ")}</h5>
                        <div className="d-flex justify-content-between">
                          <p>{product.price} EGP</p>
                          <p>{product.ratingsAverage}<i className="fas fa-star text-warning"></i></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
