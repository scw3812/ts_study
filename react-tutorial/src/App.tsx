import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
      </Router>
    </>
  );
}

export default App;
