import React, { Component } from "react";

class ERC721 extends Component {
  render() {
    return (
      <>
        <h3>ZRC-721 NON-FUNGIBLE TOKEN STANDARD</h3>
        <div id="erc721intro">
          <h2>Introduction</h2>
          <h4>What is a Non-Fungible Token?</h4>
          <p>
            A Non-Fungible Token (NFT) is used to identify something or someone
            in a unique way. This type of Token is perfect to be used on
            platforms that offer collectible items, access keys, lottery
            tickets, numbered seats for concerts and sports matches, etc. This
            special type of Token has amazing possibilities so it deserves a
            proper Standard, the ZRC-721 came to solve that!
          </p>
        </div>
        <div id="defineerc721">
          <h2>What is ZRC-721?</h2>
          <p>
            The ZRC-721 introduces a standard for NFT, in other words, this type
            of Token is unique and can have different value than another Token
            from the same Smart Contract, maybe due to its age, rarity or even
            something else like its visual. Wait, visual?
          </p>
          <p>
            Yes! All NFTs have a uint256 variable called tokenId, so for any
            ZRC-721 Contract, the pair contract address, uint256 tokenId must be
            globally unique. Said that a dApp can have a "converter" that uses
            the tokenId as input and outputs an image of something cool, like
            zombies, weapons, skills or amazing kitties!
          </p>
        </div>
        <div id="erc721Pre">
          <h2>PREREQUISITES</h2>
          <ul>
            <li>Accounts</li>
            <li>Smart Contract</li>
            <li>TOken Standards</li>
          </ul>
        </div>
        <div id="erc721body">
          <h2>Body</h2>
          <p>
            It provides functionalities like to transfer tokens from one account
            to another, to get the current token balance of an account, to get
            the owner of a specific token and also the total supply of the token
            available on the network. Besides these it also has some other
            functionalities like to approve that an amount of token from an
            account can be moved by a third party account.
          </p>
          <p>
            If a Smart Contract implements the following methods and events it
            can be called an ZRC-721 Non-Fungible Token Contract and, once
            deployed, it will be responsible to keep track of the created tokens
            on Ethereum.
          </p>
        </div>
      </>
    );
  }
}

export default ERC721;
