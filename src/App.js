// import Home from "./component/home";
// import Product from "./component/services";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Home path="/" />
//       <Product path="/services" />
//     </div>
//   );
// }
import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home.js";

import Product from "./component/product.js";
import About from "./component/about.js";
import Contact from "./component/contact.js";

// const Product = lazy(() => import("./component/product.js"));
// const About = lazy(() => import("./component/about.js"));
// const Contact = lazy(() => import("./component/contact.js"));

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback={<h1>loading....</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sarcojewellery" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
