type CaloriesDisplayProps = {
    calories: number,
    text: string
}

function CaloriesDisplay({calories, text} : CaloriesDisplayProps) {
    return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center text-2xl">
            <span className="font-black text-6xl text-orange">{calories}</span>
            {text}
        </p>
    )
}

export default CaloriesDisplay