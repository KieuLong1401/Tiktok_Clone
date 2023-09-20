import styles from './Image.module.scss'
import { noImage } from '../../assets/images'

import { forwardRef, useState, useEffect } from 'react'

function Image({ className, src, ...props }, ref) {
    const [fallBack, setFallBack] = useState('')

    function handleError() {
        setFallBack(noImage)
    }

    return (
        <img className={(fallBack == '' ? styles.wrapper : styles.fallBack) + ' ' + className} src={fallBack || src} ref={ref} {...props} onError={handleError}/>
    )
}

export default forwardRef(Image)