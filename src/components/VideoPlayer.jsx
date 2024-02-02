import { useEffect, useRef } from "react";

export default function VideoPlayer({src, isPlaying}){
    let ref = useRef(null);
    useEffect(()=>{
        if(isPlaying){
            ref.current.play();
            console.log('start')
        }else{
            ref.current.pause();
            console.log('pause')
        }
    },[isPlaying])
    return (
        <video src={src} ref={ref}></video>
    );
}