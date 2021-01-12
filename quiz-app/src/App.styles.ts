import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/bg-image.jpg';


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 1.25em;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #ffffff;
    font-weight: 600;
  }
  .score {
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #fd87ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 4em;
    text-align: center;
    margin: 1.25em;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #a291ff);
    border: 2px solid #5d186f;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 2.5em;
    margin: 1.25em 0;
    padding: 0 2.5em;
    font-size: 1.5em;
  }
  .start {
    max-width: 12.5em;
  }
`;