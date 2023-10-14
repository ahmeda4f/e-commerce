import React, { Component, useContext } from 'react'; 
import "../Styles/main.css";
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Contexts/Context/AuthContext';
import imgLogo from '../freshcart-logo.svg';
export default function Navbar() {

  let navigate = useNavigate()
  const{logged , setLogged}=useContext(Authcontext)

  function logout(){
    setLogged(false)
    localStorage.removeItem('token')
    navigate("/login");
    
  }
  return (
    <div>
          <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-dark-subtle text-black p-2 ">
            <div className="container d-flex ">
              <div className="div ">
              <Link class="navbar-brand fw-bold fs-3 " to="/home"><img className="img-fluid" src={imgLogo}></img></Link>
               </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
               aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
                  </button>
             <div className="container">
             <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul className="navbar-nav   mt-lg-1 ">
                      <li className="nav-item ">
                          <Link className="nav-link  mx-1  text-uppercase " to="home" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>

                </li>
                  <li className="nav-item ">
                          <Link className="nav-link  mx-1 text-uppercase " to="wishlist" aria-current="page">Wish <span className="visually-hidden">(current)</span></Link>
                      </li>
                      <li className="nav-item ">
                          <Link className="nav-link   text-uppercase " to="Cart" aria-current="page">Cart <span className="visually-hidden">(current)</span></Link>
                          
                      </li>
                      <li className="nav-item ">
                          <Link className="nav-link  mx-1 text-uppercase " to="Products" aria-current="page">Products <span className="visually-hidden">(current)</span></Link>
                      </li>
                      <li className="nav-item ">
                          <Link className="nav-link  text-uppercase " to="Categories" aria-current="page">Categories <span className="visually-hidden">(current)</span></Link>
                      </li>
                      <li className="nav-item ">
                          <Link className="nav-link  mx-1 text-uppercase " to="Brands" aria-current="page">Brands <span className="visually-hidden">(current)</span></Link>
                </li>

                  <li className="nav-item ">
                          <Link className="nav-link  mx-1 text-uppercase " to="allorders" aria-current="page">Orders <span className="visually-hidden">(current)</span></Link>
                      </li>
               
                    
                      
                  </ul>
                  <ul className="navbar-nav ms-auto    mt-lg-0">
                      <li className="nav-item ">
                      <i class="fa-brands nav-link fa-facebook mx-1"></i>
                      </li>
                      <li className="nav-item ">
                      <i class="fa-brands nav-link fa-twitter "></i>                          
                      </li>
                      <li className="nav-item ">
                      <i class="fa-brands nav-link fa-youtube"></i>
                      </li>
                      <li className="nav-item ">
                      <i class="fa-brands nav-link fa-instagram mx-1"></i>
                      </li>
                      <li className="nav-item ">
                      <i class="fa-brands nav-link fa-linkedin"></i>
                      </li>
                      <li className="nav-item ">
                      <i class="fa-brands nav-link fa-tiktok "></i>
                      </li>
                       {logged?<> <li className="nav-item "><Link className=" text-black l mx-1  " to="" aria-current="page" onClick={logout}>Logout <span className="visually-hidden">(current)</span></Link>
                        </li></>: <>  <li className="nav-item ">
                      <Link className=" text-black l mx-1  " to="register" aria-current="page">Register <span className="visually-hidden">(current)</span></Link>
                  </li>
                  <li className="nav-item ">
                      <Link className=" text-black l mx-1  " to="login" aria-current="page">Login <span className="visually-hidden">(current)</span></Link>
                  </li> </>}
                     
                
                     
                    
                    
                      
                  </ul>
                
              </div>
             </div>
            
           </div>
         </nav>
               
    </div>
  )
}


            
               
 