import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFormChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, email } = person;

  return (
    <>
      <label>
        First name:
        <input name="firstName" value={firstName} onChange={handleFormChange} />
      </label>
      <label>
        Last name:
        <input name="lastName" value={lastName} onChange={handleFormChange} />
      </label>
      <label>
        Email:
        <input name="email" value={email} onChange={handleFormChange} />
      </label>
      <p>
        {firstName} {lastName} {email}
      </p>
    </>
  );
}
