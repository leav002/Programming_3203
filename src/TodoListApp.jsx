import './todoList.css'

function TodoListApp() {
  return (
    <>
      <div className="todo">


        <h1 className="todoo__title">ToDo ToDo</h1>
        <form className="todo__form">
          <input type="text" className="todo__input" placeholder="할 일 입력"/>
          <button type="submit" className="todo__button todo__button--add">Add</button>
        </form>


          <ul className="toto__list">
            <li className="todo__item todo__item--empty">
              <p>할 일 없음</p>
            </li>
            <li className="todo__item todo__item--complete">
              <input type="checkbox" className="todo__check" name="" id="chk-1"/>
              <label className="todo__label">옷 싸기</label>
              <button htmlFor="chk-1" className="todo__button todo__button--edit">✏️</button>
              <button className="todo__button todo__button--delete">🚮</button>
            </li>
          </ul>
      </div>
    </>
  )

}

export default TodoListApp