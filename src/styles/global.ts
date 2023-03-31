import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #DEE8E6;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  *{
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
margin: 0;
padding: 5px;
font-size: 25px;
`

export const TextDetails = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 15px;
`

export const DescriptionText = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 14px;
`

export default GlobalStyle;
