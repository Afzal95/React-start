//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";

//rendering js code inside html by putting inside {} braces.

const no = 5;

ReactDom.render(
  <div>
    <h1>Hello Afzal !</h1>
    <p>Your favourite no is {no}</p>
  </div>,
  document.getElementById("root")
);
