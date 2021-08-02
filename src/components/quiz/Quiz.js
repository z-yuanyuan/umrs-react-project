import propTypes from "prop-types";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";

const Quiz = (props) => {
  const renderAnswerOptions = (key) => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  };
  return (
    <div key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      <div className="question-answer">
        {props.answerOptions.map(renderAnswerOptions)}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  answer: propTypes.string.isRequired,
  answerOptions: propTypes.array.isRequired,
  counter: propTypes.number.isRequired,
  question: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionTotal: propTypes.number.isRequired,
  onAnswerSelected: propTypes.func.isRequired,
};

export default Quiz;
