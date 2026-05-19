const MaterialPill = ({ material, handleClick }) => {
    return(
        <section className="flex justify-center gap-1 rounded-full border-2 border-pink-700 bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700 max-w-36">
            <span className="truncate">
                {material}
            </span>
            <button className="text-pink-700" onClick={() => handleClick(material)}>&times;</button>
        </section>
    )
}

export default MaterialPill;