import React, { Component } from 'react'; // Import React and Component
import "../Styles/main.css";

export default class About extends Component {
  state = {
  };

  render() {
    return (
     <section className='p-5  bgs text-center'>
      <div className="container my-5 p-5 text-center ">
              <h1 className="text-white fw-bold text-center">ABOUT COMPONENT</h1>
              <div className="line-with-star w-25 mb-1   mx-auto">
                <div className="line"></div>
                <div className="star"><i className="fa-solid fa-star"></i></div>
                <div className="line"></div>
                </div>
                <div className="container d-flex justify-content-around align-items-center g-1 text-white ">
                  <small>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</small>
                  <small>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</small>
                </div>
               

              </div>  
     </section>
    );
  }
}

