interface PropTypes {
  location: {
    state: {
      menu: {
        name: string,
        price: number
      };
    };
  };
}

export default function RouterPropTestResult({ location }: PropTypes) {
  const name = location.state.menu.name;
  const price = location.state.menu.price;

  return (
    <>
      <h1>Router Prop Test Result</h1>
      {name}: {price}
    </>
  )
}