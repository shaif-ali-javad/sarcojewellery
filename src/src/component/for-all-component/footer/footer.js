import React, { Component } from "react";
import "./footer.css";
export class Footer extends Component {
  render() {
    return (
      <>
        <div id="footer" className="footer">
          <div className="container">
            <div className="comntain-txt">
              <div className="marin-0">
                <div className="conact">
                  <h3 className="line">Contact us</h3>
                  <div className="ico0">
                    <div className="p-0">
                      <div className="p-contain">
                        <i className="fa-solid fa-location-dot" id="p-0"></i>
                        ........................................
                      </div>
                    </div>

                    <div className="p-contain">
                      <i className="fa-solid fa-envelope" id="p-1"></i>
                      {/* <a href="#">info@sarcojewellery.com</a> */}
                      info@sarcojewellery.com
                    </div>
                    <div className="p-contain">
                      <i className="fa-solid fa-phone" id="p-2"></i>
                      ........................................
                    </div>
                  </div>
                </div>
              </div>
              <div className="marin-1">
                <div className="text">
                  <h3 className="line">Business Hours</h3>
                  <div href="" className="p">
                    <div className="">Mon: 9:30 AM - 7:00 PM</div>
                    <div className="">Tue: 9:30 AM - 7:00 PM</div>
                    <div className="">Wed: 9:30 AM - 7:00 PM</div>
                    <div className="">Thu: 9:30 AM - 7:00 PM</div>
                    <div className="">Fri: 9:30 AM - 7:00 PM</div>
                    <div className="">Sat: 9:30 AM - 7:00 PM</div>
                    <div className="">Sun: 9:30 AM - 7:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <section className="mb-3 text-center icon-0">
              <h3 className="line e">Follow Us</h3>
              {/* <!-- Facebook --> */}
              <a className="btn  btn-floating m-1" href="#!" role="button">
                <i className="fa-brands fa-square-facebook"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a className="btn btn-floating m-1" href="#!" role="button">
                <i className="fa-brands fa-square-twitter"></i>
              </a>

              {/* <!-- Instagram --> */}
              <a className="btn btn-floating m-1" href="#!" role="button">
                <i className="fa-brands fa-square-instagram"></i>
              </a>

              {/* <!-- Youtube --> */}
              <a className="btn btn-floating m-1" href="#!" role="button">
                <i className="fa-brands fa-square-youtube"></i>
              </a>

              {/* <!-- Linkedin --> */}
              <a className="btn btn-floating m-1" href="#!" role="button">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          <p className="copy">
            Copyright 2024 Sarco Jewellery. All rights reserved.
          </p>
        </div>
        {/* <!-- / container --> */}

        {/* <!-- / footer --> */}
      </>
    );
  }
}

export default Footer;
