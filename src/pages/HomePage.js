import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <>
    <div className="wrapper">
      <h1>To-Do List</h1>

      {
        localStorage.getItem('token') ? (
          <button
            type="button"
            className="primary-btn w-100"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >로그아웃
          </button>
        ) : (
          <button
            type="button"
            className="primary-btn w-100"
            onClick={() => {
              navigate('/auth');
            }}
          >로그인
          </button>
        )
      }
      <button
        type="button"
        onClick={() => {
          console.log(localStorage.getItem("token"))
        }}
      >Todo List</button>

    </div>
    </>
  )
}

export default HomePage