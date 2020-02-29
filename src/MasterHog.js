import React, { Component } from "react";
import Master from "./assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "./db.js";
import style from "./style.css";
const dataFunc = data => {
  return dataFunc.map(data => {
    return <BabyHog name={data.name} />;
  });
};

export default class MasterHog extends Component {
  constructor() {
    super();
    this.state = {
      eyeColor: "blue",
      buttonPressed: 0
    };
  }

  changeEyeColor = e => {
    this.setState({
      eyeColor: e.target.value,
      buttonPressed: 1
    });
  };

  renderData = list => {
    return list.map(item => {
      return (
        <BabyHog
          name={item.name}
          hobby={item.hobby}
          buttonPressed={this.state.buttonPressed}
          eyeColor={this.state.eyeColor}
        />
      );
    });
  };

  render() {
    let color = null;

    if (this.state.buttonPressed === 1) {
      color = this.state.eyeColor;
    }

    return (
      <div>
        <div className={"buttons"}>
          <input
            type="radio"
            name="eyeColor"
            value="blue"
            onChange={this.changeEyeColor}
          />
          Blue<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="sun"
            onChange={this.changeEyeColor}
          />
          Sun<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="glowing"
            onChange={this.changeEyeColor}
          />
          Glowing<br></br>
        </div>
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {color}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        <ul className="hoglist">{this.renderData(offspring)}</ul>
      </div>
    );
  }
}
