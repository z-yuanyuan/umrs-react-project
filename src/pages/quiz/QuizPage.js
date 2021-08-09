import { Link } from "react-router-dom";
import React from "react";
import "./quiz-page.styles.css";

const QuizPage = () => {
  const h1Title = "Welcome To University Major Recommender System";

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h1>{h1Title}</h1>
        <h3>Quiz consists of 40 questions </h3>
        <h3>
          The results will be displayed after the quiz has been completed.
        </h3>
        <div className="quiz-button-inner">
          <div>
            <div className="quiz-time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="mr-2 d-none d-md-block"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g stroke-width="1.5">
                    <g transform="translate(-149 -722) translate(0 118) translate(150 156) translate(0 444) translate(0 5)">
                      <circle cx="8" cy="8" r="8" stroke="#272B41"></circle>
                      <path stroke="#585AEA" d="M8 3.2L8 8 11.2 9.6"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="time-text">Only takes 8 minutes </span>
            </div>
            <Link to="/questions" className="btn-startQuiz">
              start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
