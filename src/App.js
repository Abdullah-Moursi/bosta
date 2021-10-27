import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Track from "./components/Track";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shipments/track/:trackingNumber" component={Track} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
