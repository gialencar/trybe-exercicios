import React from 'react';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const tarefas = [
  'Almoçar com maria na quarta-feira',
  'comprar um capacete',
  'aprender a usar o Sketch',
  'publicar um artigo no LinkedIn',
];

class App extends React.Component {
  render() {
    return <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>;
  }
}

export default App;
