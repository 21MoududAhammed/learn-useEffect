import {useState } from "react";

export default function ShowComments({userId}){
    const [ comment , setComment] = useState('');
    // no need to use useEffect instead of it we can set a unique key for every user 
    // useEffect(()=>{
    //     setComment('');
    // },[userId])
    return (
        <>
        <h2> UserId {userId}</h2>
        <input value={comment} onChange={(e)=> setComment(e.target.value)} type="text"  name="" id="" />
        <h1>Comment: {comment}</h1>
        </>
    );
}