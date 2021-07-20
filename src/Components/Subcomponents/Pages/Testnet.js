import React, { Component } from "react";

class Testnet extends Component {
  render() {
    return (
      <>
        <div id="testnet">
          <h2>Testnet</h2>
          <p>
            <strong>Network Name: </strong>
            <span>Zenith Testnet</span>
          </p>
          <p>
            <strong>New RPC URL:</strong>
            <span>http://74.124.24.11</span>
          </p>
          <p>
            <strong>ChianId: </strong>
            <span>91</span>
          </p>
          <p>
            <strong>Symbol:</strong>

            <span>ZTC</span>
          </p>
          <p>
            <strong>Block Explorer URL:</strong>

            <span>Coming Soon</span>
          </p>
          <hr />
          <p>
            We’re going to use the testnet in this tutorial, but you will likely
            want to use the mainnet. We recommend adding both if you intend to
            use MetaMask to transfer ZTC or Zenith Chain tokens.
          </p>
        </div>
        <div id="trans">
          <h2>Making transactions (on the testnet)</h2>
          <p>
            Don’t let the Ethereum logo fool you – we’ve tuned into the Zenith
            testnet. Next, let’s get some funds to play with. Hover over Account
            1, and click to copy your address to the clipboard. We’ll head over
            to the Zenith Chain Faucet and paste it into the form.
          </p>
          <p>
            Peggy coins might be of interest if you’re testing out an
            application that supports BEP-20 tokens. They’re simply tokens
            issued on Zenith Chain that are “pegged” to assets on other chains
            (like BTC, XRP, USDT, etc.), meaning that they trade at the same
            price.
          </p>
          <p>
            Let’s stick to ZTC for now. Click on the Give me ZTC dropdown and
            select the amount you wish to receive. You might need to wait a
            couple of minutes, but the funds will show up in your testnet wallet
            imminently.
          </p>
          <p>
            From here, we’ll send the funds off somewhere to demonstrate how it
            works. We’ve just grabbed a random address from Zenith Testnet that
            we’ll donate them to. Go ahead and click Send.{" "}
          </p>
          <p>
            We’ve gone with a transaction of 1 ZTC. We’ll leave the fees
            untouched and hit Next. We then get one more chance to review the
            transaction – if everything looks good, hit Confirm. And that’s it!
            You’ll get a notification informing you when your transaction
            settles.
          </p>
        </div>
      </>
    );
  }
}

export default Testnet;
