import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Sender from '../sender/Sender';
import useSocket from '../services/socketService';
import { userName } from '../services/store';
import css from './Login.module.scss';

function Login() {
    const [name, setName] = useRecoilState(userName);
    const [error, setError] = useState('');
    const history = useHistory();
    const loginIORef = useSocket();

    useEffect(() => {
        if (name) 
            history.push('myRoom');
    }, []);

    useEffect(() => {
        const loginIO = loginIORef.current;

        loginIO.connect();

        loginIO.subscribeTo('login', (response: string) => {

            if (response === 'rejected')
                setError('This name is already taken, Please choose another name!');

            loginIO.disconnect();
            setName(response);
            history.push('/myRoom');
        })

        return () => loginIO.disconnect();
    }, [history, loginIORef, setName]);

    const hundleClick = async (text: string|undefined) => text && loginIORef.current.emit(text);
    
    return <div className={css.Login}>
        <Sender onClick={(text: string|undefined) => hundleClick(text)} />
        <div className={css.error}>{error}</div>
    </div>;
}

export default Login;
