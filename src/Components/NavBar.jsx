import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// css
import "../CSS/NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* new design */}
        <div>
          <nav>
            {/* up logo */}
            <div
              className="row"
              style={{
                background: "black",
                textAlign: "center"
              }}
            >
              <div className="col-lg-5" />
              <div className="col-lg-2">
                {/* logo */}

                <img
                  style={{ width: "100px", height: "13px", marginTop: "30px" }}
                  src="http://bct-recruitment.s3-website-ap-southeast-2.amazonaws.com/assets/logo.svg"
                />
              </div>
              <div className="col-lg-5" />
            </div>

            {/* navbar */}
            <div
              className="row"
              style={{ borderBottom: "2px solid grey", background: "black" }}
            >
              <div className="col-2" />

              <div className="col-12 col-lg-1 left_border">
                <NavLink
                  exact
                  activeClassName="initial_active"
                  className="nav-link button_style"
                  to="/"
                >
                  HOME
                </NavLink>
              </div>
              <div className="col-12 col-lg-1 left_border">
                <NavLink
                  exact
                  activeClassName="initial_active"
                  className="nav-link button_style"
                  to="/about-us"
                >
                  About
                </NavLink>
              </div>

              <div className="col-lg-8" />
            </div>
          </nav>

          {/* end container */}
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
