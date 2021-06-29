import React, { useRef } from 'react';
import css from './Sender.module.scss';
import Send from '../assets/send.svg';

interface SenderProps {
    onClick: (text: string | undefined) => void
}

const Sender = (props: SenderProps) => {
    // TODO: Maybe switch to form without element ref?
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = ()  => {
        const value = inputRef?.current?.value;

        if (inputRef?.current?.value) 
            inputRef.current.value = '';

        props.onClick(value);
    }

    return (
        <div className={css.Sender}>
            <input  className={css.Content} ref={inputRef} type="text" name="name" placeholder="Choose a nik name" required />
            <button className={css.Send} onClick={onClick}>
                <img src={Send} alt="Login"/>
            </button>
        </div>
    );
}

export default Sender;