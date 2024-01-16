import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="/" className="logo-contain">
            <img
              src={require("../../img/main-logo.png")}
              className="logo"
              alt="logo"
            />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active1" : "#navbar"}
            >
              <div className="backdrop"></div>
              <li>
                <NavLink className="link" to="/">
                  <i className="fa-solid fa-house" id="a-0"></i>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/product">
                  <i className="fa-solid fa-coins" id="a-1"></i>
                  PRODUCT
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/about">
                  <i className="fa-solid fa-user-tie" id="a-2"></i>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/contact">
                  <i className="fa-solid fa-phone" id="a-3"></i>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleclick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;

// import React, { Component } from "react";
// import "./navbar1.css";
// import logo from "./image/Artboard 1@00x.png";
// import { NavLink } from "react-router-dom";

// class Navbar extends Component {
//   state = { clicked: false };
//   handleclick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };
//   render() {
//     return (
//       <nav className="navbar">
//         <a href="/">
//           <img src={logo} alt="logo" />
//         </a>

//         <div>
//           <ul
//             id="navbar"
//             className={this.state.clicked ? "#navbar active" : "#navbar"}
//           >
//             <li>
//               <NavLink className="active link" to="/">
//                 HOME
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="link" to="/services">
//                 SERVICES
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="link" to="/about">
//                 ABOUT US
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="link" to="/contact">
//                 CONTACT US
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <div id="mobile" onClick={this.handleclick}>
//           <i
//             id="bar"
//             className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//           ></i>
//         </div>
//       </nav>
//     );
//   }
// }
// export default Navbar;
