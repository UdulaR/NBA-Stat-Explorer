import { useState } from "react"

export const Search = () => {
    const [q, setQ] = useState(""); //q holds current search text entered by user --> initally empty string
    const [results, setResults] = useState([]); //results stores array of player objects returned from backend search

    //onSubmit - function I created that runs when submit button pressed
    //async marks function as asynchornous --> allows to use await to pause until promise like fetch finishes
    //e is event object --> automatically passed by react when from submission happens
    const onSubmit = async (e) => { //stops form from doing default page reload when submit pressed
        e.preventDefault(); //prevents reload (by default when you submit a form the borwser reloads the page and sends the foirm data to the server) --> allows javascript code to handle submission
        if (!q.trim()){ //makes sure that if search box is empty --> avoids calling backend
            //.trim() removes leading and trailing spaces
            //!q.trim() sees if empty
            setResults([]); //if empty clears search results
            return;
        }
        const res = await fetch( //without await we would have to use .then
            `http://localhost:8080/player?name=${encodeURIComponent(q)}` //sends get request to get backend
            //encodeURIComponent makes sure spaces/special characters are safe in url
        );
        setResults(await res.json());
    }

    return(
        <section id="search" className="min-h-screen flex flex-col items-center justify-center">
            <form onSubmit={onSubmit} className="flex items-center">
                <input type="search" name="q" placeholder="Search player..." className="px-6 py-4 w-96 border rounded-xl font-bold text-3xl" onChange={(e) => setQ(e.target.value)}/>
                <button type="submit" className="bg-black text-white font-bold text-xl rounded-xl hover:bg-orange-700 hover:-translate-y-2 transition p-5">GO</button>
            </form>

            {results.length > 0 && ( //shows table header only after result is found
            <table className="w-full border border-gray-300 mt-10">
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
                

            )}
        
           

        </section>
    )
}