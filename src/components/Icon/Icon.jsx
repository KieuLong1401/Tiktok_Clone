import { useLocation } from 'react-router-dom'

import { forwardRef, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const Icon = forwardRef(
    (
        {
            className,
            child,
            triggered,
            trigAt,
            trigOnClick,
            link = true,
            onClick = () => {},
            isTriggering,
            fixed,
            ...props
        },
        ref
    ) => {
        const currentPath = useLocation().pathname
        const [isTrig, setIsTrig] = useState(trigAt ? trigAt == currentPath : false)

        var Tag = 'button'
        if (trigAt && link) {
            Tag = 'a'
        }

        useEffect(() => {
            setIsTrig(trigAt ? trigAt == currentPath : false)
        }, [currentPath])

        function iconOnClick() {
            if (trigOnClick) {
                setIsTrig(!isTrig)
            }
            onClick()
        }

        return (
            <Tag
                className={className}
                ref={ref}
                href={trigAt && link ? trigAt : ''}
                onClick={iconOnClick}
                {...props}>
                {fixed ? child : isTriggering ? triggered : isTrig ? triggered : child}
            </Tag>
        )
    }
)

Icon.propTypes = {
    child: PropTypes.node.isRequired,
    triggered: PropTypes.node,
    trigAt: PropTypes.string,
    trigOnClick: PropTypes.bool,
}

export default Icon
