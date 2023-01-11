import { useState } from "react";
import { postSignUpData } from "../lib/apis/auth";
import { isValidateAuthData } from "../lib/utils";

interface ISignUpFormProps {
  setIsSignIn: any;
}

const SignUpForm = ({ setIsSignIn }: ISignUpFormProps) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const onChangeSignUpData = (event: any) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSignUpBtn = () => {
    if (isValidateAuthData(signUpData, true)) {
      postSignUpData(signUpData.email, signUpData.password)
        .then((response) => {
          alert(response.data.message);
          setIsSignIn(true);
        })
        .catch((error) => {
          alert(error.response.data.details);
        });
    }
  };

  return (
    <form className="auth-section">
      <input
        id="email"
        name="email"
        type="email"
        placeholder="이메일"
        value={signUpData.email}
        onChange={onChangeSignUpData}
        className=" w-100"
      />
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="off"
        placeholder="패스워드"
        value={signUpData.password}
        onChange={onChangeSignUpData}
        className="w-100"
      />

      <input
        id="rePassword"
        name="rePassword"
        type="password"
        autoComplete="off"
        placeholder="패스워드 확인"
        value={signUpData.rePassword}
        onChange={onChangeSignUpData}
        className="w-100"
      />

      <button
        type="button"
        onClick={() => {
          onClickSignUpBtn();
        }}
        className="primary-btn w-100"
      >
        회원가입
      </button>
      <p>
        Already registered?{" "}
        <span>
          <strong
            className="c-p"
            onClick={() => {
              setIsSignIn(true);
            }}
          >
            Let`s Sign In
          </strong>
        </span>
      </p>
    </form>
  );
};

export default SignUpForm;
