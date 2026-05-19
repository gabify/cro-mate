const PatternListItem = ({ pattern }) => {
    return(
        <li key={pattern.id} className="text-gray-800 text-sm bg-pink-200 mb-2 py-2 px-3 rounded-sm">
            <h3 className="font-medium">{pattern.name}</h3>
        </li>
    )
}

export default PatternListItem;