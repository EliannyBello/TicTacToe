import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";

//import your own components
import App from "./component/home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);

