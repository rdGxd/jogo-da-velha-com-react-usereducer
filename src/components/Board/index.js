import React, { useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { GameContext } from '../../contexts/GameContext';
import calculateWinner from '../../utils/calculateWinner';
import './style.css';

import History from '../History';
import Player from '../Player';
import Reset from '../Reset';
import Square from '../Square';
import Winner from '../Winner';

export default function Board() {
  const {
    state: { squares, history },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      dispatch({ type: 'UPDATE_WINNER', payload: winner });
    }
  }, [squares, history, dispatch]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square key={uuid()} value={value} index={index} />
        ))}
      </div>
      <History />
    </div>
  );
}
