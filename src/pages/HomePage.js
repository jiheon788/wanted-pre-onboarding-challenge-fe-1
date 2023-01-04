import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import CreateForm from "../components/CreateForm"
import TodoList from "../components/TodoList"

const HomePage = () => {
  const navigate = useNavigate()
  const [isCreate, setIsCreate] = useState(false)

  useEffect(() => {
    if (!(localStorage.getItem("token"))) navigate('/auth');
  }, [])

  const onClickAddBtn = () => {
    setIsCreate(!isCreate);
  }

  return (
    <div className="container">

      <div className="wrapper">
      {
        isCreate ? (
          <CreateForm 
            setIsCreate = {setIsCreate}
          />
        ) : (
          <TodoList />
        )
      }
      </div>

      {
        localStorage.getItem("token") ? (
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
        ) : (<></>)
      }


      
    </div>
  )
}

export default HomePage