import './App.css';
import image from './blatt.png';
import { TodoList } from './TodoList.js';

function App() {
  return (
    <div className="app">
      <div className="container">
      <img src={ image } width="200px" alt="blatt"/>
      </div>
      <div className="container">
      <h1>To do List</h1>
      </div>
      <TodoList/> 
    </div>
  );
}

export default App;

