import React, { Component } from "react";

import Navbar from "./for-all-component/navbar/navbar.js";
import Product from "./product-component/product.js";
import Footer from "./for-all-component/footer/footer.js";
import Call from "./for-all-component/social-icon/call.js";

export class services extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Slider /> */}
        <Product />
        <Call />
        <Footer />
      </div>
    );
  }
}

export default services;
