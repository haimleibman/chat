import { Card } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import React from 'react';
import css from './Trainer.module.scss';
import ITrainer from './Trainer.model';
import { useHistory } from 'react-router';

interface ITrainerProps {
    Trainer: ITrainer;
}

function Trainer(props: ITrainerProps) {
    const history = useHistory();

    const hanldeClick = () => {
        history.push("/training");
    }

    return (
        <div className={css.Container} onClick={hanldeClick}>
            <div className={css.Trainer}>
                <img className={css.Image} src={props.Trainer.image} alt="" />
                <div className={css.Details}>
                    <p className={css.Time}>
                        <AccessTime/>
                        {props.Trainer.time} min
                    </p>
                    <p>{props.Trainer.coachingArea} </p>
                </div>
            </div>
            <div className={css.Border}></div>
        </div>
    );
}

export default Trainer;
