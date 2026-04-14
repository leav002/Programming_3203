import { useState } from "react"
import Button from "./components/Button.jsx"

export default function TodoAdder({addTodo}) {
    const [inputTodo, setInputTodo] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!inputTodo.trim()) return; //빈칸이면 리턴
        addTodo(inputTodo.trim());
        setInputTodo('');
    }

    return (
        <>
            <form className="todo__form" onSubmit={handleSubmit}>
                <input type="text" className="todo__input" placeholder="할 일 입력" value={inputTodo} onChange={(event) => setInputTodo(event.target.value)} />
                <Button type="submit" className="todo__button todo__button--add">Add</Button>
            </form>

        </>
    )
}