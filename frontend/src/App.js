import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>To Do App</h1>

      <div className="row">
        <input type="checkbox"/>
        <span>Texto do to do</span>
        <button>Apagar</button>
      </div>

      <button>Todos</button>
      <button>Pendentes</button>
      <button>Concluídos</button>      

      <button>Inserir novo To-do</button> 

    </div>
  );
}

export default App;
