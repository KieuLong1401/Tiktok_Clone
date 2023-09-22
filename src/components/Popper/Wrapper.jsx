import { forwardRef } from 'react'
import styles from './Popper.module.scss'

function Wrapper({ className, children }, ref) {
    return (
        <div className={styles.wrapper + ' ' + className} ref={ref}>
            {children}
        </div>
    )
}

export default forwardRef(Wrapper)
