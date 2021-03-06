import React, { Component } from "react";
import axios from "axios/index";
// resources
import CarImage from "../Resources/imgs/car.png";
import WheelImage from "../Resources/imgs/wheel.jpg";
import styled from "styled-components";
// components
import SuperScriptFont from "../Components/HomePage/SuperScriptFont";
import NumberSelector from "../Components/HomePage/NumberSelector";
import CircleBtn from "../Components/HomePage/CircleBtn";
import WheelSizeSelector from "../Components/HomePage/WheelSizeSelector";

const NormalFont = styled.span`
  font-size: 45px;
  color: grey;
`;
const BlackFont = styled.span`
  font-size: 45px;
  font-weight: 500;
`;
const RedFont = styled.span`
  font-size: 45px;
  font-weight: 500;
  color: red;
`;

class HomePage extends Component {
  state = {
    acState: "off",
    speed: 45,
    temperature: -10,
    wheels: "19",
    results: [
      { name: "60", value: 246 },
      { name: "60D", value: 250 },
      { name: "75", value: 297 },
      { name: "75D", value: 306 },
      { name: "90D", value: 336 },
      { name: "P100D", value: 376 }
    ]
  };

  //   ac button
  onHandleChangeAC = () => {
    if (this.state.acState === "on") {
      this.setState({ acState: "off" });
    }
    if (this.state.acState === "off") {
      this.setState({ acState: "on" });
    }
  };

  //   wheels btn
  onHandleChangeWheel = name => {
    if (this.state.wheels !== "19" && name === "19") {
      this.setState({ wheels: "19" });
    }
    if (this.state.wheels !== "21" && name === "21") {
      this.setState({ wheels: "21" });
    }
  };
  // number selector
  onHandClickUp = name => {
    if (name === "speed") {
      this.setState({ speed: (this.state.speed += 5) });
    }
    if (name === "temperature") {
      this.setState({ temperature: (this.state.temperature += 5) });
    }
  };

  onHandClickDown = name => {
    if (name === "speed") {
      this.setState({
        speed: this.state.speed === 45 ? 45 : (this.state.speed -= 5)
      });
    }
    if (name === "temperature") {
      this.setState({
        temperature:
          this.state.temperature === -10 ? -10 : (this.state.temperature -= 5)
      });
    }
  };

  binarySearchSpeed = (targetSpeed, targetTem, arr, start, end) => {
    var start = start || 0;
    var end = end || arr.length - 1;
    var mid = parseInt(start + (end - start) / 2);
    // if can find speed
    if (targetSpeed == arr[mid]) {
      for (var tem in arr[mid]) {
        if (tem === targetTem) {
          return arr[mid][tem];
        }
      }
    } else if (targetSpeed > arr[mid]) {
      return this.binarySearchSpeed(targetSpeed, arr, mid + 1, end);
    } else {
      return this.binarySearchSpeed(targetSpeed, arr, start, mid - 1);
    }
    return -1;
  };

  // get json result
  async getResult() {
    let BaseURL =
      "http://bct-recruitment.s3-website-ap-southeast-2.amazonaws.com/battery-data.json";

    await axios.get(BaseURL).then(response => {
      var data = response.data;
      console.log(data);

      var resultSet = this.state.results;
      // search json contain selected speed
      for (var name in resultSet) {
        for (var type in data) {
          // find type
          if (type === name) {
            // search wheel size
            for (var wheelSearch in data[type]) {
              if (wheelSearch === this.state.wheels) {
                // search acstate
                for (var acSearch in wheelSearch[wheelSearch]) {
                  if (acSearch === this.state.acState) {
                    if (
                      this.binarySearch(
                        this.state.speed,
                        wheelSearch[wheelSearch]["speed"]
                      ) !== -1
                    ) {
                      //creates the clone of the state
                      let clone = resultSet.slice();
                      clone[name] = this.binarySearch(
                        this.state.speed,
                        wheelSearch[wheelSearch]["speed"]
                      );
                      this.setState({ results: clone });
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  componentDidMount() {
    var angle = 0;
    setInterval(function() {
      angle = (angle + 90) % 360;
      document.getElementById("car").className = "rotate" + angle;
    }, 1);
    this.getResult();
  }

  render() {
    return (
      <React.Fragment>
        {/* title */}
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-lg-3" />
          <div className="col-12 col-lg-6" style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "38px",
                fontWeight: "500",
                letterSpacing: "3px"
              }}
            >
              Range Per Charge
            </p>
          </div>
          <div className="col-lg-3" />
        </div>

        {/* car image */}
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-lg-1" />
          <div className="col-12 col-lg-10" style={{ textAlign: "center" }}>
            <img src={CarImage} style={{ width: "80%", height: "200px" }} />

            <span id="car">
              {/* left wheel */}
              <img
                id="wheel1"
                src={WheelImage}
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  left: "28%",
                  top: "50%"
                }}
              />
              {/* right wheel */}
              <img
                id="wheel2"
                src={WheelImage}
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  left: "61%",
                  top: "50%"
                }}
              />
            </span>
          </div>
          <div className="col-lg-1" />
        </div>

        {/* result */}
        {/* title */}
        <div className="row" style={{ whiteSpace: "nowrap" }}>
          <div className="col-lg-3" />
          <div className="col-lg-1">
            <NormalFont>60</NormalFont>
          </div>
          <div className="col-lg-1">
            <NormalFont>60</NormalFont>
            <BlackFont>D</BlackFont>
          </div>
          <div className="col-lg-1">
            <NormalFont>75</NormalFont>
          </div>
          <div className="col-lg-1">
            <NormalFont>75</NormalFont>
            <BlackFont>D</BlackFont>
          </div>
          <div className="col-lg-1">
            <NormalFont>90</NormalFont>
            <BlackFont>D</BlackFont>
          </div>
          <div className="col-lg-1">
            <RedFont>P</RedFont>
            <NormalFont>100</NormalFont>
            <RedFont>D</RedFont>
          </div>
          <div className="col-lg-3" />
        </div>

        {/* value */}
        <div className="row" style={{ whiteSpace: "nowrap" }}>
          <div className="col-lg-3" />
          {this.state.results.map(eachResult => (
            <div className="col-lg-1">
              <SuperScriptFont
                key={eachResult.name}
                text={eachResult.value}
                superScript="MI"
                style={{ color: "rgb(89, 152, 255)", fontSize: "45px" }}
                superStyle={{
                  color: "rgb(89, 152, 255)",
                  fontSize: "20px !important"
                }}
              />
            </div>
          ))}

          <div className="col-lg-3" />
        </div>

        <br />

        {/* option area */}
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-2">
            <NumberSelector
              key="speed"
              title="Speed"
              superScript="MPH"
              value={this.state.speed}
              onHandClickUp={() => this.onHandClickUp("speed")}
              onHandClickDown={() => this.onHandClickDown("speed")}
            />
          </div>

          <div className="col-lg-2" id="needLineBreak">
            <NumberSelector
              key="temporature"
              title="Outside Temperature"
              superScript="o"
              value={this.state.temperature}
              onHandClickUp={() => this.onHandClickUp("temperature")}
              onHandClickDown={() => this.onHandClickDown("temperature")}
            />
          </div>
          <div className="col-lg-2">
            <CircleBtn
              acState={this.state.acState}
              onHandleChangeAC={this.onHandleChangeAC}
            />
          </div>

          <div className="col-lg-2">
            <p style={{ color: "grey" }}>Wheels</p>
            <WheelSizeSelector
              key="wheel1"
              value="19"
              superScript={'"'}
              selected={this.state.wheels}
              onHandleChangeWheel={() => this.onHandleChangeWheel("19")}
            />
          </div>
          <div className="col-lg-2">
            <p style={{ color: "white" }}>&nbsp;</p>
            <WheelSizeSelector
              key="wheel2"
              value="21"
              superScript={'"'}
              selected={this.state.wheels}
              onHandleChangeWheel={() => this.onHandleChangeWheel("21")}
            />
          </div>
          <div className="col-lg-1" />
        </div>

        {/* text */}
        <div className="row">
          <div className="col-lg-1" />
          <div
            className="col-12 col-lg-10"
            style={{ color: "rgb(191, 195, 204)" }}
          >
            The actual amount of range that you experience will vary based on
            your particular use conditions. See how particular use conditions
            may affect your range in our simulation model. Vehicle range may
            vary depending on the vehicle configuration, battery age and
            condition, driving style and operating, environmental and climate
            conditions.
          </div>
          <div className="col-lg-1" />
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
