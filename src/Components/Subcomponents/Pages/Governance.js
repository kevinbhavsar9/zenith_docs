import React, { Component } from "react";

class Governance extends Component {
  render() {
    return (
      <>
        <div id="governance">
          <h2>Governance of ZC</h2>
          <article>
            <h3>Motivation</h3>
            <p>
              There are many system parameters to control the behavior of the
              ZC:
            </p>
            <ul>
              <li>
                All these parameters of ZC system contracts should be flexible:
                slashing threshold, cross-chain transfer fees, relayer reward
                amount and so on.
              </li>
            </ul>
          </article>
        </div>
        <div id="overview">
          <h2>For ZC:</h2>
          <ul>
            <li>
              Uniform interface. The contracts who are interested in these
              parameters only need to implement the same interface.
            </li>
            <li>
              Extensible. When adding a new system contract, there is no need to
              modify any other contracts.
            </li>
            <li>
              Failure toleration. Validators could vote to skip false proposals
              and go on.
            </li>
            <li>
              Multiplexing. Now we have only parameters gov, but in the future,
              there will be more governance functions.
            </li>
          </ul>
        </div>
        <div id="govtCont">
          <h2>Gov Contract</h2>
          <p>
            Implement the cross chain contract interface: handlePackage(bytes
            calldata msgBytes, bytes calldata proof, uint64 height, uint64
            packageSequence)
          </p>
          <p>
            And do following step: - Basic check. Sequence check, Relayer sender
            check, block header sync check, merkel proof check. - Check the msg
            type according to the first byte of msgBytes, only param change msg
            type supported for now. Check and parse the msg bytes. - Use a fixed
            gas to invoke the updateParam interface of target contract. Catch
            any exception and emit fail event if necessary, but let the process
            go on. - Claim reward for the relayer and increase sequence.
          </p>
        </div>
      </>
    );
  }
}

export default Governance;
