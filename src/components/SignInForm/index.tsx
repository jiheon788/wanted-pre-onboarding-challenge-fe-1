import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignInData } from '../../lib/apis/auth';
import { isValidateAuthData } from '../../lib/utils';
import PrimaryCallbackButton from 'components/common/PrimaryCallbackButton/intex';
import token from 'lib/token';
import {
  SignInContainer,
  SignInInput,
  SignInButton,
  StrongText,
} from './styles';

interface ISignInFormProps {
  setIsSignIn: (isSignIn: boolean) => void;
}

const SignInForm = ({ setIsSignIn }: ISignInFormProps) => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const onChangeSignInData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSignInBtn = () => {
    if (isValidateAuthData(signInData)) {
      postSignInData(signInData.email, signInData.password)
        .then((response) => {
          alert(response.data.message);
          token.setToken('token', response.data.token);
          navigate('/');
        })
        .catch((error) => {
          alert(error.response.data.details);
        });
    }
  };
  return (
    <SignInContainer>
      <SignInInput
        id="email"
        name="email"
        type="text"
        placeholder="이메일"
        value={signInData.email}
        onChange={onChangeSignInData}
      />
      <SignInInput
        type="password"
        placeholder="패스워드"
        autoComplete="off"
        name="password"
        id="password"
        value={signInData.password}
        onChange={onChangeSignInData}
      />

      <PrimaryCallbackButton title={'로그인'} handleEvent={onClickSignInBtn} />

      <p>
        Not registered?{'  '}
        <StrongText
          onClick={() => {
            setIsSignIn(false);
          }}
        >
          Create an Account
        </StrongText>
      </p>
    </SignInContainer>
  );
};

export default SignInForm;
