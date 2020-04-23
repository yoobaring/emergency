import React, { Component } from 'react';

import Navbar from './Navbar';


class Mainnavbar extends Component {
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

      </div>
     
      </div>
      
      
    )
  }
}


export default Mainnavbar