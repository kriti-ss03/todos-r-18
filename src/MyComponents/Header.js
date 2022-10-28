import React from 'react';
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <nav className="navbar navbar-lg bg-light navbar-expand-md ">

  <div className="container-fluid">
    <a className="navbar-brand my-3 mx-3" href="#">{props.title}</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTrogglerDemo02" aria-controls="navbarTrogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         
          {/* <!-- INSIDE TOGGLER --> */}
          <div class="collapse navbar-collapse" id="navbarTrogglerDemo02">
             <ul class="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        
          </ul>
          {/* //OPTIONAL SEARCH BAR--MADE ISREQUIRED TO GET TRUE N FALSE */}
          {props.searchBar ? <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : ""}
    </div>
  </div>
</nav>

  )
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar:PropTypes.bool.isRequired
}