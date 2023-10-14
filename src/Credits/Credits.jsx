import React, { Component } from 'react'
import img from '../searchh.png'
import img2 from '../appgoogle.png'

export default class Credits extends Component {
  render() {
    return (
      <section className=' p-2 my-1 '>
        <div className='container'>
      <h2 >Get the FreshCart app</h2>
      <p className='mx-2 fw-light'>We will send you a link on your phone, open it to download the app</p>
        </div>
      <div className='container'>
        <div className='row  '>
          <div className='col-md-9'>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
          </div>
          <div className='col-md-2'>
            <button className='btn btn-success btn-block mt-2'>Share app link</button>
          </div>
        </div>
      </div>

    <div className='container my-2 d-flex align-items-center'>
  <p className='mt-2'>Payment Partners</p>
  <div><img src={img} className='w-25' alt='' /></div>
  <p className='ml-2'>Get delivers with FreshCart</p>
  <img src={img2} className='w-25 ml-2' alt='' />
</div>

    </section>
    
    )
  }
}
