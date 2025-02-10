import React from "react";

const ArrayDemo2 = () => {
  var users = [
    { name: "abc", age: 25, marks: 99 },
    { name: "def", age: 25, marks: 99 },
    { name: "ghi", age: 25, marks: 99 },
  ];
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color:"blue"}}>Array Demo 2</h1>
    {
        users.map((usr)=>{
            return <div>
                <h1>Name = {usr.name}</h1>
                <h1>Name = {usr.age}</h1>
                <h1>Name = {usr.marks}</h1>
            </div>
        })
    }    
    </div>
  )
}
export default ArrayDemo2;
