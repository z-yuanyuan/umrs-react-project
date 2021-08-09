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
                You tend to be practical and logical above all else.
                `}
        majors={
          "Engineering,Accounting,Arts,Business Administration,Journalism"
        }
        onBackClick={this.onISTJ_click}
      />
    );
  }

  renderISFJ() {
    return (
      <ISFJ
        content={`You are a type ISFJ, aka The Protector.
                  You tend to be sympathetic and organized above all else.
                  `}
        majors={
          "Education,Business Management,Art,Business Administration,Journalism"
        }
        onBackClick={this.onISFJ_click}
      />
    );
  }

  renderINFJ() {
    return (
      <INFJ
        content={`You are a type INFJ, aka The Counselor.
                You tend to be sensitive and creative above all else.
                `}
        majors={
          "Education,Business Management,Arts,Business Administration,Journalism"
        }
        onBackClick={this.onINFJ_click}
      />
    );
  }

  renderINTJ() {
    return (
      <INTJ
        content={`You are a type INTJ, aka The Mastermind.
                      You tend to be decisive and insightful above all else.
                      `}
        majors={"Architecture, Engineering, Art , Biochemistry, Biology"}
        onBackClick={this.onINTJ_click}
      />
    );
  }

  renderISTP() {
    return (
      <ISTP
        content={`You are a type ISTP, aka The Crafter.
                  You tend to be analytical and practical above all else.
                  `}
        majors={
          "Art, Business Administration, computer technology , Computer Science, Biology"
        }
        onBackClick={this.onISTP_click}
      />
    );
  }

  renderISFP() {
    return (
      <ISFP
        content={`You are a type ISFP, aka The Composer.
                  You tend to be loyal and adaptable above all else.
                  `}
        majors={
          "Education, Nursing, Health Science , Medical Technology, Biology"
        }
        onBackClick={this.onISFP_click}
      />
    );
  }

  renderINFP() {
    return (
      <INFP
        content={`You are a type INFP, aka The Healer.
                  You tend to be empathetic and inquisitive above all else.
                 `}
        majors={
          "Education, Writing, Graphic Design , Apparel Design, Interior Design"
        }
        onBackClick={this.onINFP_click}
      />
    );
  }

  renderINTP() {
    return (
      <INTP
        content={`You are a type INTP, aka The Architect.
                  You tend to be curious and analytical above all else.
                  `}
        majors={
          "Anthropology, Architecture, Art , Telecommunications, Mathematical Economics"
        }
        onBackClick={this.onINTP_click}
      />
    );
  }

  renderESTP() {
    return (
      <ESTP
        content={`You are a type ESTP, aka The Promoter.
                  You tend to be energetic and realistic above all else.
                  `}
        majors={
          "Marketing, Finance, Food Management , Landscape Architecture, Natural Resources and Environmental"
        }
        onBackClick={this.onESTP_click}
      />
    );
  }

  renderESFP() {
    return (
      <ESFP
        content={`You are a type ESFP, aka The Performer.
                  You tend to be caring and resourceful above all else.
                  `}
        majors={
          "Hospitality, Health Care, Dental , Psychology,   Sociology, Child Life Specialist"
        }
        onBackClick={this.onESFP_click}
      />
    );
  }

  renderENFP() {
    return (
      <ENFP
        content={`You are a type ENFP, aka The Champion.
                  You tend to be imaginative and insightful above all else.
                  You should consider a job in therapy or acting.`}
        majors={
          "Therapy, Acting, Art , Graphic Arts Management, Theatre, Marketing"
        }
        onBackClick={this.onENFP_click}
      />
    );
  }

  renderENTP() {
    return (
      <ENTP
        content={`You are a type ENTP, aka The Inventor.
                  You tend to be enthusiastic and theoretical above all else.
                  `}
        majors={
          "Business, Sports Management , English, Geology, Risk Management and Insurance"
        }
        onBackClick={this.onENTP_click}
      />
    );
  }

  renderESTJ() {
    return (
      <ESTJ
        content={`You are a type ESTJ, aka The Supervisor.
                  You tend to be logical and assertive above all else.
                  `}
        majors={
          "Business, Law , Project Management,Business Administration,  Criminal Justice and Criminology"
        }
        onBackClick={this.onESTJ_click}
      />
    );
  }

  renderESFJ() {
    return (
      <ESFJ
        content={`You are a type ESFJ, aka The Provider. 
                  You tend to be sociable and caring above all else.
                  `}
        majors={
          "Child Life Specialist, Counseling Psychology , Education, Health Science , Logistics and Supply Chain Management"
        }
        onBackClick={this.onESFJ_click}
      />
    );
  }

  renderENFJ() {
    return (
      <ENFJ
        content={`You are a type ENFJ, aka The Teacher.
                  You tend to be passionate and imaginative above all else.
                  You should consider a job in teaching or the arts.`}
        majors={
          "Education, Arts , Journalism, Public Relations , Urban Planning and Development"
        }
        onBackClick={this.onENFJ_click}
      />
    );
  }

  renderENTJ() {
    return (
      <ENTJ
        content={`You are a type ENTJ, aka The Field Marshall.
                  You tend to be organized and logical above all else.
                  You should consider a job in law or engineering.`}
        majors={
          "International Business, Human Resource Management  , Construction Management ,Economics (Business) , Finance"
        }
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
      <div className="result-container">
        <h1 className="">Result</h1>
        <hr className="" />
        <h2 className="">{this.props.resultBriggs}</h2>
        <hr className="" />
        <h3 className="lead">Check out your recommended majors:</h3>
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
