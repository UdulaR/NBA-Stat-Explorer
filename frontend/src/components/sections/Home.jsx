import nbapic from '../../assets/nbapic.jpg'


export const Home = () =>{
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative" style={{backgroundImage: `url(${nbapic})`, backgroundSize: `cover`, backgroundPosition: `center`}}>
            <div className="text-center z-10 px-4">
                <h1 className="text-white font-bold text-7xl">NBA STAT EXPLORER</h1>
            </div>

        </section>
    )

}