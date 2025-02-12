import React, { useState } from "react";

const Form2 = () => {
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [nationality, setNationality] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM 2</h1>

      <div>
        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
          onChange={(event) => setAge(event.target.value)}
        />
        {age}
      </div>

      <div>
        <label>Occupation:</label>
        <input
          type="text"
          placeholder="Enter your occupation"
          onChange={(event) => setOccupation(event.target.value)}
        />
        {occupation}
      </div>

      <div>
        <label>Hobbies:</label>
        <input
          type="text"
          placeholder="Enter your hobbies"
          onChange={(event) => setHobbies(event.target.value)}
        />
        {hobbies}
      </div>

      <div>
        <label>Nationality:</label>
        <input
          type="text"
          placeholder="Enter your nationality"
          onChange={(event) => setNationality(event.target.value)}
        />
        {nationality}
      </div>

      <div>
        <label>Marital Status:</label>
        <input
          type="text"
          placeholder="Enter your marital status"
          onChange={(event) => setMaritalStatus(event.target.value)}
        />
        {maritalStatus}
      </div>
    </div>
  );
};

export default Form2;
