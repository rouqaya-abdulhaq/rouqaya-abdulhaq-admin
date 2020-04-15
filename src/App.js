import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import AddBlog from './containers/addBlog/addBlog';
import './App.css';
import Header from './components/layout/header/header';
import AddProject from './containers/addProject/addProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <AddProject/>
      </div>
    </Router>


  );
}

export default App;
