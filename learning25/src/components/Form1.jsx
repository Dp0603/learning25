import React, { useState } from "react";
const Form1 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");

  const nameHandler = (event) => {
    setname(event.target.value);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM 1</h1>
      <div>
        <label>Name:</label>
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
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(event) => {
            setemail(event.target.value);
          }}
        ></input>
        {email}
      </div>
      <div>
        <label>Phone No.</label>
        <input
          type="number"
          placeholder="Enter your phone number"
          onChange={(event) => {
            setphone(event.target.value);
          }}
        ></input>
        {phone}
      </div>
      <div>
        <label>Address</label>
        <input
          type="address"
          placeholder="Enter your address"
          onChange={(event) => {
            setaddress(event.target.value);
          }}
        ></input>
        {address}
      </div>
      <div>
        <label>Gender</label>
        <input
          type="Gender"
          placeholder="Enter your gender"
          onChange={(event) => {
            setgender(event.target.value);
          }}
        ></input>
        {gender}
      </div>
    </div>
  );
};
export default Form1;
