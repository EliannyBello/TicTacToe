import React, { useState } from 'react';
import Game from './Game';
import Modal from './Modal';
import AudioComponent from './audio';

const App = () => {
  const [player, setPlayer] = useState('X');
  const [table, setTable] = useState([null, null, null, null, null, null, null, null, null]);
  const win = calculateWinnner();
  
  const onClickCell = (index) => {
    if (table[index] === null) {
      const newTable = table.slice();
      newTable[index] = player;
      setTable(newTable);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const onclickReplay = () => {
    setTable([null, null, null, null, null, null, null, null, null]);
    setPlayer('X');
  };

  function calculateWinnner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (table[a] && table[a] === table[b] && table[a] === table[c]) {
        return table[a];
      }
    }

    let isDraw = true;
    for (let i = 0; i < table.length; i++) {
      if (table[i] === null) {
        isDraw = false;
        break;
      }
    }
    if (isDraw) return 'La Vieja';

    return null;
  }

  return (
    <>
      {!!win && <Modal playerWin={win} onclickReplay={onclickReplay}/>}
      <h1>¡Welcome to the Jungle!</h1>
      <h3>Turno de: {player}</h3>
      <Game table={table} onClickCell={onClickCell} />
      <AudioComponent/>
    </>
  );
};

export default App;
