import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from "styled-components";
import { TodoContextProvider } from './TodoContextProvider';
import AddBtn from './AddBtn';
import ClearBtn from './ClearBtn';
import TodoList from './TodoList';

// styled-componentsでスタイル付きのdiv要素をコンポーネントとして定義
const StyledComponentDivWrappper = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  height: 100%;
  margin: 20px auto;
  max-width: 500px;
  padding: 20px 40px;
  position: relative;
  width: 100%;
`;

// styled-componentsでスタイル付きのh1要素をコンポーネントとして定義
const StyledComponentH1Wrapper = styled.h1`
  font-size: 20px;
  font-weght: normal;
  color: #009688;
  margin-bottom: 32px;
`;

// globalなCSSの定義
const GlobalStyle = createGlobalStyle`
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  main {
    display: block;
  }
`;

const App: React.FC = props => (
  <StyledComponentDivWrappper>
    <GlobalStyle />
    <header>
      <StyledComponentH1Wrapper>TodoApp</StyledComponentH1Wrapper>
    </header>
    <main>
      <TodoContextProvider>
        <AddBtn />
        <ClearBtn />
        <TodoList />
      </TodoContextProvider>
    </main>
  </StyledComponentDivWrappper>
);

export default App;
