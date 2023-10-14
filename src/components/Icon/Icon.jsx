import { useLocation } from 'react-router-dom'

import { forwardRef, useState } from 'react'

import PropTypes from 'prop-types'

const Icon = forwardRef(({ child, triggered, trigAt, trigOnClick, ...props }, ref) => {
    const currentPath = useLocation()
    const [isTrig, setIsTrig] = useState(trigAt ? trigAt == currentPath.pathname : false)

    var Tag = 'button'

    if (trigAt) {
        Tag = 'a'
    }

    return (
        <Tag
            ref={ref}
            {...props}
            href={trigAt ? trigAt : ''}
            onClick={trigOnClick ? () => setIsTrig(!isTrig) : () => {}}>
            {!isTrig ? child : triggered}
        </Tag>
    )
})

Icon.propTypes = {
    child: PropTypes.node.isRequired,
    triggered: PropTypes.node,
    trigAt: PropTypes.string,
    trigOnClick: PropTypes.bool,
}

export default Icon
