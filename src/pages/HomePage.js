import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <>
    <div className="wrapper">
      <h1>To-Do List</h1>

      <button
        type="button"
        className="primary-btn w-100"
        onClick={() => {
          navigate('/auth');
        }}
      >Auth</button>
      <button
      onClick={() => {
        console.log(localStorage.getItem("token"))
      }}
      >Todo List</button>

    </div>
    </>
  )
}

export default HomePage