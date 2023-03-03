import React from "react";
import "./BotonPersonalizado.scss";

const CustomButton = (props) => {
  let bgColor;
  let textColor;
  let onClick;
  let className;

  switch (props.type) {
    case "buscar":
      className = "buscar";
      onClick = props.onSearchClick;
      break;
    case "success":
      className = "success";
      onClick = props.onSuccessClick;
      break;
      case "siguiente":
        className = "siguiente";
        onClick = props.onSearchClick;
        break;
        case "volver":
          className = "volver";
          onClick = props.onSearchClick;
          break;
    default:
      bgColor = "gray";
      textColor = "black";
      onClick = props.onClick;
  }

  return (
    <button className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default CustomButton;
