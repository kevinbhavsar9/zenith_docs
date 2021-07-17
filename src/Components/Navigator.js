import React, { Component } from "react";
import "../Styles/Navigator.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import U2 from "./Subcomponents/U2";

class Navigator extends Component {
  state = {
    u2: false,
    u6: false,
    u8: false,
    u9: false,
    u10: false,
  };
  dropDown1 = () => {
    // console.log(id);
    this.setState({ u2: !this.state.u2 });
  };
  dropDown2 = () => {
    // console.log(id);
    this.setState({ u6: !this.state.u6 });
  };
  dropDown3 = () => {
    // console.log(id);
    this.setState({ u8: !this.state.u8 });
  };
  dropDown5 = () => {
    // console.log(id);
    this.setState({ u10: !this.state.u10 });
  };
  dropDown4 = () => {
    // console.log(id);
    this.setState({ u9: !this.state.u9 });
  };
  handleChange = (e) => {
    const { changeState } = this.props;
    changeState(e.target.innerText);
  };
  render() {
    const { page } = this.props;
    return (
      <div className="nav-cont">
        <h2>Zenith Chain</h2>
        <ul className="navigator-mainui">
          <li>
            <span
              onClick={this.handleChange}
              className={
                page === "Introduction" ? "active dropless" : "dropless"
              }
            >
              Introduction
            </span>
          </li>
          <li>
            <div style={{ display: "flex", alignItems: "center" }}>
              {this.state.u2 ? (
                <ExpandMoreIcon
                  onClick={this.dropDown1}
                  style={{ fontSize: 15, paddingRight: 4 }}
                />
              ) : (
                <ArrowForwardIosIcon
                  onClick={this.dropDown1}
                  style={{ fontSize: 10, paddingRight: 10 }}
                />
              )}
              <span onClick={this.dropDown1}>Concepts</span>
            </div>
            {this.state.u2 ? (
              <ul id="ul-2">
                <li
                  className={page === "Consensus" ? "active " : null}
                  onClick={this.handleChange}
                >
                  Consensus
                </li>
                <li
                  className={page === "Overview" ? "active " : null}
                  onClick={this.handleChange}
                >
                  Overview
                </li>
                <li
                  className={page === "Genesis File" ? "active " : null}
                  onClick={this.handleChange}
                >
                  Genesis File
                </li>
                <li
                  className={page === "Governance" ? "active " : null}
                  onClick={this.handleChange}
                >
                  Governance
                </li>
              </ul>
            ) : null}
          </li>
          <li>
            <span
              className={page === "Ecosystem" ? "active dropless" : "dropless"}
              onClick={this.handleChange}
            >
              Ecosystem
            </span>
          </li>
          <li>
            <span
              className={page === "Gnosis" ? "active dropless" : "dropless"}
              onClick={this.handleChange}
            >
              Gnosis
            </span>
          </li>

          {/* <li>
            <span className="dropless">Cross Chain Apps</span>
          </li> */}
          <li>
            <div style={{ display: "flex", alignItems: "center" }}>
              {this.state.u8 ? (
                <ExpandMoreIcon
                  onClick={this.dropDown3}
                  style={{ fontSize: 15, paddingRight: 4 }}
                />
              ) : (
                <ArrowForwardIosIcon
                  onClick={this.dropDown3}
                  style={{ fontSize: 10, paddingRight: 10 }}
                />
              )}
              <span onClick={this.dropDown3}>
                Zenith Chain Mainnet Explorer
              </span>
            </div>
            {this.state.u8 ? (
              <ul id="ul-8">
                <li
                  className={page === "ZcScan" ? "active " : null}
                  onClick={this.handleChange}
                >
                  ZcScan
                </li>
              </ul>
            ) : null}
          </li>
          <li>
            <div style={{ display: "flex", alignItems: "center" }}>
              {this.state.u9 ? (
                <ExpandMoreIcon
                  onClick={this.dropDown4}
                  style={{ fontSize: 15, paddingRight: 4 }}
                />
              ) : (
                <ArrowForwardIosIcon
                  onClick={this.dropDown4}
                  style={{ fontSize: 10, paddingRight: 10 }}
                />
              )}
              <span onClick={this.dropDown4}>
                Zenith Chain Testnet Explorer
              </span>
            </div>
            {this.state.u9 ? (
              <ul id="ul-9">
                <li
                  className={page === "ZcScan" ? "active " : null}
                  onClick={this.handleChange}
                >
                  ZcScan
                </li>
              </ul>
            ) : null}
          </li>
          <li>
            <div style={{ display: "flex", alignItems: "center" }}>
              {this.state.u10 ? (
                <ExpandMoreIcon
                  onClick={this.dropDown5}
                  style={{ fontSize: 15, paddingRight: 4 }}
                />
              ) : (
                <ArrowForwardIosIcon
                  onClick={this.dropDown5}
                  style={{ fontSize: 10, paddingRight: 10 }}
                />
              )}
              <span
                className={
                  page === "ZRC Token Specifications" ? "active " : null
                }
                onClick={this.dropDown5}
              >
                ZRC Token Specifications
              </span>
            </div>
            {this.state.u10 ? (
              <ul id="ul-10">
                <li
                  className={page === "ZRC Token" ? "active " : null}
                  onClick={this.handleChange}
                >
                  ZRC Token
                </li>
                <li
                  className={page === "ZRC-20" ? "active " : null}
                  onClick={this.handleChange}
                >
                  ZRC-20
                </li>
                <li
                  className={page === "ZRC-721" ? "active " : null}
                  onClick={this.handleChange}
                >
                  ZRC-721
                </li>
              </ul>
            ) : null}
          </li>
          <li>
            <span
              className={
                page === "Smart Contract" ? "active dropless" : "dropless"
              }
              onClick={this.handleChange}
            >
              Smart Contract
            </span>
          </li>
          <li>
            <span
              className={page === "Wallet" ? "active dropless" : "dropless"}
              onClick={this.handleChange}
            >
              Wallet
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigator;
