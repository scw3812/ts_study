import { useState } from 'react';
import Loading from '../components/Login/Loading';
import LoginMain from '../components/Login/LoginMain';

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 2000);

  return (
    <>
      { isLoading ? <Loading /> : <LoginMain /> }
    </>
  );
}
