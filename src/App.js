import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Switch>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
