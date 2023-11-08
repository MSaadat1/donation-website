import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <ul className="left-navbar-list">
          <li>
            <img src="/images/logo.png" alt="LOGO" />
          </li>
          <li>Home</li>
          <li>Mission</li>
          <li>Discover</li>
          <li> <span>Search </span>
            <FontAwesomeIcon icon={faSearch}/>
          </li>
        </ul>
      </div>
      <div className="right-navbar">
        <ul className="right-navbar-list">
          <li>
            <button className="funding-btn">Get Funding</button>
          </li>
          <li>
            <button className="login-btn">LOGIN</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
