function TodoListApp() {
  return (
    <>
      <h1>ToDo ToDo</h1>
      <form >
        <input type="text" />
        <button>Add</button>
      </form>


      <div>
        <ul>
          <li>
            <input type="checkbox" />
            <label>옷 싸기</label>
            <button>✏️</button>
            <button>🚮</button>
          </li>
          <li>
            <input type="checkbox" />
            <label>잠 자기</label>
            <button>✏️</button>
            <button>🚮</button>
          </li>
        </ul>
      </div>
    </>
  )

}

export default TodoListApp