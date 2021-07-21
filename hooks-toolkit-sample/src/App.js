import React from 'react';
import TaskForm from './components/features/task/TaskForm';
import Header from './components/header/Header'
import styles from './styles/App.module.scss'

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
