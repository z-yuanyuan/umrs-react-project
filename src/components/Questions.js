import React, { Component } from "react";
import Quiz from "../components/quiz/Quiz";
import Results from "../components/result/Results";
import quizQuestions from "../api/quizQuestions";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        Colors: {
          Green: 10,
          Brown: 10,
          Blue: 10,
          Red: 10,
        },
        Letters: {
          A: 10,
          B: 10,
          C: 10,
          D: 10,
        },
        Briggs: {
          E: 5,
          I: 5,
          S: 5,
          N: 5,
          T: 5,
          F: 5,
          J: 5,
          P: 5,
        },
      },
      resultBriggs: "",
      resultColors: "",
      resultLetters: "",
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // populate app’s state using the componentWillMount life cycle event
  componentWillMount() {
    const answerOptions = quizQuestions.map((question) => question.answers);
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0],
    });
  }

  // setting the answer based on the user’s selection
  setUserAnswer(answer) {
    const answersCount = this.state.answersCount;
    let applyAnswer = (answer) => {
      const answer_array = answer.split(",");
      let briggsAnswer = answer_array[0];
      let colorsAnswer = answer_array[1];
      let lettersAnswer = answer_array[2];
      if (answer_array.length === 3) {
        answersCount["Briggs"][briggsAnswer] += 1;
        answersCount["Colors"][colorsAnswer] += 1;
        answersCount["Letters"][lettersAnswer] += 1;
      } else if (answer_array.length === 4) {
        answersCount["Briggs"][briggsAnswer] -= 1;
        answersCount["Colors"][colorsAnswer] -= 1;
        answersCount["Letters"][lettersAnswer] -= 1;
      }
      return answersCount;
    };
    this.setState({
      answersCount: applyAnswer(answer),
      answer: answer,
    });
  }

  // increment the counter and questionId state
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }

  // setting the answer and then setting the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 800);
    } else {
      setTimeout(
        () =>
          this.setResults(
            this.getColorsResults(),
            this.getLettersResults(),
            this.getBriggsResults()
          ),
        800
      );
    }
  }

  // ===========================================================================
  //                        get results
  // ===========================================================================
  getBriggsResults() {
    const answerCount = this.state.answersCount;
    const briggsAnswer = answerCount["Briggs"];

    let briggsType = "";
    if (briggsAnswer.E >= briggsAnswer.I) {
      briggsType += "E";
    } else briggsType += "I";
    if (briggsAnswer.S >= briggsAnswer.N) {
      briggsType += "S";
    } else briggsType += "N";
    if (briggsAnswer.T >= briggsAnswer.F) {
      briggsType += "T";
    } else briggsType += "F";
    if (briggsAnswer.J >= briggsAnswer.P) {
      briggsType += "J";
    } else briggsType += "P";
    return briggsType;
  }

  getColorsResults() {
    const answersCount = this.state.answersCount;
    const colorsAnswer = answersCount["Colors"];
    const answersCountKeysColors = Object.keys(colorsAnswer);
    const answersCountValuesColors = answersCountKeysColors.map(
      (key) => colorsAnswer[key]
    );
    const maxAnswerCountColors = Math.max.apply(null, answersCountValuesColors);
    return answersCountKeysColors.filter(
      (key) => colorsAnswer[key] === maxAnswerCountColors
    );
  }

  getLettersResults() {
    const answersCount = this.state.answersCount;
    const lettersAnswer = answersCount["Letters"];
    const answersCountKeysLetters = Object.keys(lettersAnswer);
    const answersCountValuesLetters = answersCountKeysLetters.map(
      (key) => lettersAnswer[key]
    );
    const maxAnswerCountLetters = Math.max.apply(
      null,
      answersCountValuesLetters
    );
    return answersCountKeysLetters.filter(
      (key) => lettersAnswer[key] === maxAnswerCountLetters
    );
  }

  // ===========================================================================
  //                        set results
  // ===========================================================================
  setResults(resultColors, resultLetters, resultBriggs) {
    if (resultColors.length >= 1) {
      this.setState({ resultColors: resultColors[0] });
    }
    if (resultLetters.length >= 1) {
      this.setState({ resultLetters: resultLetters[0] });
    }
    if (resultBriggs.length >= 1) {
      this.setState({ resultBriggs: resultBriggs });
    }
  }

  // ===========================================================================
  //                    functions to render quiz
  // ===========================================================================
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  // ===========================================================================
  //                    functions to render result
  // ===========================================================================
  renderResult() {
    return (
      <Results
        resultColors={this.state.resultColors}
        resultLetters={this.state.resultLetters}
        resultBriggs={this.state.resultBriggs}
      />
    );
  }

  // ===========================================================================
  //                       render this question page
  // ===========================================================================
  render() {
    let resultBriggs = this.state.resultBriggs;
    if (resultBriggs) {
      return this.renderResult();
    }
    return (
      <div className="question-container">
        <div className="questions-content">{this.renderQuiz()}</div>
      </div>
    );
  }
}

export default Question;

// const Questions = () => {
//   return (
//     <div className="question-container">
//       <div className="questions-content">
//         <div className="questions-title">
//           <h1>I have multiple interests and a natural curiosity about the world.</h1>
//         </div>
//         <div className="question-answer">
//           <div>YES</div>
//           <div>NO</div>
//         </div>
//         <div className="home-button-inner">
//             <div>
//               <p>Take the quiz</p>
//               <a to="/quiz" class="btn-startQuiz">
//                 start now
//               </a>
//             </div>
//             <div>
//               <p>Explore all majors</p>
//               <a to="/majors" class="btn-showAllMajors">
//                 explore
//               </a>
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Questions;
