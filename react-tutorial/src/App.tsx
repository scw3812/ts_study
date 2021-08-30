import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import RouterPropTest from "./routes/RouterPropTest";
import RouterPropTestResult from './routes/RouterPropTestResult';
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/proptest" component={ RouterPropTest } />
        <Route path="/proptestresult" component={ RouterPropTestResult } />
      </Router>
    </>
  );
}

export default App;
