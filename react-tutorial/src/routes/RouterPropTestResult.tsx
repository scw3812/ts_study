interface PropsType {
  location: {
    state: {
      menu: {
        name: string;
        price: number;
      };
    };
  };
}

export default function RouterPropTestResult({ location }: PropsType) {
  const name = location.state ? location.state.menu.name : "";
  const price = location.state ? location.state.menu.price : 0;

  return (
    <>
      <h1>Router Prop Test Result</h1>
      {name}: {price}
    </>
  )
}