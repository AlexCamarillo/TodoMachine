import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { 
    completedTodos: completed,
    totalTodos: total
   } = useContext(TodoContext)//Mandar el contexto que queremos utilizar
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
