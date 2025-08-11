// useNavigate from react-router-dom used for routing to filteredTeam
import { useNavigate } from "react-router-dom" 

export const Teams = () =>{
    const navigate = useNavigate();

    const teams = ["ATL","BOS","BRK","CHO","CHI","CLE","DAL","DEN","DET","GSW","HOU","IND","LAC","LAL","MEM","MIA","MIL","MIN","NOP","NYK","OKC","ORL","PHI","PHO","POR","SAC","SAS","TOR","UTA","WAS"]
    //list containing list of teams

    return(
        <section id="teams" className="min-h-screen flex justify-center items-center relative mt-20">
            <div className="flex flex-wrap justify-center gap-6 max-2-5xl mx-auto">
                {/* /teams/${team} routes to designated team page when button clicked*/}
                {teams.map((team) => (<button key={team} onClick={() => navigate(`/teams/${team}`)} className="font-bold text-5xl text-white bg-black p-5 rounded-xl hover:bg-orange-700 hover:-translate-y-2 transition">
                    <img src={`/logos/${team}.png`}/>
                </button>)


                )}
            </div>

        </section>
    )

}