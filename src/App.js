import React, { Component } from "react";
import "./App.css";
import Navigator from "./Components/Navigator";
import ContentsNav from "./Components/ContentsNav";
import Main from "./Components/Main";
import Intro from "./Components/Subcomponents/Pages/Intro";
import Overview from "./Components/Subcomponents/Pages/Overview";
import Governance from "./Components/Subcomponents/Pages/Governance";
import Genesis from "./Components/Subcomponents/Pages/Genesis";
import Gnosis from "./Components/Subcomponents/Pages/Gnosis";
import Consensus from "./Components/Subcomponents/Pages/Consensus";
import ComingSoon from "./Components/Subcomponents/Pages/Coming";
import ZrcToken from "./Components/Subcomponents/Pages/ZrcToken";
import ERC20 from "./Components/Subcomponents/Pages/ERC20";
import ERC721 from "./Components/Subcomponents/Pages/ERC721";
import SmartContract from "./Components/Subcomponents/Pages/SmartContract";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wallet from "./Components/Subcomponents/Pages/Wallet";

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
        <Router>
          <Navigator page={this.state.page} changeState={this.changeState} />
          <Main page={this.state.page} />
          <ContentsNav page={this.state.page} />
          <Switch>
            <div className="contente">
              <Route exact={true} path="/" component={App}></Route>
              <Route path="/Introduction" component={Intro}></Route>
              <Route path="/Consensus" component={Consensus}></Route>
              <Route path="/Overview" component={Overview}></Route>
              <Route path="/Genesis" component={Genesis}></Route>
              <Route path="/Governance" component={Governance}></Route>
              <Route path="/Ecosystem" component={ComingSoon}></Route>
              <Route path="/Gnosis" component={Gnosis}></Route>
              <Route path="/ZcScan" component={ComingSoon}></Route>
              <Route path="/Token" component={ZrcToken}></Route>
              <Route path="/ZRC-20" component={ERC20}></Route>
              <Route path="/ZRC-721" component={ERC721}></Route>
              <Route path="/Contract" component={SmartContract}></Route>
              <Route path="/Wallet" component={Wallet}></Route>
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
