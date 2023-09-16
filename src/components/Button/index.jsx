import styles from './Button.module.scss'

import { Link } from 'react-router-dom'

function Button({
    to,
    href,
    primary = false,
    reverse = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps,
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
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
    ${text ? styles.text : ''}
    ${disabled ? styles.disabled : ''}
    ${rounded ? styles.rounded : ''}
    ${className}
    `

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button
