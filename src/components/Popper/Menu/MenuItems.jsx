import styles from './Menu.module.scss'

import Button from '../../Button'

function MenuItems({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={styles.item} onClick={onClick}>
            {data.title}
        </Button>
    )
}

export default MenuItems
