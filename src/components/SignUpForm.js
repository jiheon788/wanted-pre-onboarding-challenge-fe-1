import { useState } from "react";
import { postSignUpData } from "../lib/apis/auth";

const SignUpForm = ({setIsSignIn}) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const onChangeSignUpData = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSignUpBtn = () => {
    postSignUpData(
      signUpData.email,
      signUpData.password
    ).then(response => {
      alert(response.data.message);
      setIsSignIn(true);
    })
  }


  return (
    <>
    <h1>회원가입</h1>
    <form className="flex-col-box-center">

        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={onChangeSignUpData}
          className=" w-100"
        />

        <label htmlFor="password" className="form-label"></label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Password"
          value={signUpData.password}
          onChange={onChangeSignUpData}
          className=" w-100"
        />

        <label htmlFor="password" className="form-label"></label>
        <input
          id="rePassword"
          name="rePassword"
          type="password"
          autoComplete="off"
          placeholder="re-Password"
          value={signUpData.rePassword}
          onChange={onChangeSignUpData}
          className=" w-100"
        />
        
        <button 
          type="button" 
          onClick={()=>{
            onClickSignUpBtn();
          }}
          className="mt-20 mb-20 primary-btn btn-big w-100"
        >
          Sign Up
        </button>
      <p>
        Already registered?{" "}
        <span>
          <strong
            className="c-p"
            onClick={()=>{
              setIsSignIn(true)
            }}>Let`s Sign In</strong>
        </span>
      </p>
      </form>
    </>
  )
}

export default SignUpForm;