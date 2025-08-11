export const Game = {
  name: "Tic Tac Toe",
  setup: () => {
    return {
      cells: Array(9).fill(null),
      xIsNext: true,
    };
  },
  moves: {
    clickCell(G, ctx, cellIndex) {
      if (G.cells[cellIndex] || calculateWinner(G.cells)) {
        return;
      }
      G.cells[cellIndex] = G.xIsNext ? "X" : "O";
      G.xIsNext = !G.xIsNext;
    },
  },
  endIf: (G) => {
    const winner = calculateWinner(G.cells);
    if (winner) {
      return { winner };
    }
    if (G.cells.every(Boolean)) {
      return { draw: true };
    }
  },
};

const calculateWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
};