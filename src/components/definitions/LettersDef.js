const LetterA = ({ title, content, onBackClick }) => {
  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </div>
    </div>
  );
};

const LetterB = ({ title, content, onBackClick }) => {
  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </div>
    </div>
  );
};

const LetterC = ({ title, content, onBackClick }) => {
  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </div>
    </div>
  );
};

const LetterD = ({ title, content, onBackClick }) => {
  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </div>
    </div>
  );
};

export { LetterA, LetterB, LetterC, LetterD };
