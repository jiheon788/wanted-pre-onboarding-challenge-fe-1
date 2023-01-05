import { useEffect, useState } from "react";
import { calcTime } from "../lib/util";
const TodoList = ({
  todos,
  setIndex
}) => {
  return (
    <ul className="todos-section">
    {
      todos.map((todo, index) => (
        <li 
          key = {todo.id}
          onClick = {() => {
            setIndex(index)
          }}
        >
            <div>
            <input type="checkbox" /> 
            <span>{todo.title}</span>
            </div>
            <div className="time-stamp">{calcTime(todo.updatedAt)}</div>

        </li>
      ))
    }
    </ul>
  )
}

export default TodoList;