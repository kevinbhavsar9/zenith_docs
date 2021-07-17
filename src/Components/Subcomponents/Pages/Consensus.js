import React, { Component } from "react";

class Consensus extends Component {
  render() {
    return (
      <>
        <div id="abstract">
          <h2>Abstract</h2>
          <p>
            We target to design the consensus engine of ZC (Zenith Chain) to
            achieve the following goals:
            <br />
            <ul>
              <li>
                Wait a few blocks to confirm(should be less than Ethereum 1.0),
                better no fork in most cases.
              </li>
              <li>
                Blocking time should be shorter than Ethereum 1.0, i.e. 5
                seconds or less.
              </li>
              <li>No inflation, the block reward is transaction gas fees.</li>
              <li>As much as compatible as Ethereum.</li>
              <li>With staking and governance as powerful as cosmos.</li>
            </ul>
          </p>
          <p>
            Geth implements two kinds of consensus engine: ethash(based on PoW)
            and clique(base on PoA). Ethash is not a fit option for ZC because
            ZC gives up PoW. Clique has smaller blocking time and is
            invulnerable to 51% attack while doing as little to the core data
            structure as possible to preserve existing Ethereum client
            compatibility. The shortcoming of PoA is centralization, and the
            lack of meaningful staking and governance capability on-chain.
            <br />
            <ul>
              <li>
                ValidatorSet change, double sign slash of ZC is updated through
                interchain communication.
              </li>
              <li>Consensus engine of ZC keeps as simple as clique.</li>
            </ul>
          </p>
          <p>
            We investigated some popular implementations of PoA consensus and
            find out that Bor follows a similar design as above. We will borrow
            a few parts from Bor and propose a new consensus engine to achieve
            all these goals.
          </p>
        </div>

        <div id="infra">
          <h2>Infrastructure Components</h2>
          <ol>
            <li>
              ZC validators. Validators are responsible for validating
              transactions and generating blocks, ensuring the network’s
              security and the consistency of the ledger. In return, they
              receive rewards from the gas consumption of transactions.
            </li>
            <li>
              Staking dApps on ZC(also named as system contract). There are
              several genesis contracts to help implement staking on ZC. Six
              classification groups of them:
              <br />
              <ul>
                <li>
                  Cross Chain Contract. It is the cross chain communication
                  layer. It will verify the sequence and merkle proof of a cross
                  chain package.
                </li>

                <li>
                  System Reward contract. The incentive mechanism for relayers
                  to maintain system contracts. They will get rewards from
                  system reward contract.
                </li>
                <li>
                  Liveness Slash Contract. The liveness of ZC relies on
                  validator set can produce blocks timely when it is their turn.
                  Validators can miss their turns due to any reason. This
                  instability of the operation will hurt the performance of the
                  network and introduce more non-deterministic into the system.
                  This contract responsible for recording the missed blocking
                  metrics of each validator. Once the metrics are above the
                  predefined threshold, the blocking reward for validator will
                  not be relayed to ZC for distribution but shared with other
                  better validators.
                </li>
              </ul>
            </li>
          </ol>

          <p>
            This doc only focus on the ZC validators and Staking dApps on ZC
            parts which are more closely to consensus engine.
          </p>
        </div>

        <div id="distribuion">
          <h2>System Reward Distribution</h2>
          <p>
            The system reward structure in ZC is highly configurable. We may
            adjust the parameters through governance.
          </p>
          <p>
            The rewards comes from transaction fees, rewards are distributed
            based on several(configurable) rules: 1. Validator that generate the
            block will receives 15/16 of the gas fee. 2. System reward contract
            receive 1/16 of the gas fee.
          </p>
        </div>

        {/* <div>
          <h2>Staking dApps on ZC</h2>
        </div> */}

        <div id="protocol">
          <h2>Consensus Protocol</h2>
          <p>
            The implement of the consensus engine is named as Parlia which is
            similar to clique. This doc will focus more on the difference and
            ignore the common details.
          </p>
          <p>Before introducing, we would like to clarify some terms:</p>
          <ol>
            <li>
              Epoch block. Consensus engine will update validatorSet from
              ZCValidatorSet contract periodly. For now the period is 200
              blocks, a block is called epoch block if the height of it is times
              of 200.
            </li>
            <li>
              Snapshot. Snapshot is an assistant object that help to store the
              validators and recent signers of blocks.
            </li>
          </ol>
          <h4>Key features</h4>
          <h5>Light client security</h5>
          <p>
            Validators set changes take place at the (epoch+N/2) blocks. (N is
            the size of validatorset before epoch block). Considering the
            security of light client, we delay N/2 block to let validatorSet
            change take place.
          </p>
          <p>
            Every epoch block, validator will query the validatorset from
            contract and fill it in the extra_data field of block header. Full
            node will verify it against the validatorset in contract. A light
            client will use it as the validatorSet for next epoch blocks,
            however, it can not verify it against contract, it have to believe
            the signer of the epoch block. If the signer of the epoch block
            write a wrong extra_data, the light client may just go to a wrong
            chain. If we delay N/2 block to let validatorSet change take place,
            the wrong epoch block won’t get another N/2 subsequent blocks that
            signed by other validators, so that the light client are free of
            such attack.
          </p>
          <h4>System transaction</h4>
          <p>
            The consensus engine may invoke system contracts, such transactions
            are called system transactions. System transactions is signed by the
            the validator who is producing the block. For the witness node, will
            generate the system transactions(without signature) according to its
            intrinsic logic and compare them with the system transactions in the
            block before applying them.
          </p>
          <h4>Enforce backoff</h4>
          <p>
            In Clique consensus protocol, out-of-turn validators have to wait a
            randomized amount of time before sealing the block. It is
            implemented in the client-side node software and works with the
            assumption that validators would run the canonical version. However,
            given that validators would be economically incentivized to seal
            blocks as soon as possible, it would be possible that the validators
            would run a modified version of the node software to ignore such a
            delay. To prevent validator rushing to seal a block, every out-turn
            validator will get a specified time slot to seal the block. Any
            block with a earlier blocking time produced by a out-turn validator
            will be discarded by other witness node.
          </p>
        </div>
        <div id="produce">
          <h2>How to Produce a new block</h2>
          <h4>Step 1:Prepare</h4>
          <p>A validator node prepares the block header of next block.</p>
          <ul>
            <li>Load snapshot from cache or database,</li>
            <li>
              If (height % epoch)==0, should fetch ValidatorSet from
              ZCValidatorSet contract.
            </li>
            <li>
              Every epoch block, will store validators set message in extraData
              field of block header to facilitate the implement of light client.
            </li>
            <li>The coinbase is the address of the validator</li>
          </ul>
          <h4>Step 2:FinalizeAndAssemble</h4>
          <ul>
            <li>
              If the validator is not the in turn validator, will call liveness
              slash contract to slash the expected validator and generate a
              slashing transaction.
            </li>
            <li>
              If there is gas-fee in the block, will distribute 1/16 to system
              reward contract, the rest go to validator contract.
            </li>
          </ul>
          <h4>Step 3:Seal</h4>
          <p>The final step before a validator broadcast the new block.</p>
          <ul>
            <li>
              Sign all things in block header and append the signature to
              extraData.
            </li>
            <li>
              If it is out of turn for validators to sign blocks, an honest
              validator it will wait for a random reasonable time.
            </li>
          </ul>
        </div>
        <div id="validate">
          <h2>How to Validate/Replay a block</h2>
          <h4>Step1: VerifyHeader</h4>
          <p>Verify the block header when receiving a new block.</p>
          <ul>
            <li>
              Verify the signature of the coinbase is in extraData of the
              blockheader
            </li>
            <li>
              Compare the block time of the blockHeader and the expected block
              time that the signer suppose to use, will deny a blockerHeader
              that is smaller than expected. It helps to prevent a selfish
              validator from rushing to seal a block.
            </li>
            <li>
              The coinbase should be the signer and the difficulty should be
              expected value.
            </li>
          </ul>
          <h4>Step2: Finalize</h4>
          <ul>
            <li>
              If it is an epoch block, a validator node will fetch validatorSet
              from ZCValidatorSet and compare it with extra_data.
            </li>
            <li>
              If the block is not generate by inturn validatorvalidaror, will
              call slash contract. if there is gas-fee in the block, will
              distribute 1/16 to system reward contract, the rest go to
              validator contract.
            </li>
            <li>
              The transaction generated by the consensus engine must be the same
              as the tx in block.
            </li>
          </ul>
        </div>
        <div id="signature">
          <h2>Signature</h2>
          <p>
            The signature of the coinbase is in extraData of the blockheader,
            the structure of extraData is: epoch block. 32 bytes of extraVanity
            + N*(20 bytes of validator address) + 65 bytes of signature. none
            epoch block. 32 bytes of extraVanity + 65 bytes of signature. The
            signed content is the Keccak256 of RLP encoded of the block header.
          </p>
        </div>
        <div id="security">
          <h2>Security and Finality</h2>
          <p>
            Given there are more than 1/2*N+1 validators are honest, PoA based
            networks usually work securely and properly. However, there are
            still cases where certain amount Byzantine validators may still
            manage to attack the network, e.g. through the “Clone Attack”. To
            secure as much as ZC, ZC users are encouraged to wait until
            receiving blocks sealed by more than 2/3*N+1 different validators.
            In that way, the ZC can be trusted at a similar security level to ZC
            and can tolerate less than 1/3*N Byzantine validators.
          </p>
          <p>
            With 21 validators, if the block time is 5 seconds, the 2/3*N+1
            different validator seals will need a time period of (2/3*21+1)*5 =
            75 seconds. Any critical applications for ZC may have to wait for
            2/3*N+1 to ensure a relatively secure finality. However, besides
            such an arrangement, ZC does introduce Slashing logic to penalize
            Byzantine validators for double signing or instability. This
            Slashing logic will expose the malicious validators in a very short
            time and make the Clone Attack very hard or extremely non-economic
            to execute. With this enhancement, 1/2*N+1 or even fewer blocks are
            enough as confirmation for most transactions.
          </p>
        </div>
        <div id="potential">
          <h2>Potential Issue</h2>
          <h4>
            Extending the ruling of the current validator set via temporary
            censorship
          </h4>
          <p>
            If the transaction that updates the validator is sent to the ZC
            right on the epoch period, then it is possible for the in-turn
            validator to censor the transaction and not change the set of
            validators for that epoch. While a transaction cannot be forever
            censored without the help of other n/2 validators, by this it can
            extend the time of the current validator set and gain some rewards.
            In general, the probability of this scheme can increase by colluding
            with other validators. It is relatively benign issue that a block
            may be approximately 5 secs and one epoch being 240 blocks, i.e. 20
            mins so the validators could only be extended for another 20 mins.
          </p>
        </div>
      </>
    );
  }
}

export default Consensus;
