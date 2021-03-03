import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import useSound from 'use-sound';
import Checkbox from '@material-ui/core/Checkbox';
import clickSound from './436667__herraportti__snap3.wav';

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

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

    // function Demo() {
    //     const [isChecked, setIsChecked] = React.useState(
    //         false
    //     );

    //     const [playActive] = useSound(
    //         '/sounds/pop-down.mp3',
    //         { volume: 0.25 }
    //     );
    //     const [playOn] = useSound(
    //         '/sounds/pop-up-on.mp3',
    //         { volume: 0.25 }
    //     );
    //     const [playOff] = useSound(
    //         '/sounds/pop-up-off.mp3',
    //         { volume: 0.25 }
    //     );

    //     return (
    //         <Checkbox
    //             name="demo-checkbox"
    //             checked={isChecked}
    //             size={24}
    //             label="I agree to self-isolate"
    //             onChange={() => setIsChecked(!isChecked)}
    //             onMouseDown={playActive}
    //             onMouseUp={() => {
    //                 isChecked ? playOff() : playOn();
    //             }}
    //         />
    //     );
    // }


    useEffect(() => {
        const onKeypress = e => {
            console.log(e);
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
            <h2 id="simple-modal-title">Settings</h2>
            <p id="simple-modal-description">
                Sound <br />
                Music<br />
                View
                {/* {Demo()} */}
            </p>

        </div>
    );

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Settings
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
