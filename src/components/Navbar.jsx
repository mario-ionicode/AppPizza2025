import style from './style/Navbar-style.module.css';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className={style["link-styles"]} to="/">Home</Link>
        </li>
       
        <li>
          <Link className={style["link-styles"]} to="/Owner">Owner</Link>
        </li>

      </ul>
      <hr />
      <br />
      <br />
    </nav>
  );
}