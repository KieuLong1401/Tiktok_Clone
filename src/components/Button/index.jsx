import styles from './Button.module.scss'

import { Link } from 'react-router-dom'

function Button({
    to,
    href,
    primary = false,
    reverse = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = `
    ${styles.wrapper} 
    ${primary ? styles.primary : ''} 
    ${reverse ? styles.reverse : ''} 
    ${small ? styles.small : ''}
    ${large ? styles.large : ''}
    `

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button
