import React, { Component } from "react";

class ERC20 extends Component {
  render() {
    return (
      <>
        <h3>ZRC-20 TOKEN STANDARD</h3>
        <div id="erc20intro">
          <h2>Introduction</h2>
          <h3>What is a Token?</h3>
          <p>Tokens can represent virtually anything in Ethereum:</p>
          <ul>
            <li>reputation points in an online platform</li>
            <li>skills of a character in a game</li>
            <li>lottery tickets</li>
            <li>financial assets like a share in a company</li>
            <li>a fiat currency like USD</li>
            <li>an ounce of gold</li>
          </ul>
          <p>
            Such a powerful feature of Ethereum must be handled by a robust
            standard, right? That's exactly where the ZRC-20 plays its role!
            This standard allows developers to build token applications that are
            interoperable with other products and services.
          </p>
        </div>
        <div>
          <h2 id="defineerc20">What is ZRC-20?</h2>
          <p>
            The ZRC-20 introduces a standard for Fungible Tokens, in other
            words, they have a property that makes each Token be exactly the
            same (in type and value) of another Token. For example, an ZRC-20
            Token acts just like the ETH, meaning that 1 Token is and will
            always be equal to all the other Tokens.
          </p>
        </div>
        <div id="erc20Pre">
          {/* <h2>PREREQUISITES</h2> */}
          <h2>Prerequisites</h2>
          <ul>
            <li>Accounts</li>
            <li>Smart Contract</li>
            <li>TOken Standards</li>
          </ul>
        </div>
        <div id="erc20body">
          <h2>Body</h2>
          <p>
            The ZRC-20 (Ethereum Request for Comments 20), proposed by Fabian
            Vogelsteller in November 2015, is a Token Standard that implements
            an API for tokens within Smart Contracts.
          </p>
          <p>
            It provides functionalities like to transfer tokens from one account
            to another, to get the current token balance of an account and also
            the total supply of the token available on the network. Besides
            these it also has some other functionalities like to approve that an
            amount of token from an account can be spent by a third party
            account.
          </p>
          <p>
            If a Smart Contract implements the following methods and events it
            can be called an ZRC-20 Token Contract and, once deployed, it will
            be responsible to keep track of the created tokens on Ethereum.
          </p>
        </div>
      </>
    );
  }
}

export default ERC20;
