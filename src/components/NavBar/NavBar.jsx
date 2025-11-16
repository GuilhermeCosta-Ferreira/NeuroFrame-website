import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <div>
      <div className="nav-bar">
        <h1 className="nav-title">NeuroFrame: Brain Atlas</h1>

        <div className="nav-buttons">
          <NavButton name="Home" target="/"></NavButton>
          <NavButton name="Atlas" target="/atlas"></NavButton>
          <NavButton name="Papers" target="/papers"></NavButton>
          <NavButton
            name="Dev"
            target="https://github.com/NR-NeuroFrame"
          ></NavButton>
        </div>
      </div>
      <hr className="nav-separator" />
    </div>
  );
}

function NavButton(props) {
  function handleClick() {
    alert("Behavior Not Defined");
  }

  return (
    <Link to={props.target}>
      <span className="nav-button">{props.name}</span>
    </Link>
  );
}
