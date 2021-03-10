import logo from "./logo.svg";
import "./App.css";
import Header from "./components/NavBar/NavBar";
import RouterComponent from "./routes/router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterComponent />
    </div>
  );
}

export default App;
