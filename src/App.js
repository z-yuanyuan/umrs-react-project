import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./components/Quiz";
import About from "./components/About";
import Majors from "./components/Majors";
import Questions from "./components/Questions";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="mainbody">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/quiz">
                <Quiz title="Welcome To Personality Test" />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/all-majors">
                <Majors />
              </Route>
              <Route path="/questions">
                <Questions />
              </Route>
            </Switch>
          </div>
        </div>
        <div class="footer">
          <p>created by Yuanyuan Zhou @2021</p>
        </div>
      </div>
    </Router>
    
  );
  
}

export default App;
