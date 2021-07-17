import React, { Component } from "react";
import "../../Styles/Content.scss";
import Intro from "./Pages/Intro";
import Overview from "./Pages/Overview";
import Governance from "./Pages/Governance";
import Genesis from "./Pages/Genesis";
import Gnosis from "./Pages/Gnosis";
import Consensus from "./Pages/Consensus";
import ComingSoon from "./Pages/Coming";
import ZrcToken from "./Pages/ZrcToken";
import ERC20 from "./Pages/ERC20";
import ERC721 from "./Pages/ERC721";
import SmartContract from "./Pages/SmartContract";
class Content extends Component {
  render() {
    const { page } = this.props;
    // console.log(page);
    return (
      <>
        <div className="contente">
          {page === "Introduction" ? <Intro /> : null}
        </div>
        <div className="contente">
          {page === "Consensus" ? <Consensus /> : null}
        </div>
        <div className="contente">
          {page === "Overview" ? <Overview /> : null}
        </div>
        <div className="contente">
          {page === "Genesis File" ? <Genesis /> : null}
        </div>
        <div className="contente">
          {page === "Governance" ? <Governance /> : null}
        </div>
        <div className="contente">
          {page === "Ecosystem" ? <ComingSoon /> : null}
        </div>
        <div className="contente">{page === "Gnosis" ? <Gnosis /> : null}</div>
        <div className="contente">
          {page === "ZcScan" ? <ComingSoon /> : null}
        </div>
        <div className="contente">
          {page === "Wallet" ? <ComingSoon /> : null}
        </div>
        <div className="contente">
          {page === "ZRC Token" ? <ZrcToken /> : null}
        </div>
        <div className="contente">{page === "ZRC-20" ? <ERC20 /> : null}</div>
        <div className="contente">{page === "ZRC-721" ? <ERC721 /> : null}</div>
        <div className="contente">
          {page === "Smart Contract" ? <SmartContract /> : null}
        </div>
      </>
    );
  }
}

export default Content;
