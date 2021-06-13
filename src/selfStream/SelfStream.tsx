import React, { useLayoutEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import css from './SelfStream.module.scss';

function SelfStream() {
    const video = useRef<HTMLVideoElement>(null);
    const history = useHistory();

    useLayoutEffect(() => {
        (async () => {
            if (navigator.mediaDevices.getUserMedia && video?.current) {
                video.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });

                setTimeout(() => {
                     stopVideo();
                    history.push("/");
                }, 1000)
            }
        })();

        return stopVideo;
    }, [video, history]);
    
    const stopVideo = () => {
        let stream = video?.current?.srcObject;
        const tracks = (stream as MediaStream)?.getTracks();

        tracks?.forEach(track => track.stop());

        stream = null;
    }

    return <video className={css.Video} ref={video} autoPlay muted></video>;
}

export default SelfStream;