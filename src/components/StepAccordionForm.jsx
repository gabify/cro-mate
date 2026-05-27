import { useState } from "react";
import ChevronDown from "../icons/ChevronDown";
import ChevronRight from "../icons/ChevronRight";
import TrashSolid from "../icons/TrashSolid";

const StepAccordionForm = ({step, deleteStep, updateInstruction, updateRepeatCount}) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <section className="w-full mb-1 shadow-md rounded-2xl">
            <header 
                className={`
                        flex items-center justify-between mb-2 p-2 rounded-t-2xl transition-colors duration-500 ease-in-out 
                        ${isOpen ? 'bg-pink-200' : ""}
                    `} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center-safe gap-2">
                    {isOpen ? (
                        <ChevronDown />
                    ): (
                        <ChevronRight />
                    )}
                    <h5>Row {step.rowNumber}</h5>
                </div>
                <button className="text-xs text-pink-400" onClick={()=> deleteStep(step.id)}>
                    <TrashSolid />
                </button>
            </header>
            <div className={`
                    transition-all duration-150 ease-in-out transform my-2 mx-3
                    ${!isOpen ? 'hidden' : 'block'}
                `}
            >
                <textarea 
                    rows="3" 
                    className={`
                        w-full focus:outline-none focus:ring-0 focus:border-transparent 
                    `} 
                    placeholder="ex. Ch1"
                    onChange={(e) => updateInstruction(step.id, e.target.value)}
                ></textarea>
                <div className="flex flex-row gap-2">
                    <label htmlFor="repeatCount">Repeat: </label>
                    <input 
                        type="number" 
                        value={step.repeatCount} 
                        id="repeatCount" 
                        className="w-full focus:outline-none focus:ring-0 focus:border-transparent"
                        onChange={(e) => updateRepeatCount(step.id, e.target.value)}
                    />
                </div>
            </div>
        </section>
    )
}

export default StepAccordionForm;

