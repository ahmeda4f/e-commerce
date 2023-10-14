import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../Styles/main.css";

function Categories() {
  const [subCategory, setSubCat] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  async function getAllCats() {
    return await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  let { data, isLoading } = useQuery('categories', getAllCats, {
    cacheTime: 5000
  });

  async function subCat(id) {
    setClicked(true);
    setSelectedCategory(data.data.data.find(category => category._id === id));
    try {
      const res = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
      setSubCat(res.data.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  }

  return (
    <section className='p-5 bg-light'>
      {isLoading ? (
        <div className="container d-flex align-items-center justify-content-center my-5 p-5">
          <i className='fas fa-spin fa-spinner fa-2x'></i>
        </div>
      ) : (
        <div className='container'>
          <div className='row g-3'>
              {selectedCategory && (
                <div>
                   <h2 className='text-success text-center'>{`${selectedCategory.name} `} </h2>
                   <p className="text-center text-primary"> For Sub Categories Scroll Down </p>
                 </div>
            )}
            {data?.data.data.map((cat) => (
              <div className='col-md-3' key={cat._id}>
                <Link className="no-decoration1" onClick={() => subCat(cat._id)}>
                  <div className='product text-center'>
                    <img className='w-100' height={300} src={cat.image} alt={cat.name} />
                    <h5 className='text-success'>{cat.name}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
       {subCategory.map((subcat) => (
        <div key={subcat._id} className="container text-center card product p-2 m-2">
          <h5 className=''>
            {selectedCategory ? (
              <span className="text-success" dangerouslySetInnerHTML={{ __html: `${selectedCategory.name}` }} />
            ) : null}
            {selectedCategory ? ' - ' : null}
            {subcat.name}
          </h5>
        </div>
      ))}

        </div>
      )}
    </section>
  );
}

export default Categories;























// let x = useRoute(); // Check if this hook returns the data correctly
  // console.log(x); // Ensure data is logged successfully

  // return (
  //   // <>
  //   //   {x.length === 0 ? (
  //   //     <div className='my-4 text-center p-5'>
  //   //       <h1>No x available</h1>
  //   //     </div>
  //   //   ) : (
  //   //     x.map((brand, i) => (
  //   //       <div className='my-4 text-center p-5' key={i}>
  //   //         <h1 className='text-black'>{brand.title}</h1>
  //   //         <h2>asfdas</h2>
  //   //       </div>
  //   //     ))
  //   //   )}
  //   // </>
  // );