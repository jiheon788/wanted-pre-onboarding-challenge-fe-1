import { useEffect, useState } from "react";
import { getTodos } from "../lib/apis/todos";
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
          {todo.title} | 
        </li>
      ))
    }
    </ul>
  )
}

export default TodoList;