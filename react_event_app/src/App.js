import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './Main';
import React, { Component } from 'react';
//import {Link} from 'react-router-dom';





class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Main />
      </div>
      </BrowserRouter>

  );
}
}

export default App;
