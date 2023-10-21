import t from 'prop-types'; // Importa o módulo 'prop-types' para definir as propriedades esperadas
import React, { useContext } from 'react'; // Importa o módulo 'react' e a função 'useContext'
import { GameContext } from '../../contexts/GameContext'; // Importa o contexto 'GameContext' de um arquivo local

export default function Square({ value, index }) {
  const {
    state: { squares, isXNext, whoIsWinner },
    dispatch,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    dispatch({ type: 'UPDATE_SQUARES', payload: newSquares });
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
