import { useState } from "react";
import ShowComments from "./components/ShowComments";

export default function App(){
  const [userId, setUserId] = useState(1);
    return (
        <>
        <button onClick={()=>setUserId(userId === 1 ? 2 : 1 )}>Switch to profile {userId === 1 ? 2 : 1} </button>
        <ShowComments key={userId} userId={userId}/>
        </>
    );
}