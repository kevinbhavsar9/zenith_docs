import React, { Component } from "react";

class Gnosis extends Component {
  render() {
    return (
      <>
        <div id="gnosisIntro">
          <h3>Introduction</h3>
          <p>
            First deployed in early 2017, Gnosis multi-signature wallet became
            the foundational infrastructure for storing funds on Ethereum. The
            Gnosis Safe is the most secure way to manage your crypto funds.
          </p>
          <p>
            Today, you can set up the Gnosis Safe Multisig on Zenith chain in
            less than 60 seconds, and you can use wallets including Ledger,
            Trezor, Wallet Connect, Torus, and browser wallets like Metamask as
            signing keys so that you can manage your crypto collectively and
            inter-operably.
          </p>
        </div>
        <div id="gnosisAdvantages">
          <h3>Advantages of Gnosis Safe contracts</h3>
          <p>
            The Gnosis Safe is a smart contract wallet with multi-signature
            functionality at its core. It enables the following features:
          </p>
          <ul>
            <li>High Security</li>
            <li>Advanced execution logic</li>
            <li>Advanced access management</li>
          </ul>
        </div>
        <div id="mainnetDeploy">
          <h3>Mainnet Deployment Address</h3>
          <p>Coming Soon....</p>
        </div>
      </>
    );
  }
}

export default Gnosis;
