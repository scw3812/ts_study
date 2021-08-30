import { Link } from "react-router-dom";

export default function RouterPropTest() {
  const menu = {
    name: '짜장면',
    price: 5000,
  };

  return (
    <>
      <h1>Router Prop Test</h1>
      <Link to={{
        pathname: '/proptestresult',
        state: {
          menu
        },
      }}>데이터 날리기</Link>
    </>
  );
}
