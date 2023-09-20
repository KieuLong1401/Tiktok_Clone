import styles from './AccountItem.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image'

function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <Image
                className={styles.avatar}
                src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a70040726c59e998be0bc29965982fde~c5_300x300.webp?x-expires=1694404800&x-signature=n%2FBQp1LXVg%2FlGKLe4ydmra073wM%3D'
                alt='long'
            />
            <div className={styles.info}>
                <h4 className={styles.userName}>
                    <span>longdeptroai1401</span>
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        color='#20D5EC'
                        className={styles.checkedIcon}
                    />
                </h4>
                <p className={styles.name}>long dep troai</p>
            </div>
        </div>
    )
}

export default AccountItem
