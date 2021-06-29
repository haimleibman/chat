import React, { useState, useEffect, useRef } from 'react';
import css from './Chat.module.scss';
import Sender from "../sender/Sender";
import useSocket from '../services/socketService';
import Message from '../models/Message.model';
import SpeechBalloon from '../speechBalloon/SpeechBalloon'
import { useRecoilValue } from 'recoil';
import { userName } from '../services/store';
import { useHistory } from 'react-router-dom';

function Chat() {
    const user = useRecoilValue(userName);

    const [messages, setMesagges] = useState<Message[]>([]);
    const messagesBottomRef = useRef<HTMLDivElement>(null);

    const chatIORef = useSocket();
    const history = useHistory();

    useEffect(() => {
        if (!user) 
            history.push('/');
    }, []);

    useEffect(() => {
        const chatIO = chatIORef.current;

        chatIO.connect();

        chatIO.subscribeTo("chat", (args: Message) => setMesagges(prev => [...prev, args]));

        return () => chatIO.disconnect();
    }, [chatIORef]);

    useEffect(() => {
        messagesBottomRef?.current && messagesBottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const onClick = (text: string | undefined) => text && chatIORef.current.emit({name: user, text: text});

    return <div className={css.chat}>
            <div className={css.MessagesContainer}>
                {messages.map((message: Message, i) => 
                    <SpeechBalloon key={i} {...message} ></SpeechBalloon>)}
                <div ref={messagesBottomRef}></div>
            </div>
            <Sender onClick={onClick}></Sender>
        </div>;
}

export default Chat;
