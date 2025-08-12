import { useState } from "react"

export const Search = () => {
    const [q, setQ] = useState("");
    const [results, setResults] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(
            `http://localhost:8080/player?name=${encodeURIComponent(q)}`
        );
        setResults(await res.json());
    }

    return(
        <section id="search" className="min-h-screen flex flex-col items-center justify-center">
            <form onSubmit={onSubmit} className="flex items-center">
                <input type="search" name="q" placeholder="Search player..." className="px-6 py-4 w-96 border rounded-xl font-bold text-3xl" onChange={(e) => setQ(e.target.value)}/>
                <button type="submit" className="bg-black text-white font-bold text-xl rounded-xl hover:bg-orange-700 hover:-translate-y-2 transition p-5">GO</button>
            </form>

            <h1 className="text-2xl font-bold mb-4 pt-14 text-center">Stats</h1>
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
          {results.map((player) => (
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
    )
}