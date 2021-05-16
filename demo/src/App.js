import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AboutPage } from "./pages/about-me";
import { HomePage } from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/">
            <h1>Website Root</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
