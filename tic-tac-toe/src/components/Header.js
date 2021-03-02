import { Button } from '@material-ui/core';

export default function Header(props) {

    return (
        <div className='header'>
            <Button variant="contained" color="primary" onClick={props.startNewGame} >
                New Game
</Button>

            <Button variant="contained" color="primary">
                AutoPlay
</Button>
            <Button variant="contained" color="primary">
                Settings
</Button>

        </div>
    )
}
