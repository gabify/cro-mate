import { useState } from "react";
import ChevronDown from "../icons/ChevronDown";
import ChevronRight from "../icons/chevronRight";

const StepAccordionItem = ({step}) =>{
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
            </header>
            <div className={`
                    transition-all duration-150 ease-in-out transform my-2 mx-3
                    ${!isOpen ? 'hidden' : 'block'}
                `}
            >
                <p>{step.instruction}</p>
                <div className="flex flex-row gap-2">
                    <p>Repeat: {step.repeatCount}</p>
                </div>
            </div>
        </section>
    )
}

export default StepAccordionItem;