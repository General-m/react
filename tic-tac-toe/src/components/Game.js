import React, { useState, useEffect } from 'react';
import GameField from './GameField';
import Modal from './Modal';
import { calculateWinner } from '../utils';
import { Button } from '@material-ui/core';
import useSound from 'use-sound';
import clickSound from './436667__herraportti__snap3.wav';
import newGameSound from './newgame.wav';
import winSound from './winSound.wav';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import iconsView from './constant'



export default function Game() {
    const [stepNext, setStepNext] = useState(true);
    const [gameField, setGameField] = useState(Array(9).fill(null));
    const [countStep, setCountStep] = useState(0);
    const winner = calculateWinner(gameField);
    const [statusGame, setStatusGame] = useState(1);
    const [play, { stop }] = useSound(clickSound);
    const [playGame] = useSound(newGameSound);
    const [playWin] = useSound(winSound);
    const [isHovering, setIsHovering] = useState(true);

    const [icons, setIconsView] = useState(0);

    const gameState = {
        field: gameField,
        count: countStep,
        step: stepNext,
        isSound: isHovering,
        // icons: icons
    }
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

    // useEffect(() => {
    //     playWin();
    // }, [winner]);

    useEffect(() => {

        if (localStorage.gameGeneral) {
            setGameField((JSON.parse(localStorage.gameGeneral)).field);
            setCountStep((JSON.parse(localStorage.gameGeneral)).count);
            setStepNext((JSON.parse(localStorage.gameGeneral)).step);
            setIsHovering((JSON.parse(localStorage.gameGeneral)).isSound);
        }
        if (localStorage.gameGeneralSettings) {
            setIconsView((JSON.parse(localStorage.gameGeneralSettings)).icons)
        }
    }, [icons])


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
                case 'KeyA':
                    setStepNext(!stepNext)


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
        console.log(icons);
        field[index] = stepNext ? iconsView[icons][0] : iconsView[icons][1];
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
                <Modal />
            </div>
            {cancelGame()}

            <GameField cells={gameField} onClick={handleClick} onChange={startAutoPlay} />

        </div >
    )
}
