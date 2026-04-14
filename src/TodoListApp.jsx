import './todoList.css'
import Button from "./components/Button.jsx"
import Checkbox from "./components/Checkbox.jsx"
import TodoItemEmpty from "./components/TodoItemEmpty.jsx"
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components.TodoAdder.jsx'
import TodoItem from './components.TodoItem.jsx'
import { useState } from 'react'


class Todo {
  constructor(id, text, isCompleted) {
    this.id = id
    this.text = text
    this.isCompleted = isCompleted
  }
}



// https://programming-3203.s2403.workers.dev/
function TodoListApp() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    //이전 todos에 newTodo 추가하자 => 그것을 setTodos() 하자
    setTodos((todos) => [
      ...todos,
      new Todo(
        Date.now(),
        text,
        false)
    ])
  }
  return (
    <>
      <div className="todo">
        <TodoHeader/>
        <TodoAdder addTodo={addTodo} />
        <TodoItem/>
      </div>
    </>
  )

}

export default TodoListApp