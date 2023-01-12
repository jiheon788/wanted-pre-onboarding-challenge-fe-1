import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import token from 'lib/token';
import { Container } from './style';
const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (token.getToken('token')) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      {isSignIn ? (
        <SignInForm setIsSignIn={setIsSignIn} />
      ) : (
        <SignUpForm setIsSignIn={setIsSignIn} />
      )}
    </Container>
  );
};

export default AuthPage;
