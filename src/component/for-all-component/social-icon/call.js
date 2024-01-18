import React from "react";
import "./call.css"; // Import the CSS file with the styles

class Call extends React.Component {
  render() {
    return (
      <div
        className="call-contain"
        style={{ position: "fixed", bottom: "-7px", right: "1px" }}
      >
        <iframe
          className="bending-image"
          src="https://lottie.host/embed/8b13fe12-0d51-441b-b9cb-de0845117904/l9TJT92z5R.json"
        ></iframe>
        {/* <img
          src={require("https://lottie.host/67806560-e09c-4480-a555-fd8e685b49a3/VGR1aE3erM.json")}
          className="bending-image"
          alt=""
        /> */}
      </div>
    );
  }
}

export default Call;
