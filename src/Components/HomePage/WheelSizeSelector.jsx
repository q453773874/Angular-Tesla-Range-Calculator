import React, { Component } from "react";

import SuperScriptFont from "../HomePage/SuperScriptFont";

class WheelSizeSelector extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* select */}
        <div
          className="row"
          style={{
            border:
              this.props.selected === this.props.value
                ? "2px solid rgb(52, 109, 237)"
                : "2px solid grey",
            fontSize: "30px",
            width: "80%",
            cursor: "pointer"
          }}
          onClick={this.props.onHandleChangeWheel}
        >
          {/* display */}
          <div className="col-7">
            <i class="fas fa-dharmachakra" />
          </div>
          {/* up and down btn */}
          <div className="col-1">
            <SuperScriptFont
              text={this.props.value}
              superScript={this.props.superScript}
              style={{ color: "black", fontSize: "30px" }}
              superStyle={{
                color: "grey",
                fontSize: "20px !important"
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WheelSizeSelector;
