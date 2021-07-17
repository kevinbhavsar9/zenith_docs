import React, { Component } from "react";
import Header from "./Subcomponents/Header";
import Content from "./Subcomponents/Content";
import "../Styles/Main.scss";

class Main extends Component {
  render() {
    const { page } = this.props;
    return (
      <div className="main-cont">
        <Header />
        <Content page={page} />
      </div>
    );
  }
}

export default Main;
