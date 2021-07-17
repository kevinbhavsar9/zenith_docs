import React, { Component } from "react";

class ZrcToken extends Component {
  render() {
    return (
      <>
        <div id="introzrc">
          <h2>Introduction</h2>
          <p>
            One of the many Zenith Chian's development standards focus on token
            interfaces. These standards help ensure smart contracts remain
            composable, so for instance when a new project issues a token, that
            it remains compatible with existing decentralized exchanges.
          </p>
        </div>
        <div id="tokenStand">
          <h2>Token Standards</h2>
          <p>
            Here are some of the most popular token standards on Zenith Chian:
          </p>
          <ul>
            <li>
              ZRC-20 - A standard interface for fungible (interchangeable)
              tokens, like voting tokens, staking tokens or virtual currencies
            </li>
            <li>
              ZRC-721 - A standard interface for non-fungible tokens, like a
              deed for artwork or a song.
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default ZrcToken;
