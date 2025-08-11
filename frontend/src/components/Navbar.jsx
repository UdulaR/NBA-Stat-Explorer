import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    
    // makes sure when menu is open you cant scroll background (hidden) and when false you can scroll
    // ,[menuOpen] tells react to run effect everytime value of menuOpen changes

    return (<nav className="fixed top-0 w-full z-40 bg-black border-b border-white/10 shadow-lg font-poppins">
        <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center h-16">
                <Link to="/" className="font-mono text-xl font-bold text-white font-poppins">NBA STAT EXPLORER🏀</Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                    <Link to="/players" className="text-gray-300 hover:text-white transition-colors">Players</Link>
                    <Link to="/teams" className="text-gray-300 hover:text-white transition-colors">Teams</Link>
                    <Link to="/position" className="text-gray-300 hover:text-white transition-colors">Position</Link>
                    <Link to="/search" className="text-gray-300 hover:text-white transition-colors">Search</Link>
                    
                    

                </div>


            </div>
        </div>

    </nav>
    );
};