import React, { Component } from "react";
import "./App.css";
import Navigator from "./Components/Navigator";
import ContentsNav from "./Components/ContentsNav";
import Main from "./Components/Main";

class App extends Component {
  state = {
    page: "Introduction",
  };
  changeState = (value) => {
    this.setState({ page: value });
  };
  render() {
    return (
      <div className="App">
        <Navigator page={this.state.page} changeState={this.changeState} />
        <Main page={this.state.page} />
        <ContentsNav page={this.state.page} />
      </div>
    );
  }
}

export default App;
