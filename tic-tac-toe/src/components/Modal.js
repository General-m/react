import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

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
      </p>

        </div>
    );

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Modal
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
