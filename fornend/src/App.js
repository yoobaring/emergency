import React, { Component } from 'react';
import GlobalStyle from './styles/Global';
import './App.css'
import Router from './components/router/Router';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  render() {
    return (
    
      <div>
        <GlobalStyle />
        <Router/>
      
        
      </div>
      
      
    )
  }
}

export default App