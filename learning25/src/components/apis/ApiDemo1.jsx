import axios from "axios";
import React, { useEffect, useState } from "react";

import { ToastContainer,Bounce, toast } from "react-toastify";
import Loader from "../Loader";

export const ApiDemo1 = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const getUserData = async () => {
    try {
      setisLoading(true);
      const res = await axios.get("https://node5.onrender.com/user/user/");
      console.log(res.data);
      setMessage(res.data.message);
      setUsers(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setisLoading(false)
  };
  useEffect(() => {
    getUserData();
  }, []);
  const deleteUser = async (id) => {
    const res = await axios.delete("https://node5.onrender.com/user/user/" + id);
    console.log(res);
    if ((res.status == 204)) {
      // alert("user deleted...");
      toast.warn("🦄 Nikal idhar se", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      getUserData();
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <h1>API DEMO 1</h1>
      {/* <button onClick={getUserData} className="btn btn-primary">
        GET DATA
        </button> */}

      {/* Display message */}
      <h3 className="mt-3">{message}</h3>
        {isLoading == true && <Loader/>}

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
                  <td>
                    <button
                      onClick={() => {
                        deleteUser(user._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
