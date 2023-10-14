import React, { Component } from 'react';
import "../Styles/Contact.css";
export default class Contact extends Component {
  state = {
  };

  render() {
    return (
      <section className='my-5 p-5 bg-body' >
        <div className="container my-5 p-5">
        <div className="container my-5 p-2  ">
              <h2 className="textcolor fw-bold text-center">CONATCT SECTION</h2>
              <div className="line-with-stars w-25 mx-auto">
                <div className="lines"></div>
                <div className="stars"><i className="fa-solid fa-star"></i></div>
                <div className="lines"></div>
                </div>
                </div>
        <form className="form-container p-5" >
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
             <label for="floatingInput">User Name</label>
              </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">User Age</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">User Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">User Password</label>
                  </div>
                  <a href="" className="btn rounded  btn-primary ms-auto  " id="bbbs">Register</a>
                    </form>

        </div>

      </section>
    );
  }
}

