import styles from './Button.module.scss'
import PropTypes from 'prop-types';

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
    leftIcon,
    rightIcon,
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
            {leftIcon && <span className={'icon' + ' ' + styles.icon}>{leftIcon}</span>}
            <span className={styles.tittle}>{children}</span>
            {rightIcon && <span className={'icon' + ' ' + styles.icon}>{leftIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    reverse: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default Button
