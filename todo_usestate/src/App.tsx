import React, { useState, useCallback, useEffect } from "react";
import logo from './logo.svg';
import Message from './Message.js';
import './App.css';

const styles = {
  logo: {
    paddingTop: '10px',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'linear-gradient(#d5def8, #00FFCC)'
  },
  base: {
    display: 'flex-column',
    width: '100%',
    height: '800px',
    background: "linear-gradient(#000066, #6699FF)",
  },
  form: {
    display: 'flex-column',
    width: '100%',
    justifyContent: 'center',
    itemsAlign: 'center',
  },
  renderArea: {
    display: 'flex',
    justifyContent: 'center',
    itemsAlign: 'center',
  },
  inputArea: {
    display: 'flex',
  },
  input: {
    marginTop: '30px',
    padding: '10px',
    fontSize: '20px',
    width: '600px',
    height: '30px',
    border: 'none',
    borderRadius: 5,
    color: '#000000',
    opacity: 20,
    outline: 0,
  },
  btn: {
    marginTop: '30px',
    marginLeft: '10px',
    borderRadius: 5,
    fontSize: '20px',
    width: '100px',
    padding: '10px',
    height: '50px',
    border: 'none',
  },
  small: {
    '@media (max-width: 600px)': {
      fontSize: '70%',
    }
  },
};

interface ItemInterface {
  id: number;
  name: string;
}

const App: React.FC = () => {
  // useState<型>(初期値)
  const [text, setText] = React.useState<string>("initial value");
  const [items, setItems] = React.useState<ItemInterface[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, {
      id: items.length + 1,
      name: text
    }]);
    setText("");
  };

  // 描画するたびに関数を再定義するのを回避
  // const handleSetText = useCallback((e: React.FormEvent<HTMLFormElement>) = {
  //   setText(e.target.value);
  // }, []);
  useEffect(() => {
    document.title = `${items.length} times`;
  })

  return (
    <div style={styles.base}>
      <div style={styles.logo}>
        <img src={logo} className="App-logo" alt="logo" style={{height: '230px'}}/>
      </div>
      <Message items={items} />
      <div style={styles.renderArea}>
        <div>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputArea}>
              <div>
                <input value={text} onChange={e => setText(e.target.value)} style={styles.input} />
              </div>
              <div>
                <button style={styles.btn}>Add</button>
              </div>
            </div>
            <div style={{ fontSize: '20px' }}>
              <ol>
                {items.map((item: ItemInterface) => <li style={{ marginBottom: '5px', color: 'white' }}>{item.name}</li>)}
              </ol>
            </div>
          </form>
        </div>
        <div>
          <button style={styles.btn} onClick={() => setItems([])}>clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
