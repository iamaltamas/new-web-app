import React from 'react'
import {input} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
   <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/features">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/disabled">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

   </div>
  )
}

export default Navbar