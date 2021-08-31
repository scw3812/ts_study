import Header from '../components/Main/Header';
import Content from '../components/Main/Content';
import OrderComplete from '../components/Main/OrderComplete';
import OrderCanceled from '../components/Main/OrderCanceled';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <>
      <h1>Main</h1>
      <Header />
      <Content />
      <OrderComplete />
      <OrderCanceled />
      <Footer />
    </>
  );
}
