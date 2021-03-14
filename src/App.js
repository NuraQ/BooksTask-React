import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './containers/Home/Home'
import Header from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
    <div >
      <Header >
        <Home />
      </Header>
    </div>
    </Router>
  );
}

export default App;
