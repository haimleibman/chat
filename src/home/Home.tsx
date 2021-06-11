import React from 'react';
import { useState } from 'react';
import { Choaches } from '../DB';
import css from './Home.module.scss';
import Coach from '../coach/Coach';
import logo from '../assets/logo.svg';

function Home() {
    

    return (
        <div className={css.home}>
            <img src={logo} alt="Logo" />
            <header>Let's go!</header>
            <div>{Choaches.map(coach => <Coach Coach={coach}/>)}</div>
            <footer>Already Using Kemtai</footer>
        </div>
    );
}

export default Home;
