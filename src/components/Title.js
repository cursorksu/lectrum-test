import React from 'react';
import styled from "styled-components";

export const Title = ({title}) => (
    <TitleStyled>{title}</TitleStyled>
)

const TitleStyled = styled.h2 `
  font-size: 40px;
  text-align: center;
  margin-bottom: 40px;
  color: aquamarine;
`