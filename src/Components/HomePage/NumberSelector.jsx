import React, { Component } from "react";
import SuperScriptFont from "../HomePage/SuperScriptFont";
import styled from "styled-components";

const Arrow = styled.div`
  color: rgb(102, 163, 255);
`;
class NumberSelector extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <p>{this.props.title}</p>
          {/* select */}
          <div
            className="row"
            style={{ border: "1px solid grey", width: "80%" }}
          >
            {/* display */}
            <div className="col-9">
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
            {/* up and down btn */}
            <div className="col-1">
              <Arrow style={{ verticalAlign: "top" }}>
                <i class="fas fa-angle-up" onClick={this.props.onHandClickUp} />
              </Arrow>

              {/* <hr /> */}

              <Arrow style={{ verticalAlign: "down" }}>
                <i
                  class="fas fa-angle-down"
                  onClick={this.props.onHandClickDown}
                />
              </Arrow>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NumberSelector;
