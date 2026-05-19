import { createContext, useReducer, useEffect } from "react"; 

export const PatternContext = createContext();

const patternReducer = (state, action) => {
    switch (action.type) {
        case "SET_PATTERNS":
            return {patterns: action.payload};
        case "ADD_PATTERN":
            return {patterns: [...state.patterns, action.payload]};
        case "REMOVE_PATTERN":
            return {patterns: state.patterns.filter(pattern => pattern.id !== action.payload)};
        case "UPDATE_PATTERN":
            return {patterns: state.patterns.map(pattern => pattern.id === action.payload.id ? action.payload : pattern)};
        default:
            return state;
    }
}

const initializer = () => {
    try{
        const patternsFromStorage = localStorage.getItem("patterns");

        return {
            patterns: patternsFromStorage ? JSON.parse(patternsFromStorage) : []
        }
    }catch(error){
        return {patterns: []}
    }
}

export const PatternContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(patternReducer, undefined, initializer);

    useEffect(() =>{
        localStorage.setItem("patterns", JSON.stringify(state.patterns));
    }, [state.patterns]);

    return (
        <PatternContext value={{...state, dispatch}}>
            {children}
        </PatternContext>
    )
}