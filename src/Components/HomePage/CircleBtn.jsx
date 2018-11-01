import React, { Component } from "react";

class CircleBtn extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            width: "100px",
            height: "100px",
            boxShadow: "0 0 0 5px rgb(222, 228, 237)",
            background:
              this.props.acState === "on" ? "rgb(102, 163, 255)" : "white",
            cursor: "pointer"
          }}
          onClick={this.props.onHandleChangeAC}
        >
          <div style={{ textAlign: "center" }}>
            {this.props.acState === "on" ? (
              <p style={{ verticalAlign: "top", marginTop: "20px" }}>AC ON</p>
            ) : (
              <p style={{ verticalAlign: "top", marginTop: "20px" }}>AC OFF</p>
            )}

            <p style={{ verticalAlign: "down" }}>
              <i class="fas fa-leaf" />
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CircleBtn;
