import style from "../css/Header.module.css";
import logo from "../imagens/viagens.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className={style.boximglogo}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="aviao" />
        </Link>
      </div>
      <nav className={style.menu}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Escocia">Escocia</Link>
          </li>
          <li>
            <Link to="/Aruba">Aruba</Link>
          </li>
          <li>
            <Link to="/GrandCanyon">Grand Canyon</Link>
          </li>
          <li>
            <Link to="/Muralha">Muralha</Link>
          </li>
        </ul>
      </nav>
      <div className={style.boxlupaicon}>
        <input type="text" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </header>
  );
}

export default Header;
