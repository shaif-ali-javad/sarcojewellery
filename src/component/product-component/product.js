import React, { Component } from "react";
import "./product.css";

export class Product extends Component {
  render() {
    return (
      <div>
        <div className="top0"></div>
        <section className="section-products">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-lg-6">
                <div className="header">
                  <h1 data-aos="fade-left">Featured Gold</h1>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Single Product --> */}
              <div data-aos="fade-up" className="col-md-6 col-lg-4 col-xl-6">
                <div id="product-1" className="single-product">
                  <div className="part-1">
                    <ul>
                      <li>
                        {" "}
                        <h3 className="product-title">TT BAR</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2"></div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div data-aos="fade-up" className="col-md-6 col-lg-4 col-xl-6">
                <div id="product-3" className="single-product">
                  <div className="part-1">
                    <ul>
                      <li>
                        <h3 className="product-title">Kilo Bar</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2"></div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div data-aos="fade-up" className="col-md-6 col-lg-4 col-xl-6">
                <div id="product-4" className="single-product">
                  <div className="part-1">
                    <ul>
                      <li>
                        <h3 className="product-title">Gold Coins</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2"></div>
                </div>
              </div>
              {/* <!-- Single Product --> */}
              <div data-aos="fade-down" className="col-md-6 col-lg-6 col-xl-6">
                <div id="product-5" className="single-product">
                  <div className="part-1">
                    <ul>
                      <li>
                        <h3 className="product-title-1">PAMP Bar</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2"></div>
                </div>
              </div>

              <div
                data-aos="fade-right"
                className="col-md-12 col-lg-6 col-xl-12"
              >
                <div id="product-2" className="single-product">
                  <div className="part-1">
                    <ul>
                      <li>
                        <h3 className="product-title-0">Gold Scrap</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Product;
