import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!(localStorage.getItem("token"))) {
      navigate('/auth');
    }
  }, [])

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
              window.location.reload();
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