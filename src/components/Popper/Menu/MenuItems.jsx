import styles from './Menu.module.scss'

import Button from '../../Button'

import PropTypes from 'prop-types'

function MenuItems({ data, onClick }) {
    const classes = `
    ${styles.item}
    ${data.compartment ? styles.compartment : ''}
    `
    return (
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    )
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItems
