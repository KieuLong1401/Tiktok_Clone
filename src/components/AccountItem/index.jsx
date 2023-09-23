import styles from './AccountItem.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image'
import { Link } from 'react-router-dom'

function AccountItem({ data, onClick }) {
    return (
        <Link className={styles.wrapper} to={`/@${data.nickname}`} onClick={onClick}>
            <Image className={styles.avatar} src={data.avatar} alt={data.nickname} />
            <div className={styles.info}>
                <h4 className={styles.userName}>
                    <span>{data.nickname}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            color='#20D5EC'
                            className={styles.checkedIcon}
                        />
                    )}
                </h4>
                <p className={styles.name}>{data.full_name}</p>
            </div>
        </Link>
    )
}

export default AccountItem
