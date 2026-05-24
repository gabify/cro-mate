import { useRef, useState } from "react";
import PatternListItem from "../components/PatternListItem";
import { usePatternContext } from "../hooks/usePatternContext";
import { Link } from "react-router-dom";


const Home = () => {
    const {patterns} = usePatternContext(); 
    
    return(
        <section>
            <header className="text-center py-2.5">
                <h1 className="-mb-3 text-3xl font-bold text-pink-300">Crochete</h1>
                <small className="font-extralight text-gray-800">~Mate~</small>
            </header>

            <div className="px-3 flex flex-col">
                <p className="text-center -mb-1">My Patterns</p>
                <Link to="/new" className="hover:bg-pink-300 hover:text-white hover:cursor-pointer text-gray-800 font-bold py-0.5 px-2 rounded text-xs w-fit self-center">
                    New Pattern
                </Link>

                <ul className=" pt-5">
                    {patterns.map((pattern) => (
                    <PatternListItem key={pattern.id} pattern={pattern} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Home;