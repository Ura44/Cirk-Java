import type { ITodoprops } from "../../entities/todo/todo.model"

function Todo ({title, status, setStatus, DeleteTodo}: ITodoprops) {
    return(
            <div className="todo-item">
                <input onChange={setStatus} checked={status} type="checkbox" className="todo-checkbox"/>
                <span className="todo-text">{title}</span>
                <button onClick={DeleteTodo} className="delete-btn">Удалить</button>
            </div>
    )
}

export default Todo