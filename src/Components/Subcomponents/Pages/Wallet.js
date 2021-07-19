import React, { Component } from "react";

class Wallet extends Component {
  render() {
    return (
      <>
        <div id="Connect">
          <h1>Connecting MetaMask to Zenith Chian</h1>
          <h2>Installing and setting up MetaMask</h2>
          <p>
            MetaMask can be downloaded on Chrome and Firefox, or on iOS and
            Android if you’re a mobile user. For the purposes of this tutorial,
            we’ll use the Firefox version, but the instructions will be more or
            less the same for every platform.
          </p>
          <p>
            Firstly, you’ll want to head over to the MetaMask Download page.
            From there, select whichever platform you’re using, and follow the
            steps to install it on your device. Easy!
          </p>
          <p>
            Next, follow along with the setup specified by the app. Go ahead and
            click Create a Wallet. Write down the backup seed phrase somewhere
            secret (preferably not on an Internet-connected device). Without
            this phrase, your funds can’t be recovered if your device is damaged
            or lost. Confirm that you’ve written them down on the next page.
          </p>
          <p>
            And that’s it! You should now see your wallet, ready to send and
            receive funds.
          </p>
        </div>
        <div id="config">
          <h2>Configuring the wallet</h2>
          <p>
            You might notice straight away that we’re still dealing with an
            Zenith wallet. At best, this won’t work with Zenith Chain DApps. At
            worst, you could lose funds by sending them to addresses you can’t
            actually use.
          </p>
          <p>
            Let’s change that. We want to access the Settings to point the
            wallet towards Zenith Chain nodes.
          </p>
          <p>Steps:</p>
          <ul>
            <li>Select Settings from the dropdown menu.</li>
            <li>On the Settings page, we want to locate the Networks menu.</li>
            <li>
              We want to click Add Network in the top-right corner to manually
              add the Zenith Chain one – it doesn’t come packaged with MetaMask.
              It’s important to note that there are two networks we can use
              here: the testnet or the mainnet. Below are the parameters to fill
              in for each.
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Wallet;
