import React, { useContext, useEffect } from 'react'; // Importa o módulo 'react', a função 'useContext' e 'useEffect'
import { v4 as uuid } from 'uuid'; // Importa a função 'uuid' do módulo 'uuid'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local
import calculateWinner from '../../utils/calculateWinner'; // Importa a função 'calculateWinner' de um arquivo de utilitário
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

import History from '../History'; // Importa o componente 'History' de um arquivo local
import Player from '../Player'; // Importa o componente 'Player' de um arquivo local
import Reset from '../Reset'; // Importa o componente 'Reset' de um arquivo local
import Square from '../Square'; // Importa o componente 'Square' de um arquivo local
import Winner from '../Winner'; // Importa o componente 'Winner' de um arquivo local

export default function Board() {
  const {
    state: { squares, history }, // Obtém os estados 'squares' e 'history' do contexto 'GameContext'
    dispatch, // Obtém a função 'dispatch' para realizar ações no contexto
  } = useContext(GameContext);

  useEffect(() => {
    // Executa um efeito sempre que 'squares' ou 'history' mudam
    const winner = calculateWinner(squares); // Calcula o vencedor do jogo

    if (winner) {
      dispatch({ type: 'UPDATE_WINNER', payload: winner }); // Atualiza o vencedor no contexto
    }
  }, [squares, history, dispatch]); // Lista de dependências para o useEffect

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square key={uuid()} value={value} index={index} />
        ))}
        {/* Mapeia os valores de 'squares' e renderiza um componente 'Square' para cada quadrado do tabuleiro */}
      </div>
      <History />
    </div>
  );
}
