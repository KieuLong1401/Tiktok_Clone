import styles from './Popper.module.scss'

function Wrapper({ className, children }) {
    return <div className={styles.wrapper + ' ' + className}>{children}</div>
}

export default Wrapper
