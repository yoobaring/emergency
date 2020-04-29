//dropdown on mobile
import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import './Scoll.css'
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import { FcBusinessman ,FcAssistant ,FcDataProtection,FcConferenceCall,FcDislike ,FcHome} from "react-icons/fc";
import { connect } from 'react-redux';



// export default class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//       login_email: sessionStorage.getItem("login_email")
      
//     };
//   }
//     toggle() {
//       this.setState({
//         isOpen: !this.state.isOpen
//       });
//     }
//   }




class Navbar extends React.Component {

    
     
  constructor(props) {
    super(props);
    
   
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      
    };
    
  }
  
    toggle() {
      
      this.setState({
        isOpen: !this.state.isOpen
      });
      
    }
    logout=()=>{
      sessionStorage.setItem("login_access_token","");
      sessionStorage.setItem("login_email","");
      sessionStorage.setItem("login_created","");
      sessionStorage.setItem("login_userId","");
      this.props.dispatch({
        type: "logout"
      })

    

    }
    
    
    render(){
      
      return (
        <>
       
      <NavBar  >
        
        <FlexContainer >
          <Brand />
          
          <NavLinks  >
             
                <a className='ss'><FcAssistant size="20"/> {this.props.loginData.login_email}</a>
                <a className='ss' href="/"><FcHome size="20"/>หน้าหลัก </a> 
                <a className='ss' href="/department"><FcDislike size="20"/>แผนกฉุกเฉิน</a>
                <a className='ss' href="/team"><FcConferenceCall size="20"/>ทีมแพทย์</a>
                <a className='ss' href="/engage"><FcDataProtection size="20"/>นัดหมายแพทย์</a>
                <a className='ss' href="/contact"><FcAssistant size="20"/>ติดต่อเรา</a>
                { !this.props.loginData.login_email &&
                <a className='ss' href="/login"><FcAssistant size="20"/>login</a>
                }
                { this.props.loginData.login_email &&
                <a onClick={this.logout}> logout </a>
                }
                {/* <a className='ss' href="/login"><FcBusinessman size="43" /></a> */}
    
              
                <div class="animation start-home"></div>
                
              </NavLinks>
          
              <BurgerWrapper>
                <BurgerMenu
                  navbarState={this.props.navbarState} 
                  handleNavbar={this.props.handleNavbar}
                />
              </BurgerWrapper>
            </FlexContainer>
          </NavBar>
          <CollapseMenu 
            navbarState={this.props.navbarState} 
            handleNavbar={this.props.handleNavbar}
          />
            
       </>
      )
    }
}
const mapStateToProps = (state) => ({
 loginData: state
})

export default connect(mapStateToProps)(Navbar); 

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: crimson;
  z-index: 1;
  font-size: 1.4rem;


`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 7rem;
  
  
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 50px solid transparent;
    margin: 0 0.1rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
      
    }

    @media (max-width: 78px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
