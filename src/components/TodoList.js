import { useEffect, useState } from "react";
import { getTodos } from "../lib/apis/todos";
import { calcTime } from "../lib/util";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos(localStorage.getItem("token")).then(response => {
      setTodos(response.data.data);
    })
  }, [])


  return (
    <ul>
    {
      todos.map((todo, index) => (
        <li 
          key={todo.id}
        >
          <div className="add-box">
            <input type="checkbox" /> 
            <span>{todo.title}</span>
            <div className="time-stamp">{calcTime(todo.updatedAt)}</div>

          </div>
        </li>
      ))
    }
    </ul>
  )
}

export default TodoList;