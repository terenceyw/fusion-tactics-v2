import React, { useState } from 'react';
import { Game } from '../game/tic-tac-toe';

const App = () => {
    const [gameState, setGameState] = useState(Game.initialState);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (gameState.squares[index] || winner) return;

        const newGameState = Game.makeMove(gameState, index);
        setGameState(newGameState);
        setWinner(Game.calculateWinner(newGameState.squares));
    };

    const renderSquare = (index) => (
        <button className="square" onClick={() => handleClick(index)}>
            {gameState.squares[index]}
        </button>
    );

    const renderStatus = () => {
        if (winner) {
            return `Winner: ${winner}`;
        } else if (gameState.squares.every(square => square)) {
            return 'Draw!';
        } else {
            return 'Next player: ' + (gameState.xIsNext ? 'X' : 'O');
        }
    };

    return (
        <div className="game">
            <div className="game-status">{renderStatus()}</div>
            <div className="game-board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    );
};

export default App;