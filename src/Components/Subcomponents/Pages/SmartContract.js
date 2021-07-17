import React, { Component } from "react";

class SmartContract extends Component {
  render() {
    return (
      <div id="ContractIntro">
        <h3>Introduction To Smart Contract</h3>
        <h2>What is a Smart Contract?</h2>
        <p>
          A "smart contract" is simply a program that runs on the Zenith Chain.
          It's a collection of code (its functions) and data (its state) that
          resides at a specific address on the Zenith Chian.
        </p>
        <p>
          Smart contracts are a type of Zenith account. This means they have a
          balance and they can send transactions over the network. However
          they're not controlled by a user, instead they are deployed to the
          network and run as programmed. User accounts can then interact with a
          smart contract by submitting transactions that execute a function
          defined on the smart contract. Smart contracts can define rules, like
          a regular contract, and automatically enforce them via the code.
        </p>
        <div id="VendingMach">
          <h2>A Digital Vending Machine</h2>
          <p>
            Perhaps the best metaphor for a smart contract is a vending machine,
            as described by Nick Szabo. With the right inputs, a certain output
            is guaranteed.
          </p>
          <p>
            To get a snack from a vending machine:
            <br />
            money + snack selection = snack dispensed
          </p>
          <p>This logic is programmed into the vending machine.</p>
          <p>
            A smart contract, like a vending machine, has logic programmed into
            it.
          </p>
          <p>
            Like how a vending machine removes the need for a vendor employee,
            smart contracts can replace intermediaries in many industries.
          </p>
        </div>
        <div id="Permissionless">
          <h2>Permissionless</h2>
          <p>
            Anyone can write a smart contract and deploy it to the network. You
            just need to learn how to code in a smart contract language, and
            have enough ZC to deploy your contract. Deploying a smart contract
            is technically a transaction, so you need to pay your Gas in the
            same way that you need to pay gas for a simple ZC transfer. Gas
            costs for contract deployment are far higher, however.
          </p>
          <p>
            Zenith Chian has developer-friendly languages for writing smart
            contracts:
          </p>
          <ul>
            <li>Solidity</li>
            <li>Vyper</li>
          </ul>
          <p>
            However, they must be compiled before they can be deployed so that
            Zenith's virtual machine can interpret and store the contract.
          </p>
        </div>
        <div id="Composability">
          <h2>Composability</h2>
          <p>
            Smart contracts are public on Zenith Chian and can be thought of as
            open APIs. That means you can call other smart contracts in your own
            smart contract to greatly extend what's possible. Contracts can even
            deploy other contracts.
          </p>
        </div>
        <div id="Limitations">
          <h2>Limitations</h2>
          <p>
            Smart contracts alone cannot get information about "real-world"
            events because they can't send HTTP requests. This is by design.
            Relying on external information could jeopardise consensus, which is
            important for security and decentralization.
          </p>
        </div>
      </div>
    );
  }
}

export default SmartContract;
