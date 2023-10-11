import { useLocation } from 'react-router-dom'

import { forwardRef, useState } from 'react'

function Icon({ child, triggered, trigAt, trigOnClick, ...props }, ref) {
    const currentPath = useLocation()
    const [isTrig, setIsTrig] = useState(trigAt ? trigAt == currentPath.pathname : false)

    var Tag = 'button'

    if (trigAt) {
        Tag = 'a'
    }

    function changeTrigStatus() {
        setIsTrig(!isTrig)
    }

    return (
        <Tag
            ref={ref}
            {...props}
            href={trigAt ? trigAt : ''}
            onClick={trigOnClick ? changeTrigStatus : () => {}}>
            {!isTrig ? child : triggered}
        </Tag>
    )
}

export default forwardRef(Icon)
