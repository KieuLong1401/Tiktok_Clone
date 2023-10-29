import { useLocation } from 'react-router-dom'

import { forwardRef, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const Icon = forwardRef(
    ({ className, child, triggered, trigAt, trigOnClick, link = true, ...props }, ref) => {
        const currentPath = useLocation().pathname
        const [isTrig, setIsTrig] = useState(trigAt ? trigAt == currentPath : false)

        var Tag = 'button'
        if (trigAt && link) {
            Tag = 'a'
        }

        useEffect(() => {
            setIsTrig(trigAt ? trigAt == currentPath : false)
        }, [currentPath])

        return (
            <Tag
                className={className}
                ref={ref}
                {...props}
                href={trigAt && link ? trigAt : ''}
                onClick={trigOnClick ? () => setIsTrig(!isTrig) : () => {}}>
                {!isTrig ? child : triggered}
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
