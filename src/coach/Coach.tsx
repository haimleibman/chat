import { Card } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import React from 'react';
import css from './Coach.module.scss';
import ICoach from './Coach.nodel';

interface ICoachProps {
    Coach: ICoach;
}

function Coach(props: ICoachProps) {

    return (
        <div className={css.Container}>
            <div className={css.Coach}>
                <img className={css.Image} src={props.Coach.image} alt="" />
                <div className={css.Details}>
                    <p className={css.Time}>
                        <AccessTime/>
                        {props.Coach.time} min
                    </p>
                    <p>{props.Coach.coachingArea} </p>
                </div>
            </div>
            <div className={css.Border}></div>
        </div>
    );
}

export default Coach;
