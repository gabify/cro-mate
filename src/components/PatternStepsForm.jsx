const PatternStepsForm = ({ patternData, setPatternData, onNext }) => {
    const addPatternInstruction = () => {
        const newStep = {
            id: crypto.randomUUID(),
            rowNumber: patternData.steps.length + 1,
            instruction: "",
        }

        setPatternData("steps", [
            ...patternData.steps,
            newStep,
        ])
    }

    const updatePatternInstruction = (id, value) =>{
        const updatedPatternInstruction = patternData.steps.map((step) =>{
            if(step.id === id){
                return {
                    ...step, instruction: value
                }
            }

            return step;
        })

        setPatternData("steps", updatedPatternInstruction)
    }

    const removePatternInstruction = (id) => {

        const filteredSteps =
            patternData.steps
            .filter((step) => step.id !== id)
            .map((step, index) => ({
                ...step,
                rowNumber: index + 1,
            }))

            setPatternData("steps", filteredSteps)
    }



    return (
        <section className="space-y-4">
            <button onClick={addPatternInstruction}>
                Add Row
            </button>
            {patternData.steps.map((step) =>(
                <div key={step.id}>
                    <p>{step.rowNumber}</p>
                    <textarea 
                        value={step.instruction}
                        onChange={(e) =>{
                            updatePatternInstruction(step.id, e.target.value)
                        }}
                    />
                    <button onClick={() => removePatternInstruction(step.id)}>
                        &times;
                    </button>
                </div>
                
            ))}
        </section>
    )
}

export default PatternStepsForm;