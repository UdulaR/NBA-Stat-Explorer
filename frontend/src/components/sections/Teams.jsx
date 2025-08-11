// useNavigate from react-router-dom used for routing to filteredTeam
import { useNavigate } from "react-router-dom" 

export const Teams = () =>{
    const navigate = useNavigate();

    const teams = ["LAL"] //list containing list of teams

    return(
        <section id="teams" className="min-h-screen flex justify-center items-center relative">
            <div className="text-center z-10 px-4 space-x-6">
                {/* /teams/${team} routes to designated team page when button clicked*/}
                {teams.map((team) => (<button key={team} onClick={() => navigate(`/teams/${team}`)} className="font-bold text-5xl text-white bg-black p-5 rounded-xl hover:bg-orange-700 hover:-translate-y-2 transition">{team}</button>)


                )}
            </div>

        </section>
    )

}