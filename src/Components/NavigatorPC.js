import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navigator.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
// import U2 from "./Subcomponents/U2";
// import Intro from "./Subcomponesnts/Pages/Intro";

class Navigator extends Component {
  state = {
    u2: false,
    u6: false,
    u8: false,
    u9: false,
    u10: false,
    // u11: false,
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
  // dropDown6 = () => {
  //   // console.log(id);
  //   this.setState({ u11: !this.state.u11 });
  // };
  handleChange = (e) => {
    const { changeState } = this.props;
    changeState(e.target.innerText);
  };
  handleCloseBtn = () => {
    const { changeNavState } = this.props;
    changeNavState(false);
  };
  render() {
    const { page } = this.props;
    return (
      <div id="navigator" className="nav-cont">
        <div id="nav-head">
          <h2>Zenith Chain</h2>
        </div>
        <ul className="navigator-mainui">
          <li>
            <span onClick={this.handleChange}>
              <Link
                className={
                  page === "Introduction"
                    ? "active dropless linke"
                    : "dropless linke"
                }
                to="/Introduction"
              >
                Introduction
              </Link>
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
                <li onClick={this.handleChange}>
                  <Link
                    className={page === "Consensus" ? "active linke" : "linke"}
                    to="/Consensus"
                  >
                    Consensus
                  </Link>
                </li>
                <li onClick={this.handleChange}>
                  <Link
                    className={page === "Overview" ? "active linke" : "linke"}
                    to="/Overview"
                  >
                    Overview
                  </Link>
                </li>
                <li onClick={this.handleChange}>
                  <Link
                    className={
                      page === "Genesis File" ? "active linke" : "linke"
                    }
                    to="/Genesis"
                  >
                    Genesis File
                  </Link>
                </li>
                <li onClick={this.handleChange}>
                  <Link
                    className={page === "Governance" ? "active linke" : "linke"}
                    to="/Governance"
                  >
                    Governance
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>
          {/* <li>
            <span onClick={this.handleChange}>
              <Link
                className={
                  page === "Ecosystem"
                    ? "active linke dropless"
                    : "linke dropless"
                }
                to="/Ecosystem"
              >
                Ecosystem
              </Link>
            </span>
          </li> */}
          <li>
            <span onClick={this.handleChange}>
              <Link
                className={
                  page === "Gnosis" ? "active linke dropless" : "linke dropless"
                }
                to="/Gnosis"
              >
                Gnosis
              </Link>
            </span>
          </li>

          {/* <li>
            <span className="dropless">Cross Chain Apps</span>
          </li> */}
          {/* <li>
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
                <li onClick={this.handleChange}>
                  <Link
                    className={page === "ZcScan" ? "active linke " : "linke "}
                    to="/ZcScan"
                  >
                    ZcScan
                  </Link>
                </li>
              </ul>
            ) : null}
          </li> */}
          {/* <li>
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
                <li onClick={this.handleChange}>
                  <Link
                    className={page === "ZcScan" ? "active linke " : "linke "}
                    to="/ZcScan"
                  >
                    ZcScan
                  </Link>
                </li>
              </ul>
            ) : null}
          </li> */}
          <li>
            <span
              className={
                page === "Zenith Chain Mainnet Explorer"
                  ? "active dropless"
                  : "dropless"
              }
              onClick={this.handleChange}
            >
              <Link
                className={
                  page === "Zenith Chain Mainnet Explorer"
                    ? "active linke "
                    : "linke "
                }
                to="/Mainnet"
              >
                Zenith Chain Mainnet Explorer
              </Link>
            </span>
          </li>
          <li>
            <span
              className={
                page === "Zenith Chain Testnet Explorer"
                  ? "active dropless"
                  : "dropless"
              }
              onClick={this.handleChange}
            >
              <Link
                className={
                  page === "Zenith Chain Testnet Explorer"
                    ? "active linke "
                    : "linke "
                }
                to="/Testnet"
              >
                Zenith Chain Testnet Explorer
              </Link>
            </span>
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
                <li onClick={this.handleChange}>
                  <Link
                    className={
                      page === "ZRC Token" ? "active linke " : "linke "
                    }
                    to="/Token"
                  >
                    ZRC Token
                  </Link>
                </li>
                <li onClick={this.handleChange}>
                  <Link
                    className={page === "ZRC-20" ? "active linke " : "linke "}
                    to="/ZRC-20"
                  >
                    ZRC-20
                  </Link>
                </li>
                <li
                  className={page === "ZRC-721" ? "active " : null}
                  onClick={this.handleChange}
                >
                  <Link
                    className={page === "ZRC-721" ? "active linke " : "linke "}
                    to="/ZRC-721"
                  >
                    ZRC-721
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>
          <li>
            <span onClick={this.handleChange}>
              <Link
                className={
                  page === "Smart Contract"
                    ? "active linke dropless"
                    : "linke dropless"
                }
                to="/Contract"
              >
                Smart Contract
              </Link>
            </span>
          </li>
          <li>
            <span
              className={page === "Wallet" ? "active dropless" : "dropless"}
              onClick={this.handleChange}
            >
              <Link
                className={page === "Wallet" ? "active linke " : "linke "}
                to="/Wallet"
              >
                Wallet
              </Link>
            </span>
          </li>
          {/* <li>
            <div style={{ display: "flex", alignItems: "center" }}>
              {this.state.u11 ? (
                <ExpandMoreIcon
                  onClick={this.dropDown6}
                  style={{ fontSize: 15, paddingRight: 4 }}
                />
              ) : (
                <ArrowForwardIosIcon
                  onClick={this.dropDown6}
                  style={{ fontSize: 10, paddingRight: 10 }}
                />
              )}
              <span
                className={page === "Wallet" ? "active " : null}
                onClick={this.dropDown6}
              >
                Wallet
              </span>
            </div>
            {this.state.u11 ? (
              <ul id="ul-11">
                <li onClick={this.handleChange}>
                  <Link
                    className={
                      page === "ZRC Token" ? "active linke " : "linke "
                    }
                    to="/Token"
                  >
                    ZRC Token
                  </Link>
                </li>
              </ul>
            ) : null}
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Navigator;
