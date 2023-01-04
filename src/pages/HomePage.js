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

    <div>
      <span 
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        class="material-symbols-outlined icon">
        logout
      </span>
    </div>

    <input />
    <span class="material-symbols-outlined icon">
      add
    </span>
      
      

    </div>
    </>
  )
}

export default HomePage