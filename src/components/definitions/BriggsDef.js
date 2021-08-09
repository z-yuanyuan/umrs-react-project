import "./def.style.css";
import {useHistory} from 'react-router'

export const ISTJ = ({ majors, content, onBackClick }) => {
  const history = useHistory() 

  const openLink = (id) => {
    history.push("/all-majors", {id} )
}
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <p onClick={()=>openLink(item)}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ISFJ = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const INFJ = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const INTJ = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ISTP = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ISFP = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const INFP = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const INTP = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ESTP = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ESFP = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ENFP = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ENTP = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ESTJ = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ESFJ = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ENFJ = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ENTJ = ({ majors, content, onBackClick }) => {
  return (
    <div className="quiz-container">
      <div className="result-display">
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>

        <p>Your top 5 majors are:</p>
        <ul>
          {majors.split(",").map((item, idx) => (
            <li className="list" key={idx}>
              <a href="/all-majors">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
