import { useLocation, Link } from "react-router-dom";
import { usePatternContext } from "../hooks/usePatternContext";
import ArrowLeft from "../icons/ArrowLeft";
import MaterialPill from "../components/MaterialPill";
import CategoryPill from "../components/CategoryPill";
import StepAccordionItem from "../components/StepAccordionItem";

const PatternView = () => {
    const data = useLocation();
    const {patterns} = usePatternContext();

    const pattern = patterns.find((p) => p.id === data.state.patternId)

    return (
        <section className="p-5">
            <header className="flex flex-row justify-between">
                <h1 className="text-xl font-bold">
                    {pattern.name}
                </h1>
                <Link to="/">
                    <ArrowLeft />
                </Link>
            </header>
            <div className="mt-2 flex gap-1.5 flex-wrap">
                {pattern.category.map((cat, index) => (
                    <CategoryPill key={index}>
                        <span>{cat}</span>
                    </CategoryPill>
                ))}
            </div>

            <div className="mt-12">
                <h3 className="font-semibold">Materials:</h3>
                <div className="mt-2 flex gap-1.5 flex-wrap">
                    {pattern.materials.map((mat, index) => (
                        <MaterialPill key={index}>
                            <span className="truncate">{mat}</span>
                        </MaterialPill>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h3 className="font-semibold mb-2">Instructions:</h3>
                {pattern.steps.map((step) =>(
                    <StepAccordionItem 
                        key={step.id} 
                        step={step} 
                    />
                ))}
            </div>

            <div className="flex justify-center mt-5">
                <Link to="/tracking-system" state={{patternId: pattern.id}} className="bg-pink-300 px-5 py-2 rounded-2xl text-xl font-bold text-white">Start Now!</Link>
            </div>
        </section>
    )
}

export default PatternView;