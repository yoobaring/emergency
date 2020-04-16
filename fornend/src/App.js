import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from './styles/Global';
import Footer from './components/Footer';
import './App.css'

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
    
        <div className="page-container">
        <div className="content-wrap">
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        
      </div>
      <Footer />
      </div>
      
      
    )
  }
}

export default App