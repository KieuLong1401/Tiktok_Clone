import styles from './Menu.module.scss'

import Button from '../../Button'

function MenuItems({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={styles.item}>
            {data.title}
        </Button>
    )
}

export default MenuItems
