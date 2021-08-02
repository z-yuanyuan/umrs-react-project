import propTypes from "prop-types";

const AnswerOption = (props) => {
  return (
    <div className="answer-option">
      <input
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        name={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
        type="checkbox"
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </div>
  );
};

AnswerOption.propTypes = {
  answerType: propTypes.string.isRequired,
  answerContent: propTypes.string.isRequired,
  answer: propTypes.string.isRequired,
  onAnswerSelected: propTypes.func.isRequired,
};

export default AnswerOption;
