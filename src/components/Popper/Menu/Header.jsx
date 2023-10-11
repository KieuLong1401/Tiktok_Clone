import styles from './Menu.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'

function Header({ title, onBack }) {
    return (
        <header className={styles.header}>
            <button className={styles.backBtn} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>
            <h4 className={styles.headerTitle}>{title}</h4>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
}

export default Header
