const MaterialPill = ({ children }) => {
    return(
        <section className="flex justify-center gap-2 rounded-full border-2 border-pink-700 bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700 max-w-36">
            {children}
        </section>
    )
}

export default MaterialPill;