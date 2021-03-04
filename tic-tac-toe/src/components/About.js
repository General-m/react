import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <h1> About Tic-tac-toe game</h1>
                <div className='description'>
                    To start a new game click New Game <br />
                    To go autoplay click Autoplay (don't work) <br />
                    In the settings you can configure music and other settings. <br />

                    <h3>Hot keys:</h3>
                    <kbd>N</kbd> start New Game <br />
                    <kbd>S</kbd> open Settings <br />
                    <kbd>W</kbd> on/off sound <br />
                    <kbd>Q</kbd> on/off music <br />
                    <kbd>A</kbd> change next step player (cheat mode &#128520;) <br />

                </div>

            </div>
        )
    }
}
