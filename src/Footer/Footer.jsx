import React, { Component } from 'react'
import "../Styles/footer.css";

export default class Footer extends Component {
  render() {
    return (
        <section className='bgd p-3'>
        <div className=" my-5 container p-5">
                <div className="row">
                    <div className="col-md-4 text-white my-2">
                        <h3>Location</h3>
                        <p>2215 John Daniel Drive </p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4 text-white my-2">
                        <h3>AROUND THE WEB</h3>
                        <div className="social-list">
                        <i className="fab fa-facebook-f fa-fw mx-2"></i>
                        <i className="fab fa-instagram fa-fw mx-2"></i>
                        <i className="fab fa-twitter fa-fw mx-2"></i>
                        <i className="fab fa-linkedin fa-fw mx-2"></i>
                    </div>
                    </div>
                    <div className="col-md-4 text-white my-2">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

            </div>
            </section>
      
            

    )
  }
}
