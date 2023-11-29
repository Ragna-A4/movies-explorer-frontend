import React from "react";

import "./SlideBar.css";

function SlideBar(props) {
  return (
    <div className="slidebar">
      {props.isActiveBar === true && (
        <button
          type="button"
          className="slidebar-icon slidebar-icon_switched_on"
          onClick={props.onClick}
        />
      )}
      {props.isActiveBar === false && (
        <button
          type="button"
          className="slidebar-icon slidebar-icon_switched_off"
          onClick={props.onClick}
        />
      )}
      <span className="slidebar-text">Короткометражки</span>
    </div>
  );
}

export default SlideBar;
