import React from 'react';
import Link from '@material-ui/core/Link';



export default function Footer() {
    return (
        <div className='footer'>
            <Link href="/">
                Game
                </Link>
            <Link href='/About' >
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
