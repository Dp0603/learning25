import React from "react";

export const ArrayDemo4 = () => {
  var employees = [
    {
      id: 1,
      name: "Dp",
      age: 22,
      salary: 99999,
      gender: "Male",
    },
    {
      id: 2,
      name: "Kbz",
      age: 21,
      salary: 89999,
      gender: "Male",
    },
    {
      id: 3,
      name: "Mj",
      age: 25,
      salary: 59999,
      gender: "Male",
    },
    {
      id: 4,
      name: "Liti",
      age: 20,
      salary: 9999,
      gender: "Male",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Array Demo 4</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>
                  <span
                    style={{
                      color: emp.name.startsWith("s") ? "red" : "white",
                    }}
                  >
                    {emp.name}
                  </span>
                </td>
                <td>
                  <span style={{ color: emp.age == 25 ? "green" : "white" }}>
                    {emp.age}
                  </span>
                </td>
                <td
                  style={{
                    backgroundColor: emp.salary >= 17000 ? "darkgrey" : "black",
                  }}
                >
                  {emp.salary}
                </td>
                <td
                  style={{
                    backgroundColor: emp.gender == "male" ? "blue" : "pink",
                  }}
                >
                  {emp.gender}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ArrayDemo4;