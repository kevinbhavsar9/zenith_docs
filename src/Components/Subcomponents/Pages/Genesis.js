import React, { Component } from "react";

class Genesis extends Component {
  render() {
    return (
      <>
        <h2>Genesis File</h2>
        <p>
          This document explains how the genesis file of the Zenith Chain is
          structured.
        </p>
        <div id="defineGenesis">
          <h3>What is a Genesis File ?</h3>
          <p>
            A genesis file is a JSON file which defines the initial state of
            your blockchain. It can be seen as height 0 of your blockchain. The
            first block, at height 1, will reference the genesis file as its
            parent.
          </p>
          <p>
            The state defined in the genesis file contains all the necessary
            information, like initial token allocation, genesis time, default
            parameters, and more. Let us break down these information.
          </p>
        </div>
        <div id="explainGenesis">
          <h3>Explaination</h3>
          <ul>
            <li>
              <div>chianID</div>
              <div>
                66 for main-net and 96 for test-net. To compatible with third
                part service that already supports Ethereum, we’d better not use
                network id that Ethereum ecology that already used. The network
                id of test-net should be distinct from main-net.
              </div>
            </li>
            <li>
              <div>period</div>
              <div>
                Minimum difference between two consecutive block’s timestamps.
                Suggested 3s for the testnet .
              </div>
            </li>
            <li>
              <div>epoch</div>
              <div>
                Number of blocks after which to checkpoint and reset the pending
                votes. Suggested 100 for testnet
              </div>
            </li>
            <li>
              <div>nonce</div>
              <div>
                The nonce is the cryptographically secure mining proof-of-work
                that proves beyond reasonable doubt that a particular amount of
                computation has been expended in the determination of this token
                value.
                <br />
                In Zenith Chain, this value is always set to 0x0.
              </div>
            </li>
            <li>
              <div>timestamp</div>
              <div>Must be at least the parent timestamp + BLOCK_PERIOD.</div>
            </li>
            <li>
              <div>extraData</div>
              <ul>
                <li>
                  EXTRA_VANITY: Fixed number of extra-data prefix bytes reserved
                  for signer vanity. Suggested 32 bytes
                </li>
                <li>Signer Info: validator address</li>
                <li>
                  EXTRA_SEAL bytes (fixed) is the signer’s signature sealing the
                  header.
                </li>
              </ul>
            </li>
            <li>
              <div>difficulty</div>
              <div>
                A scalar value corresponding to the difficulty level applied
                during the nonce discovering of this block. Suggested 0x1 for
                testnet
              </div>
            </li>
            <li>
              <div>mixHash</div>
              <div>
                Reserved for fork protection logic, similar to the extra-data
                during the DAO. Must be filled with zeroes during normal
                operation.
              </div>
            </li>
            <li>
              <div>coinbase</div>
              <div>System controled address for collecting block rewards</div>
            </li>
            <li>
              <div>number</div>
              <div>
                Block height in the chain, where the height of the genesis is
                block 0.
              </div>
            </li>
            <li>
              <div>parentHash</div>
              <div>
                The Keccak 256-bit hash of the entire parent block’s header
                (including its nonce and mixhash). Pointer to the parent block,
                thus effectively building the chain of blocks. In the case of
                the Genesis block, and only in this case, it's 0.
              </div>
            </li>
          </ul>
        </div>

        <div id="zenithChainInitialization">
          <h3>Zenith Chain Initialization</h3>
          <p>
            There are two requirements we need to meet: 2. All the initial
            validators of Zenith Chain should be recorded in the ZC.
          </p>
          <p>
            The first one is a must, because if we want to transfer some Zenith
            Coin to ZC, we will consume some gas in ZC. So we must ensure there
            are already some Zenith Coins in ZC. That means the first interchain
            transfer should be done in the genesis block of side chain.
          </p>
          <p>
            For the second one, we should have that to ensure all the validators
            info and changes are tracked in the main chain.
          </p>
          <p>
            People can apply to be a validator or delegate to these candidates.
            We can have a time limit. After that, we collect all the elected
            validators and write them to the genesis of ZC.
          </p>
        </div>
        <div id="Account">
          <h3>Account and Address</h3>
          <p>
            For normal users, all the keys and addresses can be generated via
            Zenith Extension Wallet.
          </p>
          <p>
            This default wallet would use a similar way to generate keys as
            Ethereum, i.e. use 256 bits entropy to generate a 24-word mnemonic
            based on BIP39, and then use the mnemonic and an empty passphrase to
            generate a seed; finally use the seed to generate a master key, and
            derive the private key using BIP32/BIP44 with HD prefix as
            "44'/60'/", which is the same as Ethereum's derivation path.
          </p>
        </div>
      </>
    );
  }
}

export default Genesis;
