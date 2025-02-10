import React from "react";

export const ArrayDemo3 = () => {
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
      <h1>Array Demo 3</h1>
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
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ArrayDemo3;