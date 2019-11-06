import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import  {ReactComponent as AnimatedLogo} from './img/NameBounce.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimatedLogo/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
