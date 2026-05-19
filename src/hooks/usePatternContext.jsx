import { PatternContext } from "../context/PatternContext";
import { useContext } from "react";

export const usePatternContext = () => {
    const context = useContext(PatternContext);

    if(!context){
        throw Error("usePatternContext must be used within a PatternProvider");
    }

    return context;
}