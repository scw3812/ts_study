import { useState } from "react";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");

  setTimeout(() => setIsLoading(false), 2000);

  const handleIdChange = (id: string) => setId(id);
  const handlePwChange = (passwd: string) => setPasswd(passwd);
  const login = () => {
    console.log(id)
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <LoginMain
          id={id}
          passwd={passwd}
          handleIdChange={handleIdChange}
          handlePwChange={handlePwChange}
          login={login}
        />
      )}
    </>
  );
}
