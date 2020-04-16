import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logo-min.png";

const Brand = () => {
  return (
    <a href="../">< Image src={logo} alt="Company Logo"></Image></a>
  )
}

export default Brand

const Image = styled.img`
  height: 100%;
  margin: auto 0;
`;