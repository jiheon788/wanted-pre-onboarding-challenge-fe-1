import { useState } from "react"
import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  return (
    <div className="wrapper">
      <div className="">
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
    </div>
  )
}

export default AuthPage