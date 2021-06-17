import { useState } from 'react';

function TodoListItem({ todo, key }) {
    const [ SetTodoInput ] = useState();

    const deleteHandler = (key) => {
        SetTodoInput((prevTodos) => {
            return prevTodos.filter(todoItem => todoItem.key !== key );
        });
    }

    return (
        <li className="card">
            <h2 className="todo-card-heading">{todo.item}</h2>
            <button className=" edit btn">Edit</button>
            <button className="del btn" onClick={deleteHandler}>Delete</button>
        </li>
    );
}

export default TodoListItem;