import React from 'react';
import '../assets/content.css'

const Content = () => {
  const name = "Amit";
  const age = 19;
  const isActive = false;

  return (
    <>
    <div className="container">
      {/* About Us Content */}
      <div className="about-content">
        <h1>Hello</h1>
        <h1>Name = {name}</h1>
        <h2>Age = {age}</h2>
        <h2>Active? {isActive.toString()}</h2>
        <h2>Active = {isActive ? "Active" : "Not Active"}</h2>
      </div>
      </div>
    </>   
  );
};

export default Content;
