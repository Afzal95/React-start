import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color:"red",
  fontSize:"20px",
  border: "1px solid green"
}

customStyle.color = "yellow";


ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
