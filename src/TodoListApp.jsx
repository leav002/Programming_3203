import './todoList.css'
import Button from "./components/Button.jsx"
import Checkbox from "./components/Checkbox.jsx"
import TodoItemEmpty from "./components/TodoItemEmpty.jsx"
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoList from './components/TodoList.jsx'
import { useState, useEffect } from 'react'


class Todo {
  constructor(id, text, isCompleted) {
    this.id = id
    this.text = text
    this.isCompleted = isCompleted
  }
}

const TODOS_STORAGE_KEY = "todos";



// https://programming-3203.s2403.workers.dev/
function TodoListApp() {
  
  const initTodos = () => {
    const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
    //없으면 []
    //있으면 초기값 대입
    return (!savedTodos) ? [] : JSON.parse(savedTodos); // string -> JSON 객체 또는 리스트
    
    //localstorage에서 가져오자
  }
  const [todos, setTodos] = useState(initTodos);
  //todos 변경 시, localstorage에 todos 저장하자
useEffect(() => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}, [todos])

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
  function toggleTodo(id) {
    setTodos((todos) =>
      //todos에서 하나씩 꺼내서, todo, 꺼낸 todo의 id와 id가 같다면, 
      // 새 객체 만들어서 todo 값 복사, 속성 수정
      todos.map((todo) => 
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
      )
    )
  }
  function deleteTodo(id) {
    //todos를 하나씩 꺼내어, todo, todo.id === id
    setTodos((todos) =>
      todos.filter((todo) => todo.id !== id)
    )
  }

  function editTodo(id, newText) {
    //todos 하나씩 꺼내어 todo.id가 같으면 text: newText
    setTodos((todos) =>
      todos.map((todo)=>
      todo.id === id ? {...todo, text:newText } : todo
      )
    )
  }

  return (
    <>
      <div className="todo">
        <TodoHeader />
        <TodoAdder addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} edit={editTodo} />
      </div>
    </>
  )

}

export default TodoListApp