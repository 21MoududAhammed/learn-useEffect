import {  useState } from "react";
import VideoPlayer from "./VideoPlayer";



export default function ControlledVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
     <VideoPlayer src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={isPlaying}/>
      <button onClick={()=>setIsPlaying((i) => !i)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}
