import { useState } from "react";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [runLogin, setRunLogin] = useState(false);

  setTimeout(() => setIsLoading(false), 2000);

  const handleIdChange = (id: string) => setId(id);
  const handlePwChange = (passwd: string) => setPasswd(passwd);
  const handleLogin = (flag: boolean) => setRunLogin(flag);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <LoginMain
          handleIdChange={handleIdChange}
          handlePwChange={handlePwChange}
          handleLogin={handleLogin}
        />
      )}
      {runLogin ?? (
        <RunLogin id={id} passwd={passwd} handleLogin={handleLogin} />
      )}
    </>
  );
}
