import React from "react";
import ReactDOM from "react-dom";
import VictoryScreen from "../victoryScreen";

const Modal = ({ playerWin, onclickReplay }) => {
  return ReactDOM.createPortal(
    <VictoryScreen winPlayer={playerWin} onclickReplay={onclickReplay} />,
    document.getElementById('modal') 
  );
};

export default Modal;
