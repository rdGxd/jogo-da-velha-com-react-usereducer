import t from 'prop-types'; // Importa o módulo 'prop-types' para definir as propriedades esperadas
import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local

export default function Square({ value, index }) {
  const {
    state: { squares, isXNext, whoIsWinner }, // Obtém os estados 'squares', 'isXNext' e 'whoIsWinner' do contexto 'GameContext'
    dispatch, // Obtém a função 'dispatch' para realizar ações no contexto
  } = useContext(GameContext);

  function handleClick() {
    // Lida com o clique em um quadrado
    if (squares[index]) return; // Retorna se o quadrado já foi preenchido
    if (whoIsWinner) return; // Retorna se já houver um vencedor

    const newSquares = [...squares]; // Cria uma cópia dos quadrados
    newSquares[index] = isXNext ? 'X' : 'O'; // Define 'X' ou 'O' no quadrado clicado
    dispatch({ type: 'UPDATE_SQUARES', payload: newSquares }); // Atualiza os quadrados no contexto
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  value: null, // Define um valor padrão para 'value' como nulo
};

Square.propTypes = {
  value: t.string, // Define que 'value' deve ser uma string
  index: t.number.isRequired, // Define que 'index' deve ser um número obrigatório
};
