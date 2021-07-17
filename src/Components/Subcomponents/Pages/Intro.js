import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <>
        <div id="Intro">
          <h2>Introduction of Zenith Chain</h2>
          <p>
            Zenith Chain is an innovative solution to bring programmability and
            interoperability. Zenith Chain relies on a system of 21 validators
            with Proof of Staked Authority (PoSA) consensus that can support
            short block time and lower fees. The most bonded validator
            candidates of staking will become validators and produce blocks. The
            double-sign detection and other slashing logic guarantee security,
            stability, and chain finality.
          </p>
          <br />
          <p>
            The Zenith Chain also supports EVM-compatible smart contracts and
            protocols. Cross-chain transfer and other communication are possible
            due to native support of interoperability. The Zenith Chain will be:
          </p>
          <br />
          <ul>
            <li>
              A self-sovereign blockchain: Provides security and safety with
              elected validators.
            </li>
            <li>
              EVM-compatible: Supports all the existing Ethereum tooling along
              with faster finality and cheaper transaction fees.
            </li>
            <li>
              Interoperable: Comes with efficient native dual chain
              communication; Optimized for scaling high-performance dApps that
              require fast and smooth user experience.
            </li>
            <li>
              Distributed with on-chain governance: Proof of Staked Authority
              brings in decentralization and community participants. As the
              native token, ZC will serve as both the gas of smart contract
              execution and tokens for staking.
            </li>
          </ul>
        </div>
        <div id="Resources">
          <h2>Resources:</h2>
          <ul>
            <li>White Paper</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Intro;
