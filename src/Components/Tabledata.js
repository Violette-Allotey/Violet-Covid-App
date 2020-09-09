import React, { Component } from "react";

export class TableData extends Component {
  render() {
    return (
      <div className="tip">
        <div className="tips">
          <p>Health Tips</p>
          <img
            src="img/covid19b.jpg"
            alt="a question mark"
            width={195}
            height="110px"
          />
        </div>
        <div className="tips">
          <p>News &amp; Updates</p>
          <img
            src="img/covid19b.png"
            alt=" a black head with a nose mask on"
            width={195}
            height="110px"
          />
        </div>
        <div className="tips">
          <p>Subscribe to our newsletter</p>
          <img
            src="img/download.jpg"
            alt="an envelope with the sign @ written on it"
            width={195}
            height="90px"
          />
        </div>
      </div>
    );
  }
}

export default TableData;
