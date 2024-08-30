import React from "react";


const Tile = ({ value, onClick }) => {
  return (
    <button className="tile" onClick={onClick}>
      {value}
    </button>
  );
};

export default Tile;
