import React from 'react';
import ProgerssBar from '../progerssBar/ProgerssBar';
import css from './Progress.module.scss';

function Progress() {
    

    return (
        <div className={css.Progress}>
            {[1,2,3,2,1,1,3,3,2,3].map(num => <ProgerssBar value={num} ></ProgerssBar>)}
        </div>
    );
}

export default Progress;