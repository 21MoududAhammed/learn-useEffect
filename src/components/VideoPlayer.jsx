import { useEffect, useRef } from "react";

export default function VideoPlayer({src, isPlaying}){
    let ref = useRef(null);
    useEffect(()=>{
        if(isPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    })
    return (
        <video src={src} ref={ref}></video>
    );
}