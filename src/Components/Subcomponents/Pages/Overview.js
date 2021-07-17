import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
      <div style={{ margin: 0 }}>
        <h2>Overview</h2>
        <table>
          <tr>
            <th></th>
            <th>Zenith Chian</th>
          </tr>
          <tr>
            <td>Consensus</td>

            <td>PoSA</td>
          </tr>
          <tr>
            <td>No. of Validators</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Mean Block Time</td>
            <td>~5s</td>
          </tr>
          <tr>
            <td>Programmability </td>
            <td>Support EVM-compatible smart contracts</td>
          </tr>
          <tr>
            <td>Cross Chian</td>
            <td>
              ZC comes with efficient native dual chain communication; Optimized
              for scaling high-performance dApps that require fast and smooth
              user experience.
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Overview;
