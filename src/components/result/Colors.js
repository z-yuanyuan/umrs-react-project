import React, { Component } from "react";
import propTypes from "prop-types";
import { BrownDef, GreenDef, BlueDef, RedDef } from "../definitions/ColorsDef";
import { Link } from "react-router-dom";
import "./result.style.css";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBrownDef: false,
      showGreenDef: false,
      showBlueDef: false,
      showRedDef: false,
    };
    this.onBrownDefClick = this.onBrownDefClick.bind(this);
    this.onGreenDefClick = this.onGreenDefClick.bind(this);
    this.onBlueDefClick = this.onBlueDefClick.bind(this);
    this.onRedDefClick = this.onRedDefClick.bind(this);
  }

  renderNextBtn() {
    return (
      <div onClick={this.props._onNextClick}>
        <span>Next</span>
        <div className="icon">
          <i className="" />
        </div>
      </div>
    );
  }

  //go back to the /quiz page
  goBacktoQuestions() {
    return (
      <div>
        <Link to="/quiz" className="btn-goBacktoQuizPage">
          Return to Questions
        </Link>
      </div>
    );
  }

  renderBrownDef() {
    return (
      <BrownDef
        title={"Brown Type Definition"}
        content={`You are a Builder. You enjoy leading, creating and working hard.
                  You are a traditional person with respect for authority.
                  Your strengths are your diligence, directness and practicality.
                  Your weaknesses are your lack of tact, patience, and difficulty with abstractions.`}
        onBackClick={this.onBrownDefClick}
      />
    );
  }

  renderGreenDef() {
    return (
      <GreenDef
        title={"Green Type Definition"}
        content={`You are a Planner. You enjoy dreaming, plotting and innovating.
                  You tend to spend a lot of time thinking.
                  Your strengths are your vision, objectiveness and attention to detail.
                  Your weaknesses are your difficulty in putting yourself in the current moment and lack of practicality and speed.`}
        onBackClick={this.onGreenDefClick}
      />
    );
  }

  renderBlueDef() {
    return (
      <BlueDef
        title={"Blue Type Definition"}
        content={`You are a Relater. You enjoy chatting, romance and spending time with others.
                You are an empathetic person who tends to put the needs of others above your own.
                Your strengths are your sympathy, openness and awareness of your own emotions.
                Your weaknesses are your subjectivity, pliability and manipulability.`}
        onBackClick={this.onBlueDefClick}
      />
    );
  }

  renderRedDef() {
    return (
      <RedDef
        title={"Red Type Definition"}
        content={`You are an Adventurer. You enjoy action, excitement and drama.
                  You easily accept change and are spontaneous.
                  Your strengths are your tenacity, fearlessness and adaptability.
                  Your weaknesses are your carelessness and lack of focus and diligence.`}
        onBackClick={this.onRedDefClick}
      />
    );
  }

  render() {
    let showBrownDef = this.state.showBrownDef;
    let showGreenDef = this.state.showGreenDef;
    let showBlueDef = this.state.showBlueDef;
    let showRedDef = this.state.showRedDef;
    if (showBrownDef) {
      return this.renderBrownDef();
    } else if (showGreenDef) {
      return this.renderGreenDef();
    } else if (showBlueDef) {
      return this.renderBlueDef();
    } else if (showRedDef) {
      return this.renderRedDef();
    }
    return (
      <div className="result-container">
        <h3 className="">Thanks for taking the quiz! Your top 5 majors are:</h3>

        <h2 className=" ">{this.props.resultColors}</h2>

        <p className="">What does this result mean?</p>
        <ul className="">
          <li className="" onClick={this.onBrownDefClick}>
            Brown
            <div className="">
              <i className="" />
            </div>
          </li>
          <li className="" onClick={this.onGreenDefClick}>
            Green
            <div className="">
              <i className="" />
            </div>
          </li>
          <li className="" onClick={this.onBlueDefClick}>
            Blue
            <div className="">
              <i className="" />
            </div>
          </li>
          <li className="" onClick={this.onRedDefClick}>
            Red
            <div className="">
              <i className="" />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}

        {this.goBacktoQuestions()}
      </div>
    );
  }

  onBrownDefClick() {
    let showBrownDef = this.state.showBrownDef;
    this.setState({ showBrownDef: !showBrownDef });
  }

  onGreenDefClick() {
    let showGreenDef = this.state.showGreenDef;
    this.setState({ showGreenDef: !showGreenDef });
  }

  onBlueDefClick() {
    let showBlueDef = this.state.showBlueDef;
    this.setState({ showBlueDef: !showBlueDef });
  }

  onRedDefClick() {
    let showRedDef = this.state.showRedDef;
    this.setState({ showRedDef: !showRedDef });
  }
}

Colors.propTypes = {
  resultColors: propTypes.string.isRequired,
  resultBrown: propTypes.string.isRequired,
  resultGreen: propTypes.string.isRequired,
  resultBlue: propTypes.string.isRequired,
  resultRed: propTypes.string.isRequired,
};

export default Colors;
