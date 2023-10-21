export const INITIAL_STATE = {
  squares: Array(9).fill(null),
  isXNext: true,
  whoIsWinner: false,
  history: [],
};

export default function reducer(state, action) {
  // action.type === UPDATE_SQUARES
  switch (action.type) {
    case 'UPDATE_SQUARES': {
      const { squares, history, isXNext, whoIsWinner } = state; // Desestruturação do estado atual
      const newHistory = [...history, { squares, isXNext, whoIsWinner }]; // Cria um novo registro no histórico
      const newState = { ...state }; // Cria um novo estado copiando o atual

      newState.squares = action.payload; // Atualiza os quadrados com o valor recebido na ação
      newState.isXNext = !isXNext; // Altera o próximo jogador (X ou O)
      newState.whoIsWinner = whoIsWinner; // Mantém o vencedor atual
      newState.history = newHistory; // Atualiza o histórico com o novo registro

      return newState; // Retorna o novo estado
    }

    case 'UPDATE_WINNER': {
      return { ...state, whoIsWinner: action.payload }; // Atualiza o vencedor no estado
    }

    case 'UPDATE_HISTORY': {
      const [history, index] = action.payload; // Desestruturação dos valores recebidos na ação
      const { squares, whoIsWinner, isXNext } = history[index]; // Obtém informações do histórico

      const newHistory = [...history]; // Cria uma cópia do histórico
      newHistory.splice(index, history.length); // Remove registros do histórico além do índice selecionado

      const newState = {
        ...state,
        squares,
        whoIsWinner,
        isXNext,
        history: newHistory,
      }; // Cria um novo estado com as informações do histórico

      return newState; // Retorna o novo estado
    }

    case 'RESET': {
      return INITIAL_STATE; // Retorna o estado inicial para reiniciar o jogo
    }

    default: {
      return state; // Retorna o estado atual se a ação não for reconhecida
    }
  }
}
