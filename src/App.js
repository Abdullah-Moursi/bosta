import "./App.css";
import { Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Track from "./components/Track";
import History from "./components/History";

function App() {
  return (
    <Router history={History}>
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
