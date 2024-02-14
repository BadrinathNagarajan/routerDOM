import React from 'react'
import { Link } from 'react-router-dom'

function Elementor() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <div>  
      <Link to='/' className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">ALL</a>
      </Link> 
      </div> 
      <div>   
        <Link to='/fullstack' className="nav-item">
          <a className="nav-link" href="#">FULL STACK DEVELOPMENT</a>
        </Link>
      </div>
      <div>   
        <Link to='/datascience'className="nav-item">
          <a className="nav-link" href="#">DATA SCIENCE</a>
        </Link>
      </div>
      <div> 
        <Link to='/cybersecurity' className="nav-item">
          <a className="nav-link" href="#">CYBER SECURITY</a>
        </Link>
      </div>
      <div> 
        <Link to='/career' className="nav-item">
          <a className="nav-link" href="#">CAREER</a>
        </Link>
      </div>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Elementor