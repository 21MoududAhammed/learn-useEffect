import { useState } from "react";

export default function ItemDetails({ items }) {
  const [selectionId, setSelectionId] = useState(null);

const selection = items.find(item => item.id === selectionId) ?? null;

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => setSelectionId(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
      {selection && (
        <h2>
          Id:{selection.id} name: {selection.name}
        </h2>
      )}
    </>
  );
}
