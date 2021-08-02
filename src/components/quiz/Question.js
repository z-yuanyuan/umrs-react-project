import propTypes from "prop-types";

const Question = (props) => {
  return (
    <div>
      <div className="">
        <div className="">
          <h1>{props.content}</h1>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  content: propTypes.string.isRequired,
};

export default Question;
