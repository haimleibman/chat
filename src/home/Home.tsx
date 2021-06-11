import React from 'react';
import { Choaches } from '../DB';
import css from './Home.module.scss';
import Trainer from '../trainer/Trainer';
import logo from '../assets/logo.svg';

function Home() {
    

    return (
        <div className={css.home}>
            <img src={logo} alt="Logo" />
            <header>Let's go!</header>
            <div>{Choaches.map(coach => <Trainer Trainer={coach}/>)}</div>
            <footer>Already Using Kemtai</footer>
        </div>
    );
}

export default Home;
