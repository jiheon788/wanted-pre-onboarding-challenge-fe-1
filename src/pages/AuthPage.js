import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate('/');
    }
  }, [])

  return (
    <div className="container">
      <div className="banner-section">
        <h1>To-do List</h1>
        <p>로그인 후 이용 가능합니다.</p>
      </div>
        {
          isSignIn ? (
            <SignInForm
              setIsSignIn = {setIsSignIn}
            />
          ) : (
            <SignUpForm 
              setIsSignIn = {setIsSignIn}
            />
          )
        }
    </div>
  )
}

export default AuthPage