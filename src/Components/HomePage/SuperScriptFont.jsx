import React, { Component } from "react";
import styled from "styled-components";

const SuperScript = styled.span`
  vertical-align: top;
`;
class SuperScriptFont extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <span style={this.props.style}>{this.props.text}</span>
          <SuperScript style={this.props.superStyle}>
            {this.props.superScript}
          </SuperScript>
        </div>
      </React.Fragment>
    );
  }
}

export default SuperScriptFont;
