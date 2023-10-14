import React, { Component } from 'react'
import img1 from './poert1.png'
import img2 from './port2.png'
import img3 from './port3.png'
import '../Styles/main.css'
export default class Port extends Component {
  render() {
    return (
      <section className='bg-body'>
        <div className="container p-5">
        <div className="container my-5 p-5 ">
              <h2 className=" fw-bold text-center fs-1 text-dark fw-bolder text-uppercase">Portfolio Component</h2>
              <div className="line-with-stars w-25 mx-auto">
                <div className="lines"></div>
                <div className="stars"><i className="fa-solid fa-star"></i></div>
                <div className="lines"></div>
                </div>
          <div className="row gy-4">
            <div className="col-md-4">

              <div className="inner overflow-hidden position-relative"> 
              <img src={img1} alt="" srcset="" className='w-100' />           
            <div className="layer text-black  position-absolute  d-flex  justify-content-center align-items-center start-0 top-0 w-100 h-100">
            <i className="fa-solid fa-plus text-white fa-5x"></i>
               </div>
                </div>
                </div>
            <div className="col-md-4">
            <div className="inner overflow-hidden position-relative"> 
              <img src={img2} alt="" srcset="" className='w-100' />           
            <div className="layer text-black  position-absolute  d-flex  justify-content-center align-items-center start-0 top-0 w-100 h-100">
            <i className="fa-solid fa-plus text-white fa-5x"></i>
                </div>
                </div>
                </div>
            <div className="col-md-4">
            <div className="inner overflow-hidden position-relative"> 
              <img src={img3} alt="" srcset="" className='w-100' />           
            <div className="layer text-black  position-absolute  d-flex  justify-content-center align-items-center start-0 top-0 w-100 h-100">
            <i className="fa-solid fa-plus text-white fa-5x"></i>
                </div>
                </div>
                </div>
            <div className="col-md-4">
            <div className="inner overflow-hidden position-relative"> 
              <img src={img1} alt="" srcset="" className='w-100' />           
            <div className="layer text-black  position-absolute  d-flex  justify-content-center align-items-center start-0 top-0 w-100 h-100">
            <i className="fa-solid fa-plus text-white fa-5x"></i>
               </div>
                </div>
                </div>
            <div className="col-md-4">
            <div className="inner overflow-hidden position-relative"> 
              <img src={img2} alt="" srcset="" className='w-100' />           
            <div className="layer text-black  position-absolute  d-flex  justify-content-center align-items-center start-0 top-0 w-100 h-100">
            <i className="fa-solid fa-plus text-white fa-5x"></i>
                </div>
                </div>
                </div>
            <div className="col-md-4">
            <div className="inner overflow-hidden position-relative"> 
              <img src={img3} alt="" srcset="" className='w-100' />           
            <div className="layer text-black  position-absolute  d-flex  justify-content-center align-items-center start-0 top-0 w-100 h-100">
            <i className="fa-solid fa-plus text-white fa-5x"></i>
               </div>
                </div>
                </div>
          </div>
          </div>
        </div>

      </section>

    )
  }
}
