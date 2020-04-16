import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/header';
import Page from './components/router/router';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Page/>
      </div>
    </Router>


  );
}

export default App;
