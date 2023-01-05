import { calcTime } from "../lib/util";
import $ from 'jquery'
import { useEffect } from "react";


const TodoList = ({
  todos,
  setIndex
}) => {
  $(document).ready(function() {
    $("input:checkbox").on('click', function() {
          if ( $(this).prop('checked') ) {
            $(this).parent().parent().addClass("selected");
          } else {
            $(this).parent().parent().removeClass("selected");
          }
        });
    });
  
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
            <div className="check-label">
            <input type="checkbox" id="test-1" />
            <label htmlFor="test-1">{todo.title}</label>
            </div>
            <div className="time-stamp">{calcTime(todo.updatedAt)}</div>

        </li>
      ))
    }
    </ul>
  )
}

export default TodoList;