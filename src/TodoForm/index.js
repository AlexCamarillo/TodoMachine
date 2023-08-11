import { useContext, useState } from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";
function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = useContext(TodoContext);

    //estado local, no global
    const [newTodoValue, setNewTodoValue] = useState('');//no se necesita poner en el contexto global

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);//todos lo botones cierran el modal
        addTodo(newTodoValue);
    }

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);//todos lo botones cierran el modal
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);        
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Escribe una nueva tarea"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type=""
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };