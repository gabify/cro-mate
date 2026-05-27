const PopUpDialog = ({dialogRef, isOpen, title, message, onClose, onApproved}) =>{
    return(
        <section className={`${isOpen ? "fixed top-0 left-0 w-full h-screen bg-black/10 flex items-center justify-center" : "hidden"}`}>
            <dialog className={
                `rounded-lg m-4 px-4 py-5 relative transition-all duration-150 ease-out transform self-center-safe
                ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
                `} 
                ref={dialogRef}
            >
                <header>
                    <h2 className="font-bold tracking-wide">{title}</h2>
                </header>

                <section className="my-5">
                    <p>{message}</p>
                </section>

                <footer className="flex flex-row justify-between px-5 mt-5">
                    <button onClick={onApproved}>Yes</button>
                    <button onClick={onClose}>No</button>
                </footer>

            </dialog>
        </section>
    )
}


export default PopUpDialog;