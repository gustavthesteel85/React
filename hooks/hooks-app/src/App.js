import React, { createContext, useState } from 'react'
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
import ComponentC from './components/ComponentC'
import CounterReducer from './components/CounterReducer'

export const UserContext = createContext();
export const LanguageContext = createContext();
function App() {
  const [user, setUser] = useState({ name: 'yamada', age: '32' });
  const [lang, setLang] = useState('日本語');
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
        <UserContext.Provider value={user}>
          <LanguageContext.Provider value={lang}>
            <ComponentC />
          </LanguageContext.Provider>
        </UserContext.Provider>
        {/* <Counter />
        <FormHook />
        <ItemHook />
        <ClassEffectComponent />
        <EffectHook />
        <MouseEventEffectHook />
        <DataFetchEffectHook />
        <DataFetchById /> */}
        <CounterReducer />
      </header>
    </div>
  );
}

export default App;
