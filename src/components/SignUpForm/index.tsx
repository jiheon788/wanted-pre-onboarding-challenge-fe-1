import PrimaryCallbackButton from 'components/common/PrimaryCallbackButton/intex';
import { useState } from 'react';
import { postSignUpData } from '../../lib/apis/auth';
import { isValidateAuthData } from '../../lib/utils';
import {
  SignUpContainer,
  SignUpInput,
  SignUpButton,
  StrongText,
} from './styles';

interface ISignUpFormProps {
  setIsSignIn: (isSignIn: boolean) => void;
}

const SignUpForm = ({ setIsSignIn }: ISignUpFormProps) => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    rePassword: '',
  });

  const onChangeSignUpData = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <SignUpContainer>
      <SignUpInput
        id="email"
        name="email"
        type="email"
        placeholder="이메일"
        value={signUpData.email}
        onChange={onChangeSignUpData}
      />
      <SignUpInput
        id="password"
        name="password"
        type="password"
        autoComplete="off"
        placeholder="패스워드"
        value={signUpData.password}
        onChange={onChangeSignUpData}
      />

      <SignUpInput
        id="rePassword"
        name="rePassword"
        type="password"
        autoComplete="off"
        placeholder="패스워드 확인"
        value={signUpData.rePassword}
        onChange={onChangeSignUpData}
      />

      <PrimaryCallbackButton title="회원가입" handleEvent={onClickSignUpBtn} />

      <p>
        Already registered?{'  '}
        <StrongText
          onClick={() => {
            setIsSignIn(true);
          }}
        >
          Let`s Sign In
        </StrongText>
      </p>
    </SignUpContainer>
  );
};

export default SignUpForm;
