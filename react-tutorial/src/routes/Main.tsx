import Header from "../components/Main/Header";
import Content from "../components/Main/Content";
import OrderComplete from "../components/Main/OrderComplete";
import OrderCanceled from "../components/Main/OrderCanceled";
import Footer from "../components/Footer";

interface PropsType {
  location: {
    state: {
      idFromLogin: string;
    };
  };
}

export default function Main({
  location: {
    state: { idFromLogin },
  },
}: PropsType) {
  const userId = idFromLogin;

  return (
    <>
      <h1>{userId}님 환영합니다</h1>
      <Header />
      <Content />
      <OrderComplete />
      <OrderCanceled />
      <Footer />
    </>
  );
}
