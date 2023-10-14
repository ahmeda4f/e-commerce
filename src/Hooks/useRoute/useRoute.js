// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";



// export default function useRoute(){
    
//     let [brands,setProduct]= useState([])

   

//     let [pdeatils,setPdetails] = useState([])
//     let [loading,setLoading] = useState(false)
//     useEffect( ()=>{
//         getProductDetails()
//     },[])
//     async function getProductDetails(){
//         setLoading(true)
//         let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products');
//         setPdetails(data.data)
//         setLoading(false)
//         console.log(pdeatils);
//     }
   
//     return [brands]
// }