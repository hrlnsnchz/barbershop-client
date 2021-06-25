import React from "react"
import ReactDOM from "react-dom"
import { Barbershop } from "./components/Barbershop.js"
import { BrowserRouter as Router } from "react-router-dom"
import { CartProvider } from "react-use-cart";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
          <Barbershop />
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

