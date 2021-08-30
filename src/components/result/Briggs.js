import React, { Component } from "react";
import propTypes from "prop-types";

import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ,
} from "../definitions/BriggsDef";

class Briggs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false,
    };
    this.onISTJ_click = this.onISTJ_click.bind(this);
    this.onISFJ_click = this.onISFJ_click.bind(this);
    this.onINFJ_click = this.onINFJ_click.bind(this);
    this.onINTJ_click = this.onINTJ_click.bind(this);
    this.onISTP_click = this.onISTP_click.bind(this);
    this.onISFP_click = this.onISFP_click.bind(this);
    this.onINFP_click = this.onINFP_click.bind(this);
    this.onINTP_click = this.onINTP_click.bind(this);
    this.onESTP_click = this.onESTP_click.bind(this);
    this.onESFP_click = this.onESFP_click.bind(this);
    this.onENFP_click = this.onENFP_click.bind(this);
    this.onENTP_click = this.onENTP_click.bind(this);
    this.onESTJ_click = this.onESTJ_click.bind(this);
    this.onESFJ_click = this.onESFJ_click.bind(this);
    this.onENFJ_click = this.onENFJ_click.bind(this);
    this.onENTJ_click = this.onENTJ_click.bind(this);
  }

  renderISTJ() {
    return (
      <ISTJ
        content={`You are a type ISTJ, aka The Inspector.
        ISTJ’s (Introverted, Sensing, Thinking, Judging) are known to be serious, practical, realistic, and logical people. 
        Majors you would do well in include:`}
        majors={
          "Accounting and Finance,Business Management and Administration,Computer Science"
        }
        onBackClick={this.onISTJ_click}
      />
    );
  }

  renderISFJ() {
    return (
      <ISFJ
        content={`You are a type ISFJ, aka The Protector.
        ISFJ’s (Introverted,Sensing, Feeling, Judging) are characteristically quiet, considerate, persistent, enjoy having order and can be a perfectionist at times. 
        They would be great studying:`}
        majors={
          "Accounting and Finance,Digital Media,English Language and Literature"
        }
        onBackClick={this.onISFJ_click}
      />
    );
  }

  renderINFJ() {
    return (
      <INFJ
        content={`You are a type INFJ, aka The Counselor.
        INFJ’s (Introverted, Intuition, Feeling, Judging) are insightful, empathetic, and seek to always improve the common good. 
        Careers paths and majors they would thrive in include:
                  `}
        majors={
          "Social Work,PHILOSOPHY AND RELIGIOUS STUDIES,EARLY CHILDHOOD EDUCATION"
        }
        onBackClick={this.onINFJ_click}
      />
    );
  }

  renderINTJ() {
    return (
      <INTJ
        content={`You are a type INTJ, aka The Mastermind.
        INTJ’s (Introverted, Intuition, Thinking, Judging) are problem solvers, “big picture” thinkers, and independent people. 
        Careers paths and majors they would thrive in include:`}
        majors={
          "Digital Media,Education,Business Management and Administration"
        }
        onBackClick={this.onINTJ_click}
      />
    );
  }

  renderISTP() {
    return (
      <ISTP
        content={`You are a type ISTP, aka The Crafter.
        ISTP’s (Introverted, Sensing, Thinking, Perceiving) have analytical, flexible, efficient personality types. 
        They have strong compatibility with majors below:`}
        majors={"Business Management and Administration,Psychology,Social Work"}
        onBackClick={this.onISTP_click}
      />
    );
  }

  renderISFP() {
    return (
      <ISFP
        content={`You are a type ISFP, aka The Composer.
        ISFP’s (Introverted, Sensing, Feeling, Perceiving) are known to be independent, loyal, and able to enjoy the present without focusing too much on the future. Because of these qualities, 
        they would be well matched with a major in:`}
        majors={"Mathematics,Social Work,General Argiculture"}
        onBackClick={this.onISFP_click}
      />
    );
  }

  renderINFP() {
    return (
      <INFP
        content={`You are a type INFP, aka The Healer.
        INFP’s (Introverted, Intuition, Feeling, Perceiving) are idealistic, curious, and are known to hold firmly to their values and beliefs. 
        Because of these characteristics they would be good in:`}
        majors={"EARLY CHILDHOOD EDUCATION,Social Work,Journalism"}
        onBackClick={this.onINFP_click}
      />
    );
  }

  renderINTP() {
    return (
      <INTP
        content={`You are a type INTP, aka The Architect.
        INTP’s (Introverted, Intuition, Thinking, Perceiving) are logical, practical, critical, and great at solving abstract, in-depth problems. They would do well in:`}
        majors={"Journalism,Computer Science,Social Work"}
        onBackClick={this.onINTP_click}
      />
    );
  }

  renderESTP() {
    return (
      <ESTP
        content={`You are a type ESTP, aka The Promoter.
        ESTP’s (Extroverted, Sensing, Thinking, Perceiving) learn best through action, are pragmatic and like to seek immediate results. They would do well in studying:`}
        majors={
          "Business Management and Administration,English Language and Literature,Mathematics"
        }
        onBackClick={this.onESTP_click}
      />
    );
  }

  renderESFP() {
    return (
      <ESFP
        content={`You are a type ESFP, aka The Performer.
        ESFP’s (Extroverted, Sensing, Feeling, Perceiving) are outgoing, enjoy working on a team, and like to be spontaneous. They would fit well in studying:`}
        majors={"Visual and Performing Arts,Marketing,Music"}
        onBackClick={this.onESFP_click}
      />
    );
  }

  renderENFP() {
    return (
      <ENFP
        content={`You are a type ENFP, aka The Champion.
        ENFP’s (Extroverted, Intuition, Feeling, Perceiving) are known to be good at improvising, are enthusiastic and imaginative. They would be well matched in:`}
        majors={"English Language and Literature,Visual and Performing Arts"}
        onBackClick={this.onENFP_click}
      />
    );
  }

  renderENTP() {
    return (
      <ENTP
        content={`You are a type ENTP, aka The Inventor.
        ENTP’s (Extroverted, Intuition, Thinking, Perceiving) are problem solvers, outspoken, and often bore easily. They would do well in studying:`}
        majors={"Business Management and Administration,Marketing"}
        onBackClick={this.onENTP_click}
      />
    );
  }

  renderESTJ() {
    return (
      <ESTJ
        content={`You are a type ESTJ, aka The Supervisor.
        ESTJ’s (Extroverted, Sensing, Thinking, Judging) are matter-of-fact, decisive, and practical. Degrees that will accentuate their strengths include:`}
        majors={"Computer Science,Mathematics,Law"}
        onBackClick={this.onESTJ_click}
      />
    );
  }

  renderESFJ() {
    return (
      <ESFJ
        content={`You are a type ESFJ, aka The Provider. 
        ESFJ’s (Extroverted, Sensing, Feeling, Judging) are to known to always seek harmony, are conscientious and warmhearted. They would do well pursuing a major in:`}
        majors={"Business Management and Administration,NURSING"}
        onBackClick={this.onESFJ_click}
      />
    );
  }

  renderENFJ() {
    return (
      <ENFJ
        content={`You are a type ENFJ, aka The Teacher.
        ENFJ’s (Extroverted, Intuition, Feeling, Judging) are natural leaders, good communicators, and often look to the interests of others. They would be highly compatible with:`}
        majors={
          "Business Management and Administration,Education,Journalism,ADVERTISING AND PUBLIC RELATIONS"
        }
        onBackClick={this.onENFJ_click}
      />
    );
  }

  renderENTJ() {
    return (
      <ENTJ
        content={`You are a type ENTJ, aka The Field Marshall.
        ENTJ’s (Extroverted, Intuition, Thinking, Judging) are known to be leaders, are blunt, interested in efficiency, and re great with long term planning and goal setting. Because of these qualities they would be well matched with:`}
        majors={"Marketing,Education,Business Management and Administration"}
        onBackClick={this.onENTJ_click}
      />
    );
  }

  render() {
    let showISTJ = this.state.showISTJ;
    let showISFJ = this.state.showISFJ;
    let showINFJ = this.state.showINFJ;
    let showINTJ = this.state.showINTJ;
    let showISTP = this.state.showISTP;
    let showISFP = this.state.showISFP;
    let showINFP = this.state.showINFP;
    let showINTP = this.state.showINTP;
    let showESTP = this.state.showESTP;
    let showESFP = this.state.showESFP;
    let showENFP = this.state.showENFP;
    let showENTP = this.state.showENTP;
    let showESTJ = this.state.showESTJ;
    let showESFJ = this.state.showESFJ;
    let showENFJ = this.state.showENFJ;
    let showENTJ = this.state.showENTJ;
    if (showISTJ) {
      return this.renderISTJ();
    } else if (showISFJ) {
      return this.renderISFJ();
    } else if (showINFJ) {
      return this.renderINFJ();
    } else if (showINTJ) {
      return this.renderINTJ();
    } else if (showISTP) {
      return this.renderISTP();
    } else if (showISFP) {
      return this.renderISFP();
    } else if (showINFP) {
      return this.renderINFP();
    } else if (showINTP) {
      return this.renderINTP();
    } else if (showESTP) {
      return this.renderESTP();
    } else if (showESFP) {
      return this.renderESFP();
    } else if (showENFP) {
      return this.renderENFP();
    } else if (showENTP) {
      return this.renderENTP();
    } else if (showESTJ) {
      return this.renderESTJ();
    } else if (showESFJ) {
      return this.renderESFJ();
    } else if (showENFJ) {
      return this.renderENFJ();
    } else if (showENTJ) {
      return this.renderENTJ();
    }
    return (
      <div className="">
        <div className="result-container">
          <h1 className="">Result</h1>
          <hr className="" />
          <h2 className="">{this.props.resultBriggs}</h2>
          <hr className="" />
          <h3 className="lead">
            Select your result and check out your recommended majors:
          </h3>
          <div className="check-lists">
            <ul className="">
              <li className="list-group-item" onClick={this.onISTJ_click}>
                ISTJ
              </li>
              <li className="list-group-item" onClick={this.onISFJ_click}>
                ISFJ
              </li>
              <li className="list-group-item" onClick={this.onINFJ_click}>
                INFJ
              </li>
              <li className="list-group-item" onClick={this.onINTJ_click}>
                INTJ
              </li>
            </ul>
            <ul className="list-group briggs">
              <li className="list-group-item" onClick={this.onISTP_click}>
                ISTP
              </li>
              <li className="list-group-item" onClick={this.onISFP_click}>
                ISFP
              </li>
              <li className="list-group-item" onClick={this.onINFP_click}>
                INFP
              </li>
              <li className="list-group-item" onClick={this.onINTP_click}>
                INTP
              </li>
            </ul>
            <ul className="list-group briggs">
              <li className="list-group-item" onClick={this.onESTP_click}>
                ESTP
              </li>
              <li className="list-group-item" onClick={this.onESFP_click}>
                ESFP
              </li>
              <li className="list-group-item" onClick={this.onENFP_click}>
                ENFP
              </li>
              <li className="list-group-item" onClick={this.onENTP_click}>
                ENTP
              </li>
            </ul>
            <ul className="list-group briggs">
              <li className="list-group-item" onClick={this.onESTJ_click}>
                ESTJ
              </li>
              <li className="list-group-item" onClick={this.onESFJ_click}>
                ESFJ
              </li>
              <li className="list-group-item" onClick={this.onENFJ_click}>
                ENFJ
              </li>
              <li className="list-group-item" onClick={this.onENTJ_click}>
                ENTJ
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  onISTJ_click() {
    let showISTJ = this.state.showISTJ;
    this.setState({ showISTJ: !showISTJ });
  }

  onISFJ_click() {
    let showISFJ = this.state.showISFJ;
    this.setState({ showISFJ: !showISFJ });
  }

  onINFJ_click() {
    let showINFJ = this.state.showINFJ;
    this.setState({ showINFJ: !showINFJ });
  }

  onINTJ_click() {
    let showINTJ = this.state.showINTJ;
    this.setState({ showINTJ: !showINTJ });
  }

  onISTP_click() {
    let showISTP = this.state.showISTP;
    this.setState({ showISTP: !showISTP });
  }

  onISFP_click() {
    let showISFP = this.state.showISFP;
    this.setState({ showISFP: !showISFP });
  }

  onINFP_click() {
    let showINFP = this.state.showINFP;
    this.setState({ showINFP: !showINFP });
  }

  onINTP_click() {
    let showINTP = this.state.showINTP;
    this.setState({ showINTP: !showINTP });
  }

  onESTP_click() {
    let showESTP = this.state.showESTP;
    this.setState({ showESTP: !showESTP });
  }

  onESFP_click() {
    let showESFP = this.state.showESFP;
    this.setState({ showESFP: !showESFP });
  }

  onENFP_click() {
    let showENFP = this.state.showENFP;
    this.setState({ showENFP: !showENFP });
  }

  onENTP_click() {
    let showENTP = this.state.showENTP;
    this.setState({ showENTP: !showENTP });
  }

  onESTJ_click() {
    let showESTJ = this.state.showESTJ;
    this.setState({ showESTJ: !showESTJ });
  }

  onESFJ_click() {
    let showESFJ = this.state.showESFJ;
    this.setState({ showESFJ: !showESFJ });
  }

  onENFJ_click() {
    let showENFJ = this.state.showENFJ;
    this.setState({ showENFJ: !showENFJ });
  }

  onENTJ_click() {
    let showENTJ = this.state.showENTJ;
    this.setState({ showENTJ: !showENTJ });
  }
}

Briggs.propTypes = {
  resultBriggs: propTypes.string.isRequired,
};

export default Briggs;
