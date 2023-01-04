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

    <span 
      onClick={() => {
        localStorage.removeItem("token");
        window.location.reload();
      }}
      class="material-symbols-outlined icon">
      logout
    </span>
    
    <div className="add-box">
      <input />
      <span class="material-symbols-outlined icon">
        add
      </span>
    </div>
      
      

    </div>
    </>
  )
}

export default HomePage