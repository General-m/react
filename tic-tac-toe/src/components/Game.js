import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { MOVE_QUEUE } from '../utils';
import GameField from './GameField';
import { calculateWinner } from '../utils';
import { Button } from '@material-ui/core';


export default function Game() {
    const [stepNext, setStepNext] = useState(true);
    const [gameField, setGameField] = useState(Array(9).fill(null));
    const [countStep, setCountStep] = useState(0);
    const winner = calculateWinner(gameField);

    const handleClick = (index) => {
        const field = [...gameField];
        if (winner || field[index]) {
            return
        }
        field[index] = stepNext ? 'X' : 'O';
        setStepNext(!stepNext);
        setCountStep(countStep + 1);
        setGameField(field);
        console.log(countStep)
    }

    const startNewGame = () => {
        return (
            <Button variant="contained" color="primary" onClick={() => {
                setGameField(Array(9).fill(null));
                setCountStep(0);
            }} >
                New Game
            </Button>
        )
    }


    return (
        <div className='container'>
            <div className='header'>
                {startNewGame()}
            </div>
            <div>
                {winner ? 'Congratulations! Wins ' + winner : 'Next move ' + (stepNext ? 'X' : 'O')}

            </div>

            <GameField cells={gameField} onClick={handleClick} />
        </div>
    )
}
