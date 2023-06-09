import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #e2d0da;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    h1, h2, h3, h4{
      font-weight: 400;
    }

    h1 {
      letter-spacing: 2px;
    }

    div::-webkit-scrollbar {
      width: 10px;
    }
     
    div::-webkit-scrollbar-thumb {
        background: #c34c8e;
        border-radius: 4px;
        box-shadow: inset 0 0 6px rgba(44, 0, 117, 0.5);
    }

  }

  *{
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 20px;
`;

export const TextDetails = styled.p`
  margin: 0;
  padding: 2px;
  font-size: 15px;
`;

export const DescriptionText = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 14px;
`;

export default GlobalStyle;