import "./App.css";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
function App() {
  return (
    <div className="App">
      <div className="app-body">
        <Leftbar />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
