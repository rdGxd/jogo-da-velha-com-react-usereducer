import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

export default function Reset() {
  const { dispatch } = useContext(GameContext); // Obtém a função 'dispatch' do contexto 'GameContext'

  function handleClick() {
    dispatch({ type: 'RESET' }); // Executa a ação de reset no contexto
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}
