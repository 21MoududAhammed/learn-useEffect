import { useState } from "react";

export default function From() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        name=""
        placeholder="first name"
        id=""
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        name=""
        placeholder="last name"
        id=""
      />
      <h1>Full Name: {firstName + " " + lastName}</h1>
    </>
  );
}
