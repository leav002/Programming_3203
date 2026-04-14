import TodoAdder from './components.TodoAdder.jsx'
import Button from "./components/Button.jsx"
import Checkbox from "./components/Checkbox.jsx"
import TodoItemEmpty from "./components/TodoItemEmpty.jsx"

export default function TodoItem() {
    return (
        <>
            <ul className="toto__list">
                <TodoItemEmpty />
                <li className="todo__item todo__item--complete">
                    <input type="checkbox" className="todo__check" id="1" />
                    <Button className="todo__button todo__button--edit">✏️</Button>
                    <Button className="todo__button todo__button--delete">🚮</Button>
                </li>
            </ul>
        </>
    )
}