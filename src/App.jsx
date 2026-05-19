import { useRef, useState } from "react";
import PatternListItem from "./components/PatternListItem";
import { usePatternContext } from "./hooks/usePatternContext";
import AddPatternDialog from "./components/AddPatternDialog";
import { Toaster } from "react-hot-toast";

function App() {

  const {patterns} = usePatternContext();

  const [isAddPatternDialogOpen, setIsAddPatternDialogOpen] = useState(false);

  const dialogRef = useRef(null);
  const openDialog = () => {
    dialogRef.current.showModal();
    setIsAddPatternDialogOpen(true);
  }

  const closeDialog = () => {
    dialogRef.current.close();
    setIsAddPatternDialogOpen(false);
  }


  return (
    <>
      <section>
        <header className="text-center py-2.5">
          <h1 className="-mb-3 text-3xl font-bold text-pink-300">Crochete</h1>
          <small className="font-extralight text-gray-800">~Mate~</small>
        </header>

        <AddPatternDialog 
          isOpen={isAddPatternDialogOpen} 
          dialogRef={dialogRef} 
          onClose={closeDialog} 
        />

        <div className="px-3 flex flex-col">
          <p className="text-center -mb-1">My Patterns</p>
          <button 
            className=" hover:bg-pink-300 hover:text-white hover:cursor-pointer text-gray-800 font-bold py-0.5 px-2 rounded text-xs w-fit self-center"
            onClick={openDialog}>
            Add New Pattern
          </button>

          <ul className=" pt-5">
            {patterns.map((pattern) => (
              <PatternListItem key={pattern.id} pattern={pattern} />
            ))}
          </ul>
        </div>

        <Toaster 
          position="bottom-center"
          toastOptions={{
            duration: 2000,
            removeDelay: 1000,
          }}
        />
      </section>
    </>
  )
}

export default App
