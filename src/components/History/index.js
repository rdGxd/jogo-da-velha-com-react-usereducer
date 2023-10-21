import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { GameContext } from '../../contexts/GameContext';
import './style.css';

export default function History() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);

  function handleClick(index) {
    dispatch({ type: 'UPDATE_HISTORY', payload: [history, index] });
  }

  return (
    <div>
      {history.map((data, index) => (
        <div key={uuid()} className="history">
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
