import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.get("https://node5.onrender.com/user/user");
      console.log(res.data);
      setMessage(res.data.message);
      setUsers(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>API DEMO 1</h1>
      <button onClick={getUserData} className="btn btn-primary">GET DATA</button>
      
      {/* Display message */}
      <h3 className="mt-3">{message}</h3>

      {/* Display data in table */}
      {users.length > 0 && (
        <div className="container mt-4">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.isActive ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
