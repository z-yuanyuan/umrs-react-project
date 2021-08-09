import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuizPage from "./pages/quiz/QuizPage";
import About from "./pages/about/About";
import Questions from "./pages/questions/Questions";
import AllMajors from "./pages/all-majors/AllMajors";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="body-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <QuizPage title="Welcome To Personality Test" />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/all-majors">
              <AllMajors />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
