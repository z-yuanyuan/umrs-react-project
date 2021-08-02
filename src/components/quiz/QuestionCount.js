import propTypes from "prop-types";

const QuestionCount = (props) => {
  return (
    <div className="question-count">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
};

QuestionCount.propTypes = {
  counter: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
};

export default QuestionCount;
