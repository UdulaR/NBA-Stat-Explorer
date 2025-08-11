import React, { useEffect, useState } from "react";

export const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/player")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  return (
    <section id="players" className="p-6">
      <h1 className="text-2xl font-bold mb-4 pt-14 text-center">All NBA Players</h1>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Team</th>
            <th className="border border-gray-300 px-4 py-2">Position</th>
            <th className="border border-gray-300 px-4 py-2">PPG</th>
            <th className="border border-gray-300 px-4 py-2">AST</th>
            <th className="border border-gray-300 px-4 py-2">TRB</th>
            <th className="border border-gray-300 px-4 py-2">STLS</th>
            <th className="border border-gray-300 px-4 py-2">BLKS</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.name}>
              <td className="border px-4 py-2">{player.name}</td>
              <td className="border px-4 py-2">{player.team}</td>
              <td className="border px-4 py-2">{player.position}</td>
              <td className="border px-4 py-2">{player.ppg}</td>
              <td className="border px-4 py-2">{player.ast}</td>
              <td className="border px-4 py-2">{player.trb}</td>
              <td className="border px-4 py-2">{player.stls}</td>
              <td className="border px-4 py-2">{player.blks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

