import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./LoginMain.css";

export default function LoginMain() {
  return (
    <div className="loginMain">
      <section className="idAndPasswd">
        <div className="id"></div>
        <div className="passwd"></div>
        <div className="buttonContainer">
          <div className="d-grid gap-2">
            <button className="btn btn-info" type="button">
              Button
            </button>
          </div>
        </div>
      </section>
      <section className="wannaJoin">
        <span>혹시 조교도시락이 처음이신가요?</span>
        <Link to="/join">회원가입</Link>
      </section>
      <Footer />
    </div>
  );
}
