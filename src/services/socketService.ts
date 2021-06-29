import { useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io('localhost:3001');

const useSocket = () => {
    let innerChannel: string;

    const connect = () => socket.connect();

    const subscribeTo = (channel: string, callback: (args: any) => void): void => {
        innerChannel = channel;
        socket.on(channel, callback);
    };

    const emit = (message: any) => {
        socket.emit(innerChannel, message);
    };
    
    const disconnect = () => {
        socket.disconnect();
    };

    return useRef({connect, subscribeTo, emit, disconnect});
}

export default useSocket;