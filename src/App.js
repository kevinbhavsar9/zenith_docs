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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wallet from "./Components/Subcomponents/Pages/Wallet";
import Mainnet from "./Components/Subcomponents/Pages/Mainnet";
import Testnet from "./Components/Subcomponents/Pages/Testnet";
import NavigatorPC from "./Components/NavigatorPC";
import MainPC from "./Components/MainPC";
import "../src/Styles/Mobile.scss";

class App extends Component {
  state = {
    page: "Introduction",
    nav: false,
  };
  changeState = (value) => {
    this.setState({ page: value });
  };
  changeNavState = (value) => {
    this.setState({ nav: value });
  };
  render() {
    console.log(this.state.nav);
    return (
      <>
        <div className="App" id="pc">
          <Router>
            <NavigatorPC
              page={this.state.page}
              changeState={this.changeState}
            />
            <MainPC page={this.state.page} />
            <ContentsNav />
            <Switch>
              <div className="contente">
                <Route exact={true} path="/" component={Intro}></Route>
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
                <Route path="/Mainnet" component={Mainnet}></Route>
                <Route path="/Testnet" component={Testnet}></Route>
              </div>
            </Switch>
          </Router>
        </div>
        <div className="App" id="mobile">
          <Router>
            {this.state.nav ? (
              <Navigator
                page={this.state.page}
                changeState={this.changeState}
                changeNavState={this.changeNavState}
              />
            ) : null}
            <Main changeNavState={this.changeNavState} page={this.state.page} />
            <ContentsNav />
            <Switch>
              <div className="contente">
                <Route exact={true} path="/" component={Intro}></Route>
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
                <Route path="/Mainnet" component={Mainnet}></Route>
                <Route path="/Testnet" component={Testnet}></Route>
              </div>
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
