import React from "react";

const Announcement = ({ winner, nextPlayer }) => {
    let status;
    if (winner) {
      status = `Ganador: ${winner}`;
    } else {
      status = `Siguiente jugador: ${nextPlayer}`;
    }
  
    return <div className="announcement">{status}</div>;
  };
  
  export default Announcement;