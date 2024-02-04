import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    let id = setInterval(onTick, 1000);
    return(()=>{
        console.log('unmount ' + id);
        clearInterval(id);
    })
  }, []);

  return <h1>{count}</h1>;
}
