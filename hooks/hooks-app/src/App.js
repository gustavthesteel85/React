import React, { useReducer, createContext, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import FormHook from './components/FormHook'
import ItemHook from './components/ItemHook'
import ClassEffectComponent from './components/ClassEffectComponent'
import EffectHook from './components/EffectHook'
import MouseEventEffectHook from './components/MouseEventEffectHook'
import DataFetchEffectHook from './components/DataFetchEffectHook'
import DataFetchById from './components/DataFetchById'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import CounterReducer from './components/CounterReducer'

export const UserContext = createContext();
export const LanguageContext = createContext();

export const CountContext = createContext();

const initial = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
      case 'incriment1':
          // 更新前のstateを展開し、objのマージを行う
          return {...state, firstCounter: state.firstCounter + action.value};
      case 'decriment1':
          return {...state, firstCounter: state.firstCounter - action.value};
      case 'reset':
          return initial
      default:
          return state
  }
}

function App() {
  const [user, setUser] = useState({ name: 'yamada', age: '32' });
  const [lang, setLang] = useState('日本語');
  const [count, dispatch] = useReducer(reducer, initial);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <UserContext.Provider value={user}>
          <LanguageContext.Provider value={lang}>
            <ComponentC />
          </LanguageContext.Provider>
        </UserContext.Provider> */}
        {/* <Counter />
        <FormHook />
        <ItemHook />
        <ClassEffectComponent />
        <EffectHook />
        <MouseEventEffectHook />
        <DataFetchEffectHook />
        <DataFetchById /> */}
        <div>カウント: {count}</div>
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </CountContext.Provider>
      </header>
    </div>
  );
}

export default App;
