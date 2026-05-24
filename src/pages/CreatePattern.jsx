import { useState } from "react";
import { usePatternContext } from "../hooks/usePatternContext";
import { Pattern, PatternStep } from "../utils/Pattern";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CategoryPill from "../components/CategoryPill";
import MaterialPill from "../components/MaterialPill";
import toast from "react-hot-toast";
import StepAccordionForm from "../components/StepAccordionForm";


const CreatePattern = () => {
    const {dispatch} = usePatternContext();
    const [patternName, setPatternName] = useState("");
    const [category, setCategory] = useState([]);
    const [difficulty, setDifficulty] = useState("");
    const [materials, setMaterials] = useState([]);
    const [steps, setSteps] = useState([]);
    const [notes, setNotes] = useState("");

    const [categoryInput, setCategoryInput] = useState("");
    const [materialInput, setMaterialInput] = useState("");

    const navigate = useNavigate();

    //Setting diffculty
    const handleRadioChange = (e) => {
        setDifficulty(e.target.value)
    }

    //handling category
    const handleRemoveCategory = (cat) => setCategory(category.filter(c => c !== cat));
    //handling material
    const handleRemoveMaterial = (mat) => setMaterials(materials.filter(m => m !== mat));

    //handling steps
    //Add New Step
    const addPatternStep = () =>{
        const id = crypto.randomUUID();
        const newStep = new PatternStep(id, steps.length + 1, "", 1);

        setSteps([...steps, newStep]);
    }

    //Delete Steps
    const deletePatternStep = (id) =>{
        const filteredSteps = steps
        .filter((s) => s.id !== id)
        .map((step, index) => ({
            ...step,
            rowNumber: index + 1,
        }))

        setSteps(filteredSteps)
    }

    //UpdateInstruction
    const updateStepInstruction = (id, value) => {
        const updatedSteps = steps.map((step) =>{
            if(step.id === id){
                return new PatternStep(step.id, step.rowNumber, value, step.repeatCount)
            }

            return step;
        })

        setSteps(updatedSteps);
    }

    //UpdateRepeatCount
    const updateRepeatCount = (id, value) =>{
        const updatedSteps = steps.map((step) =>{
            if(step.id === id){
                return new PatternStep(
                    step.id, 
                    step.rowNumber, 
                    step.instruction, 
                    parseInt(value) < 1 ? 1 : parseInt(value
                        
                    )
                )
            }

            return step
        })

        setSteps(updatedSteps);
    }


    const handleSubmit = () => {
        if (patternName.trim()) {
            const newPattern = new Pattern(
                patternName, 
                category, 
                difficulty, 
                materials, 
                steps, 
                notes
            );

            dispatch({type: "ADD_PATTERN", payload: newPattern});
            toast.success(`${patternName} added!`);
            setPatternName("");
            setCategory([]);
            setDifficulty("");
            setMaterials([]);
            setSteps([]);
            setNotes("");
            navigate('/')
            
        }else{
            toast.error("An error occured while adding the pattern. Please try again.");
        }
    }
    
    
    return (
        <section className="m-4 px-4 py-5">
            <Header 
                title="Create New Pattern" 
                subtitle="Fill out the details below to add a new pattern to your repository." 
            />

            <div className="mb-3 mt-5">
                <label className="text-sm">What do you call this pattern?</label>
                <input
                    type="text"
                    className="w-full rounded-lg border-2 border-gray-300 px-3 py-2 mt-1"
                    placeholder="e.g. Sunflower Coaster"
                    value={patternName}
                    onChange={(e) => setPatternName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="text-sm">How hard to craft this pattern?</label>
                <div className="flex gap-3 mt-1">
                    <div className="flex items-center-safe jus gap-1">
                        <input 
                            type="radio" 
                            name="difficulty" 
                            value="Beginner" 
                            id="beginner"
                            checked={difficulty === "Beginner"}
                            onChange={handleRadioChange}
                        />
                        <label className="text-sm font-bold text-pink-400" htmlFor="beginner">Beginner</label>
                    </div>
                    <div className="flex items-center-safe gap-1">
                        <input 
                            type="radio" 
                            name="difficulty" 
                            value="Intermediate" 
                            id="intermediate"
                            checked={difficulty === "Intermediate"}
                            onChange={handleRadioChange}
                        />
                        <label className="text-sm font-bold text-pink-500" htmlFor="intermediate">Intermediate</label>
                    </div>
                    <div className="flex items-center-safe gap-1">
                        <input 
                            type="radio" 
                            name="difficulty" 
                            value="Advance" 
                            id="advance"
                            checked={difficulty === "Advance"}
                            onChange={handleRadioChange}
                        />
                        <label className="text-sm font-bold text-pink-600" htmlFor="advance">Advance</label>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label className="text-sm">What type of pattern is this?</label>
                <form onSubmit={(e) =>{
                    e.preventDefault();
                        if(categoryInput.trim()){
                        setCategory([...category, categoryInput.trim()]);
                        setCategoryInput("");
                    }
                    
                }}>
                    <input
                        type="text"
                        className="w-full col-span-4 rounded-lg border-2 border-gray-300 px-3 py-2"
                        value={categoryInput}
                        placeholder="e.g. Home Decor"
                        onChange={(e) => setCategoryInput(e.target.value)}
                    />
                </form>

                <div className="mt-2 flex gap-1.5 flex-wrap">
                    {category.map((cat, index) => (
                        <CategoryPill key={index}>
                            <span>{cat}</span>
                            <button className="text-pink-700" onClick={() => handleRemoveCategory(cat)}>&times;</button>
                        </CategoryPill>
                    ))}
                </div>
            </div>

            <div className="mb-2">
                <label className="text-sm">What materials are used in this pattern?</label>
                <form onSubmit={(e) =>{
                    e.preventDefault();
                    if(materialInput.trim()){
                        setMaterials([...materials, materialInput]);
                        setMaterialInput("");
                    }

                }}>
                    <input
                        type="text"
                        className="w-full col-span-4 rounded-lg border-2 border-gray-300 px-3 py-2"
                        value={materialInput}
                        placeholder="e.g. Bulky yarn"
                        onChange={(e) => setMaterialInput(e.target.value)}
                    />
                </form>

                <div className="mt-2 flex gap-1.5 flex-wrap">
                    {materials.map((mat, index) => (
                        <MaterialPill key={index}>
                            <span className="truncate">{mat}</span>
                            <button className="text-pink-700" onClick={() => handleRemoveMaterial(mat)}>&times;</button>
                        </MaterialPill>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-500 pt-5">
                <label className="text-sm">Describe the steps to craft this pattern.</label>
                {steps.map((step) =>(
                    <StepAccordionForm 
                        key={step.id} 
                        step={step} deleteStep={deletePatternStep}
                        updateInstruction={updateStepInstruction}
                        updateRepeatCount={updateRepeatCount}
                    />
                ))}

                <button 
                    onClick={addPatternStep}
                    className="rounded-lg bg-pink-500 text-white px-3 py-2 text-sm"
                >
                    Add Row
                </button>
            </div>
            
            <div className="flex gap-2 mt-5">
                <button onClick={handleSubmit} className="rounded-lg bg-pink-500 text-white px-3 py-2">Create</button>
                <Link className="rounded-lg bg-pink-400 text-white px-3 py-2" to="/">Back</Link>
            </div>

        </section>
    )
}

export default CreatePattern;