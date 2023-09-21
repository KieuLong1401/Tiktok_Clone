import { useLocation } from 'react-router-dom'
import { forwardRef, useState } from 'react'

function Icon({ child, triggered, trigAt, trigOnClick, trigOnHover='', ...props }, ref) {
    const currentPath = useLocation()
    const [isTrig, setIsTrig] = useState(trigAt ? trigAt == currentPath.pathname : false)

    var Tag = 'button'

    if (trigAt) {
        Tag = 'a'
    }

    if(trigOnHover) {
        document.querySelector(trigOnHover).addEventListener('mouseenter', () => {
            setIsTrig(true)
        })
        document.querySelector(trigOnHover).addEventListener('mouseleave'), () => {
            setIsTrig(false)
        }
        
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
