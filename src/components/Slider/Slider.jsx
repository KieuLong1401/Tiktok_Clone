import { useState } from 'react'

function Slider({ fillColor, emptyColor, className, ...props }) {
    const [inputValue, setInputValue] = useState(0)

    var percent = (100 * (inputValue - props.min)) / (props.max - props.min)

    return (
        <input
            type='range'
            className={className}
            style={{
                backgroundImage: `linear-gradient( to right, ${fillColor}, ${fillColor} ${percent}%, ${emptyColor} ${percent}%)`,
            }}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            {...props}
        />
    )
}

export default Slider
