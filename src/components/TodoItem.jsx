import TodoAdder from './TodoAdder.jsx'
import Button from "./Button.jsx"
import Checkbox from "./Checkbox.jsx"
import {useState} from 'react'
import TodoItemEmpty from "./TodoItemEmpty.jsx"

export default function TodoItem({ todo, toggleTodo, deleteTodo, edit,Todo }) {
    const [isEditing, setIsEditing] = useState(false); //수정 중인지 아닌지
    const [editText, setEditText] = useState(todo.text); //수정 중인 text
function handleEditClick() {
    if (!isEditing) {
        setIsEditing(true);
        setEditText(todo.text);
    } else {
        const trimmedText = editText.trim();
        if (trimmedText !== "" && trimmedText !== todo.text) {
            edit(todo.id, trimmedText);
        }
        setIsEditing(false);
    }
}
    return (
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {!isEditing &&
            <Checkbox
                className="todo__check"
                id={todo.id}
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
            >{todo.text}</Checkbox>
            }
            {isEditing &&
                <input
                    type="text"
                    className="todo__input--edit"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    
                    
                    autoFocus
                />
            }
            <Button 
                className="todo__button todo__button--edit"
                onClick ={handleEditClick}>✏️</Button>
            <Button 
                className="todo__button todo__button--delete" 
                onClick={() => deleteTodo(todo.id)}>🚮</Button>
        </li>
    )
}