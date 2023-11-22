import React from "react";
import success from "../../images/icon_success.svg";
import failure from "../../images/icon_failure.svg";
import "./InfoTooltip.css";

function InfoTooltip(props) {
  return (
    <div className={`infoTooltip ${props.isOpen ? "infoTooltip_opened" : ""}`}>
      <div className="infoTooltip__container">
        <button
          className="infoTooltip__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <div>
          <img
            className="infoTooltip__image"
            src={props.isSuccess ? success : failure}
            alt={props.isSuccess ? "успех" : "неудача"}
          />
          <h3 className="infoTooltip__auth-message">
            {props.isSuccess ? props.successMessage : props.errorMessage}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
