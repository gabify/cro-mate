import { Link, useLocation } from "react-router-dom";
import { usePatternContext } from "../hooks/usePatternContext";
import ArrowLeft from "../icons/ArrowLeft";
import { useState } from "react";

const TrackingSystem = () => {
    const data = useLocation();
    const {patterns} = usePatternContext();

    const pattern = patterns.find((p) => p.id === data.state.patternId)
    const steps = pattern.steps

    const [trackingSession, setTrackingSession] = useState({
        patternId: pattern.id,
        currentRow: 1,
        updateAt: Date.now()
    })
    
    return(
        <main>
             <header className="flex flex-row justify-between p-5 mb-10 bg-pink-200">
                <h1 className="text-xl font-bold">
                    {pattern.name}
                </h1>
                <Link to="/pattern" state={{patternId: pattern.id}}>
                    <ArrowLeft />
                </Link>
            </header>
            <section className="px-5">
                <div className="text-center mb-10">
                    <h1 className="text-6xl font-bold -mb-2">{trackingSession.currentRow}</h1>
                    <small className="font-semibold">Round</small>
                </div>
                <p className="my-10 text-center text-3xl">
                    {steps[trackingSession.currentRow - 1].instruction}
                </p>
                <div className="flex flex-row justify-between">
                    <button 
                        className="bg-pink-700 px-5 py-2 text-white font-semibold rounded-lg"
                        onClick={() => {
                            if(trackingSession.currentRow > 1){
                                setTrackingSession({
                                    patternId: pattern.id,
                                    currentRow: trackingSession.currentRow - 1,
                                    updateAt: Date.now()
                                })
                            }
                        }}
                    >
                        Previous
                    </button>
                    {trackingSession.currentRow -1 === steps.length -1 ? (
                        <button className="bg-pink-700 px-5 py-2 text-white font-semibold rounded-lg">Finish</button>
                    ):
                    (<button 
                            className="bg-pink-700 px-5 py-2 text-white font-semibold rounded-lg"
                            onClick={() => {
                                if(trackingSession.currentRow < steps.length){
                                    setTrackingSession({
                                        patternId: pattern.id,
                                        currentRow: trackingSession.currentRow + 1,
                                        updateAt: Date.now()
                                    })
                                }
                            }}
                        >
                            Next
                        </button>
                    )}
                </div>
            </section>
        </main>
    )
}

export default TrackingSystem;