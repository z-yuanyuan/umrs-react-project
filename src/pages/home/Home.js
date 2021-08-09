import React from "react";
import homeImg from "../../images/hero-content-image.jpeg";
import { Link } from "react-router-dom";
import "./home.styles.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Find a university major fits you the most based on your&nbsp;
            <span>Interest, </span>
            <span>Personality, </span>
            <span>and Potential Career </span>
          </h1>

          <div className="home-button-inner">
            <div>
              <p>Take the quiz</p>
              <Link to="/quiz" className="btn-startQuiz">
                start now
              </Link>
            </div>
            <div>
              <p>Explore all majors</p>
              <Link to="/all-majors" className="btn-showAllMajors">
                explore
              </Link>
            </div>
          </div>
        </article>
        <article className="hero-images">
          <img alt="uni-major-img" src={homeImg} className="tree-img" />
        </article>
      </div>
    </section>
  );
};

export default Home;
