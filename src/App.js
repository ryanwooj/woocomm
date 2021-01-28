import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HarsPage = () => (
  <div>
    <h1>Hats paeg</h1>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
