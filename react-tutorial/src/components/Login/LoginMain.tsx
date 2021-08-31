import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function LoginMain() {
  return (
    <div className="loginMain">
      <section className="idAndPasswd">
        <div className="id"></div>
        <div className="passwd"></div>
        <div className="buttonContainer"></div>
      </section>
      <section className="wannaJoin">
        <span>혹시 조교도시락이 처음이신가요?</span>
        <Link to="/join">회원가입</Link>
      </section>
      <Footer />
    </div>
  );
}
