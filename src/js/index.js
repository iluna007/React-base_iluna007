//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Listas from "./component/todolist.jsx";
//import Cart from "./component/cart.jsx";
//import Forms from "./component/forms.jsx";
//import Onkeydown from "./component/onkeydown.jsx";


//render your react application
ReactDOM.render(<Listas />, document.querySelector("#app"));
