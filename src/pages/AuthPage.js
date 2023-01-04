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
    <div className="wrapper flex-center">
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