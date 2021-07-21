import React, { Component } from "react";
import "../../Styles/Header.scss";
import logo from "../../assets/logoblue.svg";
import MenuIcon from "@material-ui/icons/Menu";

class Header extends Component {
  render() {
    return (
      <div className="header-cont">
        <div className="header-child1">
          <img src={logo} />
          <h3 className="px-1" style={{ paddingLeft: 9 }}>
            Zenith Chain{"  "}
            <span
              className="content"
              style={{ fontWeight: "390", marginLeft: 4 }}
            >
              | docs
            </span>
          </h3>
        </div>
        <span></span>
        <div className="header-child2">
          <ul>
            <li>GitHub</li>
            <li>Forum</li>
            <li>Blog</li>
            <li>Website</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
