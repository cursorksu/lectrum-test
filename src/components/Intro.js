import React from 'react';
import styled from "styled-components";

export const Intro = ({children}) => (
    <IntroStyled>{children}</IntroStyled>
)

const IntroStyled = styled.div `
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`