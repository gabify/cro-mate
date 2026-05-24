const CategoryPill = ({ children }) => {
    return(
        <section className="flex justify-center gap-1 rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
           {children}
        </section>
    )
}

export default CategoryPill;