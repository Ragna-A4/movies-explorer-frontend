import React from "react";

import "./SlideBar.css";

function SlideBar(props) {
  return (
    <div className="slidebar">
      <button
        className={`slidebar-icon ${props.isActiveBar ? "slidebar-icon_switched_on" : "slidebar-icon_switched_off"}`}
        type="button"
        onClick={props.onClick}
      />
      <span className="slidebar-text">Короткометражки</span>
    </div>
  );
}

export default SlideBar;
