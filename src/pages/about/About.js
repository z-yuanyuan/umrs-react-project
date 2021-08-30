import React from "react"
import "./about.styles.css"


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h1>About UMRS</h1>
          <p>
            UMRS is an undergraduate/college major recommendation system created
            by Yuanyuan Zhou, a master's student at the University of
            Southampton, this UMRS is also a final project for my master's
            course. The aim of this system is to minimizing the search process
            for choosing a major. By answering 43 quizzes that captures your
            interest, personality, potential career, the system will provide you
            majors that fit you most. It is not only recommended for you a
            university major, but it also helps you find the right path for your
            future career.
          </p>
        </div>
        <h1>Contact</h1>
        <div className="about-contact">
      
    
            <div>
              <a href="mailto:yz4n20@soton.ac.uk">yz4n20@soton.ac.uk</a>
            </div>
            <div>
              <a href="https://github.com/z-yuanyuan">GitHub</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/yuanyuan-zhou-a650b912b/">
                LinkedIn
              </a>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
