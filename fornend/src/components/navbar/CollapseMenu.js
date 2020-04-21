import React from 'react';
import styled from 'styled-components';
import { FcBusinessman ,FcAssistant ,FcDataProtection,FcConferenceCall,FcDislike ,FcHome} from "react-icons/fc";

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <br></br><br></br><br></br>
        <NavLinks>
          <b />
          <li><a  href="/" onClick={props.handleNavbar}><FcHome size="30"/>หน้าหลัก</a></li><br></br>
          <li><a href="/department" onClick={props.handleNavbar}><FcDislike size="30"/>แผนกฉุกเฉิน</a></li><br></br>
          <li><a href="/team" onClick={props.handleNavbar}><FcConferenceCall size="30"/>ทีมแพทย์</a></li><br></br>
          <li><a href="/engage" onClick={props.handleNavbar}><FcDataProtection size="30"/>นัดหมายแพทย์</a></li><br></br>
          <li><a href="/contact" onClick={props.handleNavbar}><FcAssistant size="30"/>ติดต่อเรา</a></li><br></br>
          <li><a href="/login" onClick={props.handleNavbar}><FcBusinessman size="30"/>Login</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: crimson;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;