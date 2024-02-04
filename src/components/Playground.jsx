import { useEffect, useState } from "react";

export default function Playground() {
  const [text, setText] = useState("a");

  useEffect(() => {
    console.log('🔵 Schedule "' + text + '" log');

    const timeoutId = setTimeout(() => {
      console.log("⏰ " + text);
    }, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{" "}
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  );
}
