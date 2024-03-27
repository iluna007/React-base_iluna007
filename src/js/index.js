//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Frutas from "./component/frutas.jsx";
import Cart from "./component/cart.jsx";
import Forms from "./component/forms.jsx";


//render your react application
ReactDOM.render(<Forms />, document.querySelector("#app"));