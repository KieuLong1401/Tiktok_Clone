import styles from './Button.module.scss'

function Button({ to, href, children, onClick }) {
    let Comp = 'button'

    const classes = styles.wrapper

    return (
        <Comp className={classes}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button
