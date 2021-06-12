import React from 'react';
import ProgerssBar from '../progerssBar/ProgerssBar';
import css from './Progress.module.scss';

function Progress() {
    

    return (
        <div className={css.Progress}>
            {[50,70,40,70,80,100,70,90,90,60].map(num => <ProgerssBar value={num} ></ProgerssBar>)}
        </div>
    );
}

export default Progress;