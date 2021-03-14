import { useState } from "react";
import "./header.css";

function Header(props) {
  const [destination, setDestination] = useState(props.target);

  function handleClick(event) {
    const isChecked = event.target.checked;
    const value = isChecked ? "work" : "home";
    document.title = value;
    props.onSwitchDestination(value);
    setDestination(value);
  }

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          id="togBtn"
          onClick={(e) => handleClick(e)}
          defaultChecked={destination === "work"}
        />
        <div className="slider round">
          <span className="on">🌞上班</span>
          <span className="off">下班🌙</span>
        </div>
      </label>
    </div>
  );
}

export default Header;
