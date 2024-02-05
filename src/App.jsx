import { useState } from "react";
import { items1, items2 } from "./utils/comments";
import ItemDetails from "./components/ItemDetails";

export default function App(){
  const [items, setItems] = useState(items1);
    return (
        <>
        <button onClick={()=> setItems(items1)}>Items 1</button>
        <button onClick={()=> setItems(items2)}>Items 2</button>
        <ItemDetails items={items}/>
        </>
    );
}