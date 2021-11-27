import React from "react";
import './Button.css';

export default function Button(props) {
  const typeClass = props.outlined ? 'btn__outlined' : 'btn__primary'
  return (
    <button className={`btn ${typeClass}`} onClick={props.onClick} type={props.type || "button"}>
      {props.children}
    </button>
  );
}
