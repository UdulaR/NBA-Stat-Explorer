import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const FilteredPosition = () =>{
    const {position} = useParams(); //gets value from url
    const [players, setPlayers] = useState([]); //to put list of players into list to display

    useEffect(() => {
        fetch("http://localhost:8080/player")
        .then((res) =>res.json())
        .then((data) => {
            const filtered = data.filter((p) => p.position === position);
            setPlayers(filtered)
        })
        .catch((err) => console.error("Error fetching players", err));
    }, [position]);

    return (
        <section className="min-h-screen p-6 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">{position} - Players</h1>
            <table className="w-full border border-gray-300">
                <thead className="bg-gray-300">
                    <tr> 
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Team</th>
                        <th className="border px-4 py-2">PPG</th>
                        <th className="border px-4 py-2">AST</th>
                        <th className="border px-4 py-2">TRB</th>
                        <th className="border px-4 py-2">STLS</th>
                        <th className="border px-4 py-2">BLKS</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {players.map((p) => (
                        <tr key={p.name}>
                            <td className="border px-4 py-2">{p.name}</td>
                            <td className="border px-4 py-2">{p.team}</td>
                            <td className="border px-4 py-2">{p.ppg}</td>
                            <td className="border px-4 py-2">{p.ast}</td>
                            <td className="border px-4 py-2">{p.trb}</td>
                            <td className="border px-4 py-2">{p.stls}</td>
                            <td className="border px-4 py-2">{p.blks}</td>
                        </tr>))}
                </tbody>

            </table>
        </section>
    );


}