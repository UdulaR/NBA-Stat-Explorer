import { useParams } from "react-router-dom" //returns object of key/value-pairs of dynamic params from current url that were matched by routes
import { useEffect, useState } from "react"
export const FilteredTeam = () =>{
    const {team} = useParams();
    const [players, setPlayers] = useState([]); //list originally has no players --> setPlayers will put players in

    useEffect(() =>{
        fetch("http://localhost:8080/player")
        .then((res)=>res.json())
        .then((data) =>{
            const filtered = data.filter((p)=> p.team === team); //filter players by check the player objects team with the team that is been looked at
            setPlayers(filtered) //set players to list

        })
        .catch((err) => console.error("Error fetching players", err));
    }, [team])

    return (
        <section className="min-h-screen p-6 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">{team} Roster</h1>
            <table className="w-full borer borer-gray-300">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Team</th>
                        <th className="border px-4 py-2">Position</th>
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
                            <td className="border px-4 py-2">{p.position}</td>
                            <td className="border px-4 py-2">{p.ppg}</td>
                            <td className="border px-4 py-2">{p.ast}</td>
                            <td className="border px-4 py-2">{p.trb}</td>
                            <td className="border px-4 py-2">{p.stls}</td>
                            <td className="border px-4 py-2">{p.blks}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </section>
    );

}