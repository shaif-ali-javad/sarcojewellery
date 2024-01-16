import React, { Component } from "react";
import About from "./about-component/about.js";
import Navbar from "./for-all-component/navbar/navbar.js";
import Footer from "./for-all-component/footer/footer.js";
import Call from "./for-all-component/social-icon/call.js";
// import ScrolltoTop from "./for-all-component/scroll-top";

export class about extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <ScrolltoTop /> */}
        <About />
        <Call />
        <Footer />
      </div>
    );
  }
}

export default about;
