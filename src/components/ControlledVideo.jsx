import {  useState } from "react";
import VideoPlayer from "./VideoPlayer";



export default function ControlledVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
    <input type="text" value={text} onChange={e => setText(e.target.value)} /><button>Submit</button><br /> <br />
     <VideoPlayer src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={isPlaying}/>
      <button onClick={()=>setIsPlaying((i) => !i)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}
