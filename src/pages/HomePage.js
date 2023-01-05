import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import CreateForm from "../components/CreateForm"
import DetailForm from "../components/DetailForm"
import TodoList from "../components/TodoList"
import { getTodos } from "../lib/apis/todos";
const HomePage = () => {
  const navigate = useNavigate()
  const [isCreate, setIsCreate] = useState(false)

  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(0);
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });


  useEffect(() => {
    console.log(Boolean(todos[0]))

    if (!(localStorage.getItem("token"))) {
      navigate('/auth')
    } else {
      loadTodos();
    }
  }, [])


  useEffect(() => {
    if ((todos.length > 0)) {
      setTodo({
        title: todos[index].title,
        content: todos[index].content,
      })
    }
  }, [todos])

  useEffect(() => {
    if ((todos.length > 0)) {
      setTodo({
        title: todos[index].title,
        content: todos[index].title,
      })
    }
  }, [index])

  const loadTodos = () => {
    getTodos(localStorage.getItem("token")).then(response => {
      setTodos(response.data.data);
    })
  }

  const onClickAddBtn = () => {
    setIsCreate(!isCreate);
  }

  return (
    <>
    {
      localStorage.getItem("token") ? (
        <div className="main-separator">
          <div className="container">
            

            {
              isCreate ? (
                <CreateForm 
                  setIsCreate = {setIsCreate}
                  loadTodos = {loadTodos}
                />
              ) : (
                <DetailForm 
                  title = {todo.title}
                  content = {todo.content}
                />
              )
            }
            <TodoList 
              todos = {todos}
              setIndex = {setIndex}
            />
          </div>

          

          <div className="tool-box">
            {
              isCreate ? (
                <span 
                  class="material-symbols-outlined"
                  onClick={() => {
                    setIsCreate(false);
                  }}
                >
                  close
                </span>
              ) : (
                <span 
                  class="material-symbols-outlined"
                  onClick={() => {
                    onClickAddBtn();
                  }}
                >
                  add
                </span>
              )
            }

            <span 
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              class="material-symbols-outlined">
              logout
            </span>
          </div>
        </div>
      ) : (
        <></>
      )
    }
    </>
    
  )
}

export default HomePage