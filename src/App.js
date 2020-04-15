import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AddBlog from './containers/addBlog/addBlog';
import './App.css';
import Header from './components/layout/header/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <AddBlog/>
      </div>
    </Router>


  );
}

export default App;
