import { useEffect, useState } from "react";

export default function LoadComments() {
  const [comments, setComments] = useState([]);
  let ignore = false;

  useEffect(() => {
    const data = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      const result = await res.json();
      
      if (!ignore) {
        setComments(result);
        console.log(result);
        console.log(!ignore);
      }
    };
    data();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <h1>User Comments</h1>
      <ul>
        {comments.length > 0 &&
          comments.map((comment) => <li key={comment.id}>{comment.name}</li>)}
      </ul>
    </>
  );
}
