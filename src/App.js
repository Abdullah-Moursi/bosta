import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Track from "pages/Track";
import History from "utils/History";
import Layout from "layout/Layout";

function App() {
  return (
    <Router history={History}>
      <Layout>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/shipments/track/:trackingNumber"
              component={Track}
            />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
