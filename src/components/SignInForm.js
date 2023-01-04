import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignInData } from "../lib/apis/auth";

const SignInForm = ({setIsSignIn}) => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const onChangeSignInData = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSignInBtn = () => {
    postSignInData(
      signInData.email,
      signInData.password
    ).then(response => {
      alert(response.data.message);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    })
  }
  return (
    <>
    <h1>로그인</h1>

    <form className="flex-col-box-center">
        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={signInData.email}
          onChange={onChangeSignInData}
          className=" w-100"
        />
        <label htmlFor="password" className="form-label"></label>
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          name="password"
          id="password"
          value={signInData.password}
          onChange={onChangeSignInData}
          className=" w-100"
        />
        <button 
          type="button" 
          onClick={()=>{
            onClickSignInBtn();
          }}
          className="mb-20 mt-20 primary-btn btn-big w-100"
        >
          Login
        </button>
        <p>
          Not registered?{"  "}
          <span>
            <strong
              className="c-p"
              onClick={()=>{
                setIsSignIn(false)
              }}>Create an Account</strong>
          </span>
        </p>
      </form>
    </>
  )
}

export default SignInForm