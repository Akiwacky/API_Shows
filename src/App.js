import "./App.css";
import NavBar from "./components/layout/NavBar";
import MazeState from "./context/maze/MazeState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from "./components/shows/Item";
import Home from "./components/pages/Home";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";

function App() {
  return (
    <MazeState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/show/:name/:id" component={Item} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </MazeState>
  );
}

export default App;
