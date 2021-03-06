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
          <span className="on">πδΈη­</span>
          <span className="off">δΈη­π</span>
        </div>
      </label>
    </div>
  );
}

export default Header;
