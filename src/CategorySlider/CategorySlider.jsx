import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import 'useState' from React
import Slider from 'react-slick';

function CategorySlider() {
  // Initialize allCat as an empty array and setAllCat as a function
  const [allCat, setAllCat] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories() {
    try {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
      const data = response.data.data;
      console.log(data);
      setAllCat(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className='container mb-5'>
      <Slider {...settings}>
        {allCat?.map((cat) => {
          return <img className='w-100' height = {300}  src={cat.image} alt={cat.name} key={cat.id} />;
        })}
      </Slider>
    </div>
  );
}

export default CategorySlider;
