import { useState } from "react";
import { usePatternContext } from "../hooks/usePatternContext";
import { Pattern } from "../utils/Pattern";
import Header from "./Header";
import CategoryPill from "./CategoryPill";
import MaterialPill from "./MaterialPill";
import toast from "react-hot-toast";

const AddPatternDialog = ({isOpen, dialogRef, onClose}) => {

    const {dispatch} = usePatternContext();
    const [patternName, setPatternName] = useState("");
    const [category, setCategory] = useState([]);
    const [difficulty, setDifficulty] = useState("");
    const [materials, setMaterials] = useState([]);
    const [steps, setSteps] = useState([]);
    const [notes, setNotes] = useState("");

    const [categoryInput, setCategoryInput] = useState("");
    const [materialInput, setMaterialInput] = useState("");

    const handleRadioChange = (e) => {
        setDifficulty(e.target.value)
    }

    const handleRemoveCategory = (cat) => setCategory(category.filter(c => c !== cat));

    const handleRemoveMaterial = (mat) => setMaterials(materials.filter(m => m !== mat));


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

            console.log(newPattern)

            dispatch({type: "ADD_PATTERN", payload: newPattern});
            toast.success(`${patternName} added!`);
            setPatternName("");
            setCategory([]);
            setDifficulty("");
            setMaterials([]);
            setSteps([]);
            setNotes("");
            onClose();
        }else{
            toast.error("An error occured while adding the pattern. Please try again.");
        }
    }
    
    
    
    return (
        <dialog className={
            `rounded-lg m-4 px-4 py-5 w-full relative transition-all duration-150 ease-out transform
            ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
            `} 
            ref={dialogRef}
        >

            <button className="absolute top-2 right-2 text-lg text-red-500 hover:text-gray-700" onClick={onClose}>
                &times;
            </button>
            
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
                        <CategoryPill key={index} category={cat} handleClick={handleRemoveCategory} />
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
                        <MaterialPill key={index} material={mat} handleClick={handleRemoveMaterial} />
                    ))}
                </div>
            </div>
            
            <div className="flex gap-2 mt-5">
                <button onClick={handleSubmit} className="rounded-lg bg-pink-500 text-white px-3 py-2">Create</button>
                <button className="rounded-lg bg-pink-400 text-white px-3 py-2" onClick={onClose}>Back</button>
            </div>

        </dialog>
    )
}

export default AddPatternDialog;