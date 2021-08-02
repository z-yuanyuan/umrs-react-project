const BrownDef = ({ title, content, onBackClick }) => {
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

const GreenDef = ({ title, content, onBackClick }) => {
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

const BlueDef = ({ title, content, onBackClick }) => {
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

const RedDef = ({ title, content, onBackClick }) => {
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

export { BrownDef, GreenDef, BlueDef, RedDef };
