import t from 'prop-types'; // Importa o módulo 'prop-types' para definir as propriedades esperadas
import React, { createContext, useReducer } from 'react'; // Importa o módulo 'react', a função 'createContext' e 'useReducer'
import { INITIAL_STATE, reducer } from './GameReducer'; // Importa o redutor 'GameReducer' e o estado inicial 'INITIAL_STATE'

export const GameContext = createContext(); // Cria o contexto 'GameContext'

export default function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE); // Usa o redutor e o estado inicial para criar o estado e a função de despacho

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: t.node.isRequired, // Define que 'children' é um nó obrigatório
};
