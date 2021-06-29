import React from 'react';
import css from './SpeechBalloon.module.scss';
import Message from '../models/Message.model';
import { useRecoilValue } from 'recoil';
import { userName } from '../services/store';

const SpeechBalloon = (props: Message) => {
    const user = useRecoilValue(userName);

    return (
        <div className={css.SpeechBalloon} style={{alignSelf: user === props.name ? 'flex-end' :'', background: user === props.name ? '#198571' : ''}}>
            <div className={css.name}>{user === props.name ? 'Me' : props.name}</div>
            <div className={css.text}>{props.text}</div>
        </div>
    );
}

export default SpeechBalloon;