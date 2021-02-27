import React from 'react';
import { Link } from '@material-ui/core';
import About from './About';
import Game from './Game';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export default function Footer() {
    return (
        <div className='footer'>
            <Link to='/' >
                Home
                </Link>
            <Link to='/About' >
                About
                </Link>


            <Link href="https://rs.school/js/" >
                RS-School
            </Link>
            <Link href="https://github.com/General-m" >
                Github
            </Link>


        </div>
    )
}
