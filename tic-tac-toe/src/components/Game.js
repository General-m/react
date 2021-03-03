import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import GameField from './GameField';
import Modal from './Modal';
import { calculateWinner } from '../utils';
import { Button } from '@material-ui/core';
import useSound from 'use-sound';
import clickSound from './436667__herraportti__snap3.wav';
import newGameSound from './newgame.wav';
import winSound from './winSound.wav';
import cross from '../x.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default function Game() {
    const [stepNext, setStepNext] = useState(true);
    const [gameField, setGameField] = useState(Array(9).fill(null));
    const [countStep, setCountStep] = useState(0);
    const winner = calculateWinner(gameField);
    const [statusGame, setStatusGame] = useState(1);
    const [play, { stop }] = useSound(clickSound);
    const [playGame] = useSound(newGameSound);
    const [playWin] = useSound(winSound);
    const gameState = {
        field: gameField,
        count: countStep,
        step: stepNext
    }

    const [isHovering, setIsHovering] = React.useState(
        true
    );

    // useEffect(() => {
    //     playWin();
    // }, [winner]);

    useEffect(() => {

        if (localStorage.gameGeneral) {
            setGameField((JSON.parse(localStorage.gameGeneral)).field);
            setCountStep((JSON.parse(localStorage.gameGeneral)).count);
            setStepNext((JSON.parse(localStorage.gameGeneral)).step);
        }
    }, [])


    useEffect(() => {
        const onKeypress = e => {
            console.log(e);
            switch (e.code) {
                case 'KeyN':
                    setGameField(Array(9).fill(null));
                    setCountStep(0);
                    playGame();
                    break;
                case 'KeyW':
                    if (isHovering) {
                        setIsHovering(false);
                        stop();
                    }
                    else {
                        setIsHovering(true);
                        play();
                    }

                    break;

                default:
                    break;
            }

        }

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [isHovering]);


    useEffect(() => {
        localStorage.setItem('gameGeneral', JSON.stringify(gameState));
    })

    const handleClick = (index) => {
        const field = [...gameField];
        if (winner || field[index]) {
            return
        }
        field[index] = stepNext ? '╳' : '◯';
        setStepNext(!stepNext);
        setCountStep(countStep + 1);
        setGameField(field);
        if (isHovering) {
            play();
        }


    }

    const startNewGame = () => {
        return (
            <Button variant="contained" color="primary" onClick={() => {
                setGameField(Array(9).fill(null));
                setCountStep(0);
                playGame();

            }} >
                New Game
            </Button>
        )
    }


    const settings = () => {
        return (
            <Modal />
        )
    }


    const startAutoPlay = (index) => {
        setGameField(Array(9).fill(null));
        setCountStep(0);
        const field = [...gameField];
        let timerId = setInterval(() => {
            let index = Math.floor(Math.random() * 8);
            console.log(index);
            console.log('prosess' + countStep);

            field[index] = stepNext ? 'X' : 'O';
            setStepNext(!stepNext);
            setCountStep(countStep + 1);


        }, 1000);
    }

    const cancelGame = () => {
        let result = '';
        if (winner) {
            result = 'Congratulations! Wins ' + winner;


        }
        else if (countStep == 9) {
            result = "It's draw, try again!"
        }
        else {
            result = 'Next move ' + (stepNext ? 'X' : 'O');
        }


        return (
            <div className='game__status'>
                {result}

            </div>
        )
    }


    return (

        <div className='container' >
            <div className='header'>
                {startNewGame()}
                <Button className='autoPlay' variant="contained" color="primary" onClick={startAutoPlay} >
                    AutoPlay
                    </Button>
                {settings()}
            </div>
            {cancelGame()}

            <GameField cells={gameField} onClick={handleClick} onChange={startAutoPlay} />

        </div >
    )
}
