import styles from './Image.module.scss'
import { noImage } from '../../assets/images'

import { forwardRef, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

const Image = forwardRef(({ className, src, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('')

    function handleError() {
        setFallBack(noImage)
    }

    return (
        <img
            className={(fallBack == '' ? styles.wrapper : styles.fallBack) + ' ' + className}
            src={fallBack || src}
            ref={ref}
            {...props}
            onError={handleError}
        />
    )
})

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
}

export default Image
