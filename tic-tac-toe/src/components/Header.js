import React from 'react';
import { Button } from '@material-ui/core';

export default function Header() {
    return (
        <div className='header'>
            {/* 

            <Button variant="contained" color="primary">
                New Game
</Button> */}
            <Button variant="contained" color="primary">
                AutoPlay
</Button>
            <Button variant="contained" color="primary">
                Settings
</Button>

        </div>
    )
}
