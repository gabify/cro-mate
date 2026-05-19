const CategoryPill = ({ category, handleClick }) => {
    return(
        <section className="flex justify-center gap-1 rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
            <span>{category}</span>
            <button className="text-pink-700" onClick={() => handleClick(category)}>&times;</button>
        </section>
    )
}

export default CategoryPill;