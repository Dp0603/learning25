import React, { useState } from "react";

const InputDemo1 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const nameHandler = (event) => {
    setname(event.target.value);
  };
  return (
    <div style={{textAlign:"center"}}>
      <h1>INPUT DEMO 1</h1>
      <div><label>Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => {
          nameHandler(event);
        }}
        ></input>
        {name}
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" onChange={(event)=>{setemail(event.target.value)}}></input>
        {email}
      </div>
    </div>
  );
};

export default InputDemo1;
