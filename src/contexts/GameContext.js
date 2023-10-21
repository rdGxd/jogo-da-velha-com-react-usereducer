import t from 'prop-types';
import React, { createContext, useReducer } from 'react';
import GameReducer, { INITIAL_STATE } from './GameReducer';

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: t.node.isRequired,
};
