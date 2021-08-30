import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <h1>Nav</h1>
      <ul className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/proptest">PropTest</Link>
        </li>
        <li>
          <Link to="/proptestresult">PropTestResult</Link>
        </li>
        <li>
          <Link to="/studentlist">StudentList</Link>
        </li>
      </ul>
    </>
  );
}
