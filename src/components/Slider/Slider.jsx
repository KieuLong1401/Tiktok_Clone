import { useState } from 'react'

function Slider({ fillColor, emptyColor, className, value, ...props }) {
    var percent = (100 * (value - props.min)) / (props.max - props.min)

    return (
        <input
            type='range'
            className={className}
            style={{
                backgroundImage: `linear-gradient( to right, ${fillColor}, ${fillColor} ${percent}%, ${emptyColor} ${percent}%)`,
            }}
            value={value}
            {...props}
        />
    )
}

export default Slider
