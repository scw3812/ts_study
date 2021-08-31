import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Main from "./routes/Main";
import Order from './routes/Order';
import MyOrder from "./routes/MyOrder";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={ Login } />
        <Route path="/join" component={ Join } />
        <Route path="/main" component={ Main } />
        <Route path="/order" component={ Order } />
        <Route path="/myorder" component={ MyOrder } />
      </Router>
    </>
  );
}

export default App;
