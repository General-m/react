import React, { useState, useEffect } from 'react';
import GameField from './GameField';
import Modal from './Modal'
import { calculateWinner } from '../utils';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import useSound from 'use-sound';
import clickSound from './436667__herraportti__snap3.wav';
import newGameSound from './newgame.wav';
import iconsView from './constant';
import Checkbox from './CheckBox';
import { IconButton } from '@material-ui/core';
import MusicIcon from '@material-ui/icons/MusicOffRounded';
import VolumeMute from '@material-ui/icons/MicNone';
import Music from '../music.mp3'


export default function Game() {
    const [stepNext, setStepNext] = useState(true);
    const [gameField, setGameField] = useState(Array(9).fill(null));
    const [countStep, setCountStep] = useState(0);
    const winner = calculateWinner(gameField);
    const [play, { stop }] = useSound(clickSound);
    const [playGame] = useSound(newGameSound);
    const [isHovering, setIsHovering] = useState(true);
    const [colorHeader, setcolorHeader] = useState('#64b5f6');
    const [icons, setIconsView] = useState(0);
    const [colorMain, setColorMain] = useState('#115293');
    const [winX, setWinX] = useState(0);
    const [winO, setWinO] = useState(0);
    const [draw, setDraw] = useState(0);


    const gameState = {
        field: gameField,
        count: countStep,
        step: stepNext,
        isSound: isHovering,
        colorMain: colorMain,
        colorHeader: colorHeader
        // icons: icons
    }
    const gameStatic = {
        X: winX,
        O: winO,
        draw: draw
    }


    const useAudio = url => {
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState(false);

        const toggle = () => setPlaying(!playing);

        useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
            [playing]
        );

        useEffect(() => {
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
                audio.removeEventListener('ended', () => setPlaying(false));
            };
        }, []);

        return [playing, toggle];
    };

    const [playing, toggle] = useAudio(Music);


    useEffect(() => {
        if (winner) {
            (stepNext) ? setWinO(winO + 1) : setWinX(winX + 1);
        }
        // else if (countStep == 9) {
        //     setDraw(draw + 1)
        // }
    }, [countStep])

    useEffect(() => {
        if (!winner && countStep == 9) {
            setDraw(draw + 1)
        }
    }, [gameField])



    useEffect(() => {
        if (localStorage.gameGeneral) {
            setGameField((JSON.parse(localStorage.gameGeneral)).field);
            setCountStep((JSON.parse(localStorage.gameGeneral)).count);
            setStepNext((JSON.parse(localStorage.gameGeneral)).step);
            setIsHovering((JSON.parse(localStorage.gameGeneral)).isSound);
            setColorMain((JSON.parse(localStorage.gameGeneral)).colorMain);
            setcolorHeader((JSON.parse(localStorage.gameGeneral)).colorHeader);
        }
    }, [icons])

    useEffect(() => {
        if (localStorage.gameGeneralStatic) {
            setWinX((JSON.parse(localStorage.gameGeneralStatic)).X)
            setWinO((JSON.parse(localStorage.gameGeneralStatic)).O)
            setDraw((JSON.parse(localStorage.gameGeneralStatic)).draw)
        }
    }, [])


    useEffect(() => {
        const onKeypress = e => {

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
                    setStepNext(!stepNext);
                    break;

                case 'KeyQ':
                    console.log(playing);
                    console.log(toggle);
                    if (playing) {
                        toggle();
                    }
                    toggle();
                    break;



                default:
                    break;
            }

        }

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [isHovering, playing]);


    useEffect(() => {
        localStorage.setItem('gameGeneral', JSON.stringify(gameState));

    })
    useEffect(() => {
        localStorage.setItem('gameGeneralStatic', JSON.stringify(gameStatic));
    })

    const handleClick = (index) => {
        // console.log(playing);

        const field = [...gameField];
        if (winner || field[index]) {
            return
        }

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
                if (isHovering) {
                    play();
                }

            }} >
                New Game
            </Button>
        )
    }

    // const startAutoPlay = (index) => {
    //     setGameField(Array(9).fill(null));
    //     setCountStep(0);
    //     const field = [...gameField];
    //     let timerId = setInterval(() => {
    //         let index = Math.floor(Math.random() * 8);
    //         console.log(index);
    //         console.log('prosess' + countStep);

    //         field[index] = stepNext ? 'X' : 'O';
    //         setStepNext(!stepNext);
    //         setCountStep(countStep + 1);


    //     }, 1000);
    // }

    const cancelGame = () => {
        let result = '';
        if (winner) {
            console.log(winner, stepNext)

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

    const updateData = (value) => {
        setIconsView(value);

    }


    const toggleSound = () => {
        if (isHovering) {
            setIsHovering(false);
            stop();
        }
        else {
            setIsHovering(true);
            play();
        }
    }


    return (
        <div className='container' style={{ backgroundColor: colorMain }} >
            <div className='header' style={{ backgroundColor: colorHeader }}>
                {startNewGame()}

                <ButtonGroup disableElevation variant="contained" color="primary" >
                    <Button className='color__btn' onClick={() => { setcolorHeader('#64b5f6') }} size='small'>Change</Button>
                    <Button className='color__btn' onClick={() => { setcolorHeader('#e57373') }} size='small'>Color</Button>
                </ButtonGroup>
                <IconButton color="primary" aria-label="delete" onClick={toggle} title='on/off sound' >
                    <MusicIcon />
                </IconButton>
                <IconButton color="primary" aria-label="delete" onClick={toggleSound} title='on/off sound' >
                    <VolumeMute />
                </IconButton>
                <Modal />

            </div>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button className='color__btn' onClick={() => { setColorMain('#115293') }} size='small'>Change</Button>
                <Button className='color__btn' onClick={() => { setColorMain('#e57373') }} size='small'>Color</Button>
            </ButtonGroup>
            <Checkbox updateData={updateData} />
            {cancelGame()}


            <GameField cells={gameField} onClick={handleClick} />

        </div >
    )
}
