import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

interface PropsType {
  id: string;
  passwd: string;
  handleLogin: (flag: boolean) => void;
  goMain: () => void;
}

const GET_USER_INFO = gql`
  query MyQuery($userId: String!) {
    personByUserId(userId: $userId) {
      password
    }
  }
`;

export default function RunLogin({
  id,
  passwd,
  handleLogin,
  goMain,
}: PropsType) {
  const { loading, data } = useQuery(GET_USER_INFO, {
    variables: {
      userId: id,
    },
  });

  useEffect(() => {
    if (!loading) {
      const result = data.personByUserId;
      if (!result) {
        alert("login failed");
        handleLogin(false);
      } else if (passwd !== result.password) {
        alert("password failed");
        handleLogin(false);
      } else {
        console.log("login success: ", result);
        goMain();
      }
    }
  });

  return <></>;
}
