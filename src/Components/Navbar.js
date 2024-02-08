import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        
      <span className="navbar-brand mb-0 h1" style={{cursor:"pointer"}}>NewsMonkey</span>


        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/general">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link " to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          <div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
  <label className="custom-control-label" htmlFor="customSwitch1"></label>
</div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
   
