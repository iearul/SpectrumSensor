import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import LiveDataPage from "./pages/LiveDataPage";
import StaticDataPage from "./pages/StaticDataPage.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '0 25px' }}>
          <a className="navbar-brand" href="/static">Spectrum Sensor Data</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" style={{ margin: '0 10px' }}>
                <Link className="nav-link" to="/static" style={{ color: '#333', textDecoration: 'none' }}>
                  Static Data
                </Link>
              </li>
              <li className="nav-item" style={{ margin: '0 10px' }}>
                <Link className="nav-link" to="/live" style={{ color: '#333', textDecoration: 'none' }}>
                  Live Data
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/">
              <StaticDataPage />
            </Route>
            <Route path="/static">
              <StaticDataPage />
            </Route>
            <Route path="/live">
              <LiveDataPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
