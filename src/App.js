import "./App.css";
import NavBar from "./components/layout/NavBar";
import Search from "./components/shows/Search";
import MazeState from "./context/maze/MazeState";

function App() {
  return (
    <MazeState>
      <div className="App">
        <NavBar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Search />
        </div>
      </div>
    </MazeState>
  );
}

export default App;
