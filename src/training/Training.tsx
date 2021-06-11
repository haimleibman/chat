import React from 'react';
import Progress from '../progress/Progress';
import SelfStream from '../selfStream/SelfStream';
import css from './Training.module.scss';

function Training() {
    

    return (
        <div className={css.Training}>
            <SelfStream></SelfStream>
            <Progress></Progress>
        </div>
    );
}

export default Training;