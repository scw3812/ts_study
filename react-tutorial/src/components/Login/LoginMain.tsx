import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./LoginMain.css";

interface PropsType {
  id: string;
  passwd: string;
  handleIdChange: (id: string) => void;
  handlePwChange: (passwd: string) => void;
  login: () => void;
}

export default function LoginMain({
  id,
  passwd,
  handleIdChange,
  handlePwChange,
  login
}: PropsType) {
  return (
    <div className="loginMain fullsize">
      <section className="idAndPasswd">
        <div className="form-floating mb-3 id">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="아이디"
            onChange={(e) => handleIdChange(e.target.value)}
          />
          <label htmlFor="floatingInput">아이디</label>
        </div>
        <div className="form-floating password">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="비밀번호"
            onChange={(e) => handlePwChange(e.target.value)}
          />
          <label htmlFor="floatingPassword">비밀번호</label>
        </div>
        <div className="buttonContainer">
          <div className="d-grid gap-2">
            <button
              className="loginButton btn btn-info"
              type="button"
              onClick={() => login()}
            >
              로그인
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
