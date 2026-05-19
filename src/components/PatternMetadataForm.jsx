import { useState } from "react";
import CategoryPill from "./CategoryPill";
import MaterialPill from "./MaterialPill";

const PatternMetadataForm = ({ patternData, setPatternData, onNext }) => {
    const [categoryInput, setCategoryInput] = useState("");
    const [materialInput, setMaterialInput] = useState("");
    
    return(
        <section className="space-y-4">
            <div className="mb-2">
                <label className="text-sm">What do you call this pattern?</label>
                <input
                    type="text"
                    className="w-full rounded-lg border-2 border-gray-300 px-3 py-2 mt-1"
                    placeholder="e.g. Sunflower Coaster"
                    value={patternData.patternName}
                    onChange={(e) => setPatternData("patternName", e.target.value)}
                />
            </div>

            <div className="mb-2">
                <label className="text-sm">How hard is to craft this pattern?</label>
                <div className="flex gap-3 mt-1">
                    <div className="flex items-center-safe jus gap-1">
                        <input type="radio" name="difficulty" id="difficulty" onChange={() => setPatternData("difficulty", "Beginner")}/>
                        <label className="text-sm font-bold text-pink-400" htmlFor="difficulty">Beginner</label>
                    </div>
                    <div className="flex items-center-safe gap-1">
                        <input type="radio" name="difficulty" id="difficulty" onChange={() => setPatternData("difficulty", "Beginner")}/>
                        <label className="text-sm font-bold text-pink-500" htmlFor="difficulty">Intermediate</label>
                    </div>
                    <div className="flex items-center-safe gap-1">
                        <input type="radio" name="difficulty" id="difficulty" onChange={() => setPatternData("difficulty", "Beginner")}/>
                        <label className="text-sm font-bold text-pink-600" htmlFor="difficulty">Advance</label>
                    </div>
                </div>
            </div>

            <div className="mb-2">
                <label className="text-sm">What type of pattern is this?</label>
               <div className="grid grid-cols-5 gap-2 mt-1">
                    <input
                        type="text"
                        className="w-full col-span-4 rounded-lg border-2 border-gray-300 px-3 py-2"
                        value={categoryInput}
                        placeholder="e.g. Home Decor"
                        onChange={(e) => setCategoryInput(e.target.value)}
                    />
                    <button 
                        className="col-span-1 rounded-lg bg-pink-300 text-white"
                        onClick={() => {
                            if(categoryInput.trim()){
                                setPatternData("category", [...patternData.category, categoryInput.trim()]);
                                setCategoryInput("");
                            }}}
                    >
                        Add
                    </button>
                </div>

                <div className="mt-2 flex gap-1.5 flex-wrap">
                    {patternData.category.map((cat, index) => (
                        <CategoryPill key={index} category={cat} />
                    ))}
                </div>
            </div>

             <div className="mb-2">
                <label className="text-sm">What materials are used in this pattern?</label>
               <div className="grid grid-cols-5 gap-2 mt-1">
                    <input
                        type="text"
                        className="w-full col-span-4 rounded-lg border-2 border-gray-300 px-3 py-2"
                        value={materialInput}
                        placeholder="e.g. Bulky yarn"
                        onChange={(e) => setMaterialInput(e.target.value)}
                    />
                    <button 
                        className="col-span-1 rounded-lg bg-pink-300 text-white"
                        onClick={() => {
                            if(materialInput.trim()){
                                setPatternData("materials", [...patternData.materials, materialInput.trim()]);
                                setMaterialInput("");
                            }}}
                    >
                        Add
                    </button>
                </div>

                <div className="mt-2 flex gap-1.5 flex-wrap">
                    {patternData.materials.map((mat, index) => (
                        <MaterialPill key={index} material={mat} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PatternMetadataForm;