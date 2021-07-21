import React, { Component } from "react";
import Header from "./Subcomponents/HeaderPC";
import Content from "./Subcomponents/Content";
import "../Styles/Main.scss";

class Main extends Component {
  render() {
    const { page, changeNavState } = this.props;
    return (
      <div className="main-cont">
        <Header changeNavState={changeNavState} />
        <Content page={page} />
      </div>
    );
  }
}

export default Main;
