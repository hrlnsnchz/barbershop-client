import React from "react"
import ReactDOM from "react-dom"
import { Barbershop } from "./components/Barbershop.js"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Barbershop />
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

