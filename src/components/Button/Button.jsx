import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Button.module.scss'

import { Link, useLocation } from 'react-router-dom'

function Button({
    to,
    href,
    activeTo = false,
    primary = false,
    reverse = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    const currentPath = useLocation().pathname

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
    ${activeTo && (currentPath == to || currentPath == href) ? styles.active : ''}
    ${className}
    `
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={'icon' + ' ' + styles.icon}>{leftIcon}</span>}
            <span className={styles.tittle}>{children}</span>
            {rightIcon && <span className={'icon' + ' ' + styles.icon}>{leftIcon}</span>}
        </Comp>
    )
}

export default Button
