import { useNavigate } from "react-router-dom" //gives navigate() function which allows to programatically navigate to another page without the need to use <Link>


export const Position = () =>{
    const navigate = useNavigate();

    const positions = ["PG", "SG", "SF", "PF", "C"]
    return(
        <section id="positions" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4 space-x-6">
                {positions.map((pos)=> (
                    <button key = {pos} onClick={()=>navigate(`/positions/${pos}`)} className="font-bold text-5xl text-white bg-black p-5 rounded-xl hover:bg-orange-700 hover:-translate-y-2 transition">{pos}</button>
                ))}

            </div>
            
        </section>

    )
}