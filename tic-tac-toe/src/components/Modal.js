import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import useSound from 'use-sound';
import clickSound from './436667__herraportti__snap3.wav';


function getModalStyle() {
    // const top = 50 + rand();
    // const left = 50 + rand();

    return {
        // top: '50%',
        // left: ' 50%',
        // transform: "translate( 50%,  50%)",
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: 'auto',
        marginTop: '80px',
        // position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal() {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [play] = useSound(clickSound);
    const winX = (localStorage.gameGeneralStatic) ? (JSON.parse(localStorage.gameGeneralStatic)).X : 0;
    const winO = (localStorage.gameGeneralStatic) ? (JSON.parse(localStorage.gameGeneralStatic)).O : 0;
    const draw = (localStorage.gameGeneralStatic) ? (JSON.parse(localStorage.gameGeneralStatic)).draw : 0;


    useEffect(() => {
        const onKeypress = e => {
            switch (e.code) {
                case 'KeyS':
                    handleOpen();
                    break;

                default:
                    break;
            }

        }

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Statistics</h2>
            <div id="simple-modal-description">
                Win X: {winX} <br />
             Win O:  {winO} <br />
             Draw:  {draw}
            </div>


        </div>
    );

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Statistic
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
