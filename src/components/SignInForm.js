import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignInData } from "../lib/apis/auth";
import { isValidateAuthData } from "../lib/util";
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
    if (isValidateAuthData(signInData)) {
      postSignInData(
        signInData.email,
        signInData.password
      ).then(response => {
        alert(response.data.message);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
    }
    return;
  }
  return (
    <>
    <h1>로그인</h1>

    <form className="login-container">
      <div>
        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="이메일"
          value={signInData.email}
          onChange={onChangeSignInData}
          className=" w-100"
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label"></label>
        <input
          type="password"
          placeholder="패스워드"
          autoComplete="off"
          name="password"
          id="password"
          value={signInData.password}
          onChange={onChangeSignInData}
          className=" w-100"
        />
      </div>

      <button 
        type="button" 
        onClick={()=>{
          onClickSignInBtn();
        }}
        className="mb-20 mt-20 primary-btn btn-big w-100"
      >
        로그인
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