import React, { Component } from "react";
import Colors from "../result/Colors";
import Letters from "../result/Letters";
import Briggs from "../result/Briggs";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorsResult: false,
      showLettersResult: false,
      showBriggsResult: true,
    };
    this._onNextClick = this._onNextClick.bind(this);
  }
  renderBriggsResult() {
    return <Briggs resultBriggs={this.props.resultBriggs} />;
  }

  renderResultColors() {
    return (
      <Colors
        resultColors={this.props.resultColors}
        _onNextClick={this._onNextClick}
      />
    );
  }

  renderResultLetters() {
    return (
      <Letters
        resultLetters={this.props.resultLetters}
        _onNextClick={this._onNextClick}
      />
    );
  }

  render() {
    let showColorsResult = this.state.showColorsResult;
    let showLettersResult = this.state.showLettersResult;
    let showBriggsResult = this.state.showBriggsResult;
    if (showColorsResult) {
      return this.renderResultColors();
    } else if (showLettersResult) {
      return this.renderResultLetters();
    } else if (showBriggsResult) {
      return this.renderBriggsResult();
    }
  }

  _onNextClick() {
    let showColorsResult = this.state.showColorsResult;
    let showLettersResult = this.state.showLettersResult;
    let showBriggsResult = this.state.showBriggsResult;

    if (showColorsResult) {
      setTimeout(() => {
        this.setState({
          showColorsResult: !showColorsResult, // -> false
          showLettersResult: !showLettersResult, // -> true
        });
      }, 800);
    } else if (showLettersResult) {
      setTimeout(() => {
        this.setState({
          showLettersResult: !showLettersResult, // false
          showBriggsResult: !showBriggsResult, // true
        });
      }, 800);
    }
  }
}

export default Results;
