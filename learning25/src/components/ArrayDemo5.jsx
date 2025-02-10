import React from "react";
import ronaldo from "../assets/ronaldo.png";
import messi from "../assets/messi.png";
import neymar from "../assets/neymar.png";
import pele from "../assets/pele.png";
import maradona from "../assets/maradona.png";
import zlatan from "../assets/zlatan.png";

const PlayerTable = () => {
  const players = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      careerGoals: 850,
      gender: "Male",
      isActive: true,
      age: 38,
      face: ronaldo,
    },
    {
      id: 2,
      name: "Lionel Messi",
      careerGoals: 820,
      gender: "Male",
      isActive: true,
      age: 36,
      face: messi,
    },
    {
      id: 3,
      name: "Neymar Jr",
      careerGoals: 450,
      gender: "Male",
      isActive: true,
      age: 31,
      face: neymar,
    },
    {
      id: 4,
      name: "Pele",
      careerGoals: 1281,
      gender: "Male",
      isActive: false,
      age: 82,
      face: pele,
    },
    {
      id: 5,
      name: "Diego Maradona",
      careerGoals: 293,
      gender: "Male",
      isActive: false,
      age: 60,
      face: maradona,
    },
    {
      id: 6,
      name: "Zlatan Ibrahimović",
      careerGoals: 570,
      gender: "Male",
      isActive: false,
      age: 42,
      face: zlatan,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Player Table</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Player Face</th>
            <th>Name</th>
            <th>Career Goals</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>
                <img
                  src={player.face}
                  alt={player.name}
                  style={{ width: "50px", borderRadius: "8px" }}
                />
              </td>
              <td style={{ color: !player.isActive ? "yellow" : "white" }}>
                {player.name}
              </td>
              <td
                style={{
                  color: !player.isActive ? "yellow" : player.careerGoals >= 500 ? "green" : "white",
                }}
              >
                {player.careerGoals}
              </td>
              <td style={{ color: !player.isActive ? "yellow" : "white" }}>
                {player.gender}
              </td>
              <td style={{ color: !player.isActive ? "yellow" : "white" }}>
                {player.isActive ? "Active" : "Retired"}
              </td>
              <td style={{ color: !player.isActive ? "yellow" : player.age > 35 ? "orange" : "white" }}>
                {player.age > 35 ? `${player.age} (Please Retire)` : player.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
