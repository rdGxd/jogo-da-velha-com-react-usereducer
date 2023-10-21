import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import { v4 as uuid } from 'uuid'; // Importa a função 'uuid' do módulo 'uuid'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local
import './style.css'; // Importa um arquivo de estilo chamado 'style.css'

export default function History() {
  const {
    state: { history }, // Obtém o estado 'history' do contexto 'GameContext'
    dispatch, // Obtém a função 'dispatch' para realizar ações no contexto
  } = useContext(GameContext);

  function handleClick(index) {
    // Lida com o clique em um item do histórico
    dispatch({ type: 'UPDATE_HISTORY', payload: [history, index] }); // Atualiza o histórico com base no índice selecionado
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
      {/* Mapeia os itens do histórico e cria botões para voltar para jogadas anteriores */}
    </div>
  );
}
