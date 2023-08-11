import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI/>{/**Se manda como children a TodoProvider, de esta forma todos los componentes que estén en AppUI vana poder acceder */}
    </TodoProvider>
  );
}

export default App;
